
import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import API from '../../../API'
import './NowPost.css'
import NavBar from '../../../components/NavBar/NavBar';
// import SessionContext from '../../../components/session/SessionContext'




export default function Now_post() {



    const history = useHistory();



    const [state, updateState] = useState([]);
    console.log(state);


    async function handleSubmit() {
        API.get(`postaccepted`)
            .then(res => updateState(res.data.result))
    }

    useEffect(() => {
        handleSubmit()
    }, [])


    
    let list = state.map(post =>



        <Link to={`/userpost/${post.id}`}>
          
            <div className="I_first">
                <article className="I_post">
                    <h4>Max Price:</h4>
                    <h5>{post.price}</h5>
                    <h4>User Name:</h4>
                    <h5>{post.firstname}</h5>
                    <h4>Description:</h4>
                    <h5>{post.description}</h5>
                    <h4>Address:</h4>
                    <h5>{post.locationaddress}</h5>
                    <h4>Price Start</h4>
                    <h5>{post.pricestart}</h5>
                    <h4>Bigin date:</h4>
                    <h5>{post.bigindate}</h5>
                    <h4>End Date:</h4>
                    <h5>{post.enddate}</h5>

                    <img className="I_img" src={`http://localhost:9000/uploads/${post.fileSrc}`} alt="avatar" />
                    <br />
                </article>

            </div>

        </Link>

    )

    return (
        <div>
              <NavBar/>
            {list}
        </div >


    )

}