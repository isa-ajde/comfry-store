import { useRouteError } from 'react-router-dom'

function ErrorElement() {
  const error = useRouteError()
  console.log(error)
  return <h1>Thre was in error..</h1>
}

export default ErrorElement
