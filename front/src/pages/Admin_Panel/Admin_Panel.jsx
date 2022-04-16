import React from "react"
import { Link } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import { useHistory } from "react-router"
import Footer from "../../components/Footer/footer"


export default function Admin_Panel() {
    let history=useHistory();
    return (
       

        <div>

            <NavBar />

            <div class="b">

                <div class="B" style={{ display: 'flex', flexDirection: 'column', width: '15rem' }}>
                    <button class="b1" onClick={() => history.push('/adminprofile')}> Update Profile</button>
                    <button class="b1" onClick={() => history.push('/postlist')}>List Post</button>
                    <button class="b1" onClick={() => history.push('/postnow')}>Auction Page</button>



                </div>
            </div>

            <Footer />
        </div>



    )
}
