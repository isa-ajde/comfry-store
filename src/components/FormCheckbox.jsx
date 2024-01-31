/* eslint-disable react/prop-types */
function FormCheckbox({ label, name, defaultValue, size }) {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text font-bold capitalize tracking-wide text-white">
          {label}
        </span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-info ${size}`}
      />
    </div>
  )
}

export default FormCheckbox
