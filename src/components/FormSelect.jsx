/* eslint-disable react/prop-types */
const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text font-bold capitalize tracking-wide text-white">
          {label}
        </span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered capitalize ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}
export default FormSelect
