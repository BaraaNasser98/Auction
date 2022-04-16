import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import axios from "axios"
import moment from 'moment'
import sessionContext from '../../../components/session/SessionContext'
import NavBar from "../../../components/NavBar/NavBar"
export default function SinglePost() {
    const { session: { user } } = useContext(sessionContext)
    console.log(user.id);
    const { id } = useParams();
    const history = useHistory();
    const [post, setPost] = useState({});
    const [state, setState] = useState({ date: moment().format('yyyy-MM-D HH:mm'), price: 0 });
    const [letPay, setletPay] = useState(true)
    let d1 = moment(post.enddate).format('yyyy-MM-D');
    let d2 = moment().format('yyyy-MM-D');
    useEffect(() => {
        async function getPost() {
            let p = await axios.get(`http://localhost:9000/post/${id}`)
            setPost(p.data.result)
        }
        get();
        getPost()
    }, [id])

    const [maxPrice, setMaxPrice] = useState(0)
    // get last max price
    let get = () => {
        axios.get('http://localhost:9000/auctionmaxprice/' + id).then(res => setMaxPrice(res.data.result.maxPrice))
    }

    //post a new price
    let postPrice = () => {
        let body = {
            price: state.price,
            date: state.date,
            id_post: id,
            id_user: user.id
        }
        if (state.price <= maxPrice) {
            window.alert('your new price should be greater than the last price ')
        } else {

            axios.post('http://localhost:9000/auction', body).then(res => get())
        }


    }


    function handleChange(e) {
        let { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        postPrice();
    }


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
                        <h4>Price Start:</h4>
                        <h5>{post.pricestart}</h5>
                        <h4>Start Date:</h4>
                        <h5>{post.bigindate}</h5>
                        <h4>End Date:</h4>
                        <h5>{post.enddate}</h5>
                        <img src={`http://localhost:9000/uploads/${post.fileSrc}`} alt="avatar" />
                        <br />
                        <h2>max price :{maxPrice}</h2>
                        <p>
                            your new price should be greater than the last price
                        </p>
                        {
                            d1 > d2 ? <form onSubmit={handleSubmit}>
                                <TextField
                                    name="price"
                                    type="number"
                                    value={state.price}
                                    onChange={handleChange} />
                                <button className="P_button" type="submit">save</button>
                            </form>
                                :
                                <h4>end of payying</h4>

                        }

                    </article>
                </div>
            </div>
        </div>
    )
}