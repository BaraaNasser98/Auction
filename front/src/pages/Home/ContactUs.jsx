
import React, { useState } from 'react'
import './ContactUs.css'
import NavBar from '../../components/NavBar/NavBar'
import axios from 'axios'
// import Footer from '../../components/Footer/footer'




export default function ContactUs() {

    const [state, updateState] = useState({
        title: "",
        Email: "",
        description: ""
    })


    async function setState(nextState) {
        updateState(prevState => ({
            ...prevState,
            ...nextState
        }))
    }



    async function handleChange(e) {
        let { name, value } = e.target

        setState({ [name]: value })
    }

    async function postmssg() {

        let body = {
            title: state.title,
            Email: state.Email,
            description: state.description
        }

        await axios.post(`http://localhost:9000/mssg`, body)


    }
    return (


<div>
<NavBar/>
<section>

  <div class="listing-hero">
    <div class="hero-heading">
        <div class="hero-large">Contact Us.</div>
        <div class="hero-text"> <i>Got any Questions? Feel free to ask or visit our FAQ page </i> </div>       
      </div>
  </div>

<div class="container-contact">
    <div class="wrap-contact">

      <form onSubmit={postmssg} >
        <div class="wrap-input validate-input" data-validate="Please enter your name">
          <input class="input" type="text" name="title" required="" placeholder="Full Name" value={state.title} onChange={handleChange}/>
        </div>

        <div class="wrap-input validate-input" data-validate = "Please enter your email">
          <input class="input" type="text" name="Email" required="" placeholder="E-mail" value={state.Email} onChange={handleChange}/>
        </div>

        <div class="wrap-input validate-input" data-validate = "Please enter your message">
          <textarea class="input" type="text" name="description" required="" placeholder="Your Message"value={state.description} onChange={handleChange}></textarea>
        </div>

        <div class="container-contact-form-btn">
          <button type="submit" class="contact-form-btn">
            <span>Send</span>
          </button>
        </div>

        <div class="grid-container">
          <div class="item1 left-align"><i class="fa fa-lg fa-map-marker-alt"></i> 4517 Washington Ave, Manchester, Kentucky 39495</div>  
          <div class="item4 right-align"><i class="fa fa-lg fa-phone"></i> (123) 456-7890<br/>(123) 456-7890</div>

      </div>

      </form>

    </div>
  </div>
  </section>
</div>







    )

}
