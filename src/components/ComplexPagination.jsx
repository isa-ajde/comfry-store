import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

function ComplexPagination() {
  const { meta } = useLoaderData()
  const { page, pageCount } = meta.pagination

  const { search, pathname } = useLocation() // useLocation sayfa konumlandırmasını sağlar. search: herhangi bir sorgu parametrelerini verir örneğin "?search=&category=all&companies=all&order=a-z&price=100000"  pathname: ise hangi sayfada olduğunu söyler örneğin "/products"
  const navigate = useNavigate()

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        type="buton"
        className={`btn btn-xs sm:btn-md join-item ${
          activeClass ? ' border-base-300 bg-base-300 ' : ''
        }`}
      >
        {pageNumber}
      </button>
    )
  }

  const renderPageButtons = () => {
    const pageButtons = []
    // first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }))

    // dots
    if (page > 2) {
      pageButtons.push(
        <button key="dot-1" className="btn btn-xs sm:btn-md join-item">
          ...
        </button>
      )
    }

    // active button
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }))
    }

    // dots - 2
    if (page < pageCount - 1) {
      pageButtons.push(
        <button key="dot-2" className="btn btn-xs sm:btn-md join-item">
          ...
        </button>
      )
    }

    // last button
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    )
    return pageButtons
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
        {renderPageButtons()}
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

export default ComplexPagination
