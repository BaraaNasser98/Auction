import React from "react"
import { Link } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import { useHistory } from "react-router"
import Footer from "../../components/Footer/footer"
import './User_Panel.css'


export default function User_Panel() {
let history=useHistory();
    return (
        
       <div>

<NavBar/>

<div class="b">

<div class="B" style={{ display:'flex', flexDirection:'column' , width:'15rem'}}>
<button class="b1" onClick={()=> history.push('/userprofile')   }> Update Profile</button>
<button class="b1" onClick={()=> history.push('/postcreate')   }> Create Post</button>
<button class="b1" onClick={()=> history.push('/postnow')   }>Auction Page</button>
{/* <button class="b1" onClick={()=> history.push('/userpost/:id')   }>Single Post</button> */}



</div>
</div>
      
       <Footer/>
       </div>
   

        
    )
}