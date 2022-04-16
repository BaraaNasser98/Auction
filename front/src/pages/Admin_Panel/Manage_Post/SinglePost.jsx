import React, { useEffect, useState } from "react"
import DateTimePicker from '../../../components/DateTimePicker'
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios"
import NavBar from "../../../components/NavBar/NavBar"
import './singlePost.css'


export default function SinglePost() {
    let history = useHistory();

    const { id } = useParams();
    const [post, setPost] = useState({});
    const [state, setState] = useState({
        bigindate: new Date().toDateString(),
        enddate: new Date().toDateString(),
        isaccepted: true,
        isactive: true
    });

 

    useEffect(() => {
        async function getPost() {
            let p = await axios.get(`http://localhost:9000/post/${id}`)
            setPost(p.data.result)
        }
        getPost()
    }, [])

    function handleChange(e) {
        let { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await axios.put(`http://localhost:9000/post/${id}`, state).then(res => {
            if (res.data) {
                history.push('/postnow')
             
            }
        }
        );

    }
    console.log(
        state
    );
    return (
        <div>
            <NavBar />
            <div className="P_container" >
                <div className="P_first">
                    <article className="P_post">
                        <h4>Description:</h4>
                        <h5>{post.description}</h5>
                        <h4>Address:</h4>
                        <h5>{post.locationaddress}</h5>
                       <h4> Price Start:</h4>
                        <h5>{post.pricestart}</h5>
                        <img className="P_img" src={`http://localhost:9000/uploads/${post.fileSrc}`} alt="avatar" />
                        <br />
                        <form className="P_time" onSubmit={handleSubmit}>

                            <DateTimePicker  name="bigindate" value={state.bigindate} onChange={handleChange} />
                            <DateTimePicker name="enddate" value={state.enddate} onChange={handleChange} />
                            <button className="P_button" type="submit">save</button>
                        </form>
                    </article>
                </div>
            </div>
        </div>
    )
    }