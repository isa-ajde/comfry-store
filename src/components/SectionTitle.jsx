/* eslint-disable react/prop-types */
function SectionTitle({ text }) {
  return (
    <div className="border-b-2 border-black shadow-2xl  pb-5">
      <h1 className="text-3xl font-medium  tracking-wider capitalize ">
        {text}
      </h1>
    </div>
  )
}

export default SectionTitle
