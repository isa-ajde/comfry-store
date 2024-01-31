import { useRouteError, Link } from 'react-router-dom'

function Error() {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8  ">
        <div className="text-center ">
          <p className="text-9xl text-info font-semibold ">404</p>
          <h1 className="text-3xl mt-4 text-white font-bold tracking-wide sm:text-5xl ">
            page not found
          </h1>
          <p className="mt-6  text-lg font-bold tracking-wide shadow-md pb-1 ">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-info capitalize  ">
              go back home
            </Link>
          </div>
        </div>
      </main>
    )
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-4xl font-bold tracking-wide text-center text-info shadow-md pb-2 px-1 ">
        there was an error...
      </h4>
    </main>
  )
}

export default Error
