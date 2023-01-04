import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='bg-gray-400 text-white font-bold flex justify-around items-center h-16 text-3xl w-full'>
        <div>
            crud opperation
        </div>
        <div>
            <NavLink to='/create'>
            <button className='border p-1 w-40 rounded-2xl hover:bg-gray-600 hover:text-white'>Add user</button>
            </NavLink>
        </div>
    </div>
    </>
  )
}

export default Home