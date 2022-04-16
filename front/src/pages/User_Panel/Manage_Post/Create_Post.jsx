import React, { useState, useContext } from 'react'
import SessionContext from '../../../components/session/SessionContext';
import NavBar from '../../../components/NavBar/NavBar';
import './Create_Post.css'
import axios from 'axios';

export default function Createbasic() {

    const {
        session: { user: { id, token, role } },
        actions: { logout }
    } = useContext(SessionContext);

    const [file, setFile] = useState({
        img: {
            name: ''
        }
    })

    const [description, setDescription] = useState('');
    const [locationaddress, setlocationaddress] = useState('');
    const [pricestart, setpricestart] = useState('');
    const [id_user, setid_user] = useState(id);


    console.log(id_user)

    let handleChangefile = (e) => {

        let { name, files } = e.target
        setFile({
            [name]: files[0]
        })

    }
    let postPrice = (id) => {
        let body = {
            price:0,
            id_post: id,
          
        }
    
            axios.post('http://localhost:9000/auction', body)
        }
    

    let createFile = async (e) => {
        e.preventDefault();
        let { img } = file;


        let url = `http://localhost:9000/test`

        let body = null;
        body = new FormData();
        if (img) {

            body.append(`fileSrc`, img);
        }

        body.append('description', description);
        console.log(description)
        body.append('locationaddress', locationaddress);
        console.log(locationaddress)
        body.append('pricestart', pricestart);
        console.log(pricestart)
        body.append('id_user', id);
        console.log(id_user)
        const response = await fetch(url, { method: 'POST', body });
        console.log(response)
        let res = await response.json()

        postPrice(res.insertId)

    }




    return (

        <div>
            <NavBar />
            <div class="T_container">

                <form class="form"onSubmit={createFile} >


                    <div class="T_row">
                        <div class="T_col-25">
                        <label class="T_label" for="img">Image</label>
                        </div>
                        <div class="T_col-75">
                            <input class="T_file" type="file" name="img" onChange={handleChangefile} />
                        </div>
                    </div>

                    <div class="T_row">
                        <div class="T_col-25">
                            <label class="T_label" for="description">Description</label>
                        </div>
                        <div class="T_col-75">
                            <input class="T_text" type="text" id="description" name="description" placeholder="your Description..." onChange={(e) => setDescription(e.target.value)} />
                        </div>
                    </div>

                    <div class="T_row">
                        <div class="T_col-25">
                            <label class="T_label" for=" locationaddress">Location Address</label>
                        </div>
                        <div class="T_col-75">

                            <input class="T_text" type="text" id="locationaddress" name="locationaddress" placeholder="your Address..." onChange={(e) => setlocationaddress(e.target.value)} />
                        </div>
                    </div>

                    <div class="T_row">
                        <div class="T_col-25">
                            <label class="T_label" for=" pricestart">Price Start</label>
                        </div>
                        <div class="T_col-75">
                            <input class="T_text" type="text" id="pricestart" name="pricestart" placeholder="Price Start" onChange={(e) => setpricestart(e.target.value)} />
                        </div>
                    </div>

                    <div class="T_row">
                        <div class="T_col-75">

                            <input class="T_submit" type="submit" onClick={createFile} defaultValue="Submit" />
                        </div>
                    </div>




                </form>
            </div >
        </div >

    )
}