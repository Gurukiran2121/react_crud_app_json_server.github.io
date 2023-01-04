import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edituser = () => {
    const [name , setName] = React.useState('')
    const [email , setEmail] = React.useState('')
    const navigate = useNavigate()
    const params = useParams()
 
    React.useEffect(()=>{
        axios.get(`http://localhost:3500/content/${params.id}`)
        .then((response)=>{
            setName(response.data.name)
            setEmail(response.data.email)
        })
    },[])
  return (
    <>
    <div className='container mx-auto flex justify-center'>
    <form className=' container mx-auto w-[50%] flex flex-col gap-2' onSubmit={(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3500/content/${params.id}` , {name, email})
        .then(()=>{
            console.log("data added");
        })
        .catch(()=>{
          console.log("post request failed");  
        })
        navigate('/')

    }}>
        <label className='text-xl'>Name : </label>
        <input type="text" value={name} className='p-2 border rounded-lg outline-none' required onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <label className='text-xl'>Email : </label>
        <input type="email" value={email}  className='p-2 border rounded-lg outline-none' required onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <input type="submit" className='bg-gray-400 text-white font-bold p-2 rounded-lg hover:cursor-pointer hover:bg-gray-600' />
    </form>
    </div>
    </>
  )
}

export default Edituser