import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'
import { Form, Link, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'

function Filters() {
  const { meta, params } = useLoaderData()
  const { search, company, category, shipping, order, price } = params

  return (
    <Form className="bg-slate-950 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center  ">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* CATEGORİES */}
      <FormSelect
        name="category"
        size="select-sm"
        list={meta.categories}
        label="Select Category"
        defaultValue={category}
      />
      {/* COMPANY */}
      <FormSelect
        name="companies"
        size="select-sm"
        list={meta.companies}
        label="Select Company "
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
        defaultValue={order}
      />
      {/* PRİCE */}
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        price={price}
      />
      {/* FORMcHECKBOX */}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button
        className="btn btn-info btn-sm"
        type="submit"
        onClick={() => toast.success('successed')}
      >
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  )
}

export default Filters
