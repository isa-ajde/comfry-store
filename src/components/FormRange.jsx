/* eslint-disable react/prop-types */
import { formatPrice } from '../utils'
import { useState } from 'react'

function FormRange({ name, label, size, price }) {
  const step = 1000
  const maxPrice = 100000
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice)

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text font-bold capitalize tracking-wide text-white  ">
          {label}
        </span>
        <span className="label-text font-bold capitalize tracking-wide text-white  ">
          {formatPrice(selectedPrice)}
        </span>
      </label>
      <input
        type="range"
        name={name}
        id={name}
        step={step}
        className={`range range-accent ${size} `}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
      />
      <div className="flex justify-between text-xs w-full px-2 mt-3">
        <span className="label-text font-bold capitalize tracking-wide text-white  ">
          0
        </span>
        <span className="label-text font-bold capitalize tracking-wide text-white  ">
          Max: {formatPrice(maxPrice)}
        </span>
      </div>
    </div>
  )
}

export default FormRange
