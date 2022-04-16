import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import './listPost.css'
import NavBar from "../../../components/NavBar/NavBar"


export default function List_Post() {

    const [posts, setpost] = useState([])

    async function getpost() {
        let r = await axios.get(`http://localhost:9000/allpost`)
        setpost(r.data.result)
    }

    useEffect(() => {
        getpost()
    }, [])

    return (
        <div>
        <NavBar/>
        <div className="S_container">
            {posts.map(post =>
                <Link to={`/post/${post.id}`}>
                    <div className="S_first">
                        <article className="S_post">
                         <h4>DESCRIPTION:</h4>
                        <h5>{post.description}</h5>
                        <h4> ADDRESS:</h4>
                        <h5>{post.locationaddress}</h5>
                        <h4>PRICE START:</h4>
                        <h5>{post.pricestart}</h5>
                        <img  className="S_img"  src={`http://localhost:9000/uploads/${post.fileSrc}`} alt="avatar" />
                        <br />
                        </article>
                    </div>
                </Link>
            )}
        </div>
        </div>
    )
}