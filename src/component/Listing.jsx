import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Listing = () => {
    let navi = useNavigate()
    const [data , setData] = React.useState(null)
    React.useEffect(()=>{
      getdata()
    },[])

    const getdata = ()=>{
        axios.get('http://localhost:3500/content')
        .then((response)=>{
            setData(response.data)
        })
        .catch(()=>{
            console.log("error occured while fetchimg data");
        })
    }

    const deletedata = (x)=>{
        alert("it will delete it permanently ")
        axios.delete(`http://localhost:3500/content/${x}`)
        .then(()=>{
            getdata()
        })
        .catch(()=>{
            alert("error occured while deleting the data ")
        })
    }


  return (
    <>
    <div className='container mx-auto  mt-36'>
        <table className='container w-[70%] mx-auto'>
            <thead className='bg-gray-300 font-extrabold h-16 text-gray-600 text-2xl border-t-2 border-b-2 border-black'>
                <tr>
                    <th>Sl-No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            
            <tbody className='border-b-2 border-black overflow-y-scroll bg-gray-200'>
                {   data &&
                    data.map((e , i)=>{
                        return(
                            <>
                                <tr key={i} className = 'text-center text-xl'>
                                    <td className='p-1'>{e.id}</td>
                                    <td className='p-1'>{e.name}</td>    
                                    <td className='p-1'>{e.email}</td>
                                    <td className='p-1 flex justify-evenly'>
                                   <NavLink to={`/edituser/${e.id}`}> <button className='bg-blue-500 text-white w-16 rounded-md'>Edit</button></NavLink>
                                    <button className='bg-red-500 text-white w-16 rounded-md' onClick={()=>{
                                            deletedata(e.id)
                                        }} >Delete</button>
                                    </td>
                                </tr>                            
                            </>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    </>
  )
}

export default Listing