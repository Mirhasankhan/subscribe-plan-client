import { Link } from 'react-router-dom'

const EmptyData = ({ message, address, label }) => {
  return (
    <div className='h-screen gap-5 flex flex-col justify-center items-center pb-16 '>
      <p className='text-gray-600 text-xl lg:text-3xl'>{message}</p>
      <Link to={address}>
       <button className='btn btn-warning'>{label}</button>
      </Link>
    </div>
  )
}

export default EmptyData