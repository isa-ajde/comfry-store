import { useLoaderData } from 'react-router-dom'
import day from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
day.extend(advancedFormat)

function OrdersList() {
  const { orders, meta } = useLoaderData()
  return (
    <div className="mt-8">
      <h4 className="capitalize text-lg font-bold tracking-wider pb-4 ">
        Total Orders : {meta.pagination.total}
      </h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="text-lg tracking-wide text-base-content ">Name</th>
              <th className="text-lg tracking-wide text-base-content ">
                Address
              </th>
              <th className="text-lg tracking-wide text-base-content ">
                Products
              </th>
              <th className="text-lg tracking-wide text-base-content ">Cost</th>
              <th className="hidden sm:block text-lg tracking-wide text-base-content ">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const id = order.id
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes
              const date = day(createdAt).format('hh:mm a - MMM Do, YYYY ')
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className="hidden sm:block">{date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrdersList
