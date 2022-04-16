import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'


export default function Seemssg(){

const[mssgs, setmssgs]=useState([])

    async function getall(){
        
        await axios.get(`http://localhost:9000/mssg`).then(
            res=>{
                console.log(res)
                let mssgs=res.data.result;
                setmssgs(mssgs)
            }
        )
    }



    async function deletemssg(id){

        await axios.delete(`http://localhost:9000/mssg/${id}`)

        setmssgs([...mssgs].filter( m => m.id !=id))

    }

    useEffect(() =>{
        getall()
},[])

    return(
        <div>
            <NavBar/>


<table>

<tr>
    <td>title</td>
    <td>Email</td>
    <td>description</td>
    <td>delete</td>
</tr>

{mssgs.map(mssg=>
    <tr key={mssg.id}>

<td>{mssg.title}</td>
<td>{mssg.Email}</td>
<td>{mssg.description}</td>
<td><button   onClick={() => deletemssg(mssg.id)}  >delete</button>      </td>



    </tr>
   
    
    )}





</table>



        </div>
    )
}