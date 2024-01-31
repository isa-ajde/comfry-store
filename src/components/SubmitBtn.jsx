import { useNavigation } from 'react-router-dom'

/* eslint-disable react/prop-types */

function SubmitBtn({ text }) {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <button
      type="submit "
      className="btn btn-info w-full font-bold tracking-wide   hover:bg-teal-200  "
    >
      {isSubmitting ? (
        <>
          <span>being sent</span>
          <span className="loading loading-dots loading-lg ml-1 "></span>
        </>
      ) : (
        text || 'Login'
      )}
    </button>
  )
}

export default SubmitBtn
