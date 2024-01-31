import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

function Pagination() {
  const { meta } = useLoaderData()
  const { page, pageCount } = meta.pagination // 1 ,3 page: aktif olan sayfa pageCount: ise kaç sayfa olduğu

  const pages = Array.from({ length: pageCount }, (_, index) => {
    // [1,2,3]
    return index + 1
  })

  const { search, pathname } = useLocation() // useLocation sayfa konumlandırmasını sağlar. search: herhangi bir sorgu parametrelerini verir örneğin "?search=&category=all&companies=all&order=a-z&price=100000"  pathname: ise hangi sayfada olduğunu söyler örneğin "/products"
  const navigate = useNavigate()

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  if (pageCount < 2) return null

  return (
    <div className="mt-10 flex justify-end ">
      <div className="join">
        <button
          type="buton"
          className="btn btn-xs sm:btn-md join-item "
          onClick={() => {
            let prevPage = page - 1
            if (prevPage < 1) prevPage = pageCount
            handlePageChange(prevPage)
          }}
        >
          prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              type="buton"
              className={`btn btn-xs sm:btn-md join-item ${
                pageNumber === page ? ' border-base-300 bg-base-300 ' : ''
              }`}
            >
              {pageNumber}
            </button>
          )
        })}
        <button
          type="buton"
          className="btn btn-xs sm:btn-md join-item "
          onClick={() => {
            let nexPage = page + 1
            if (nexPage > pageCount) nexPage = 1
            handlePageChange(nexPage)
          }}
        >
          next
        </button>
      </div>
    </div>
  )
}

export default Pagination
