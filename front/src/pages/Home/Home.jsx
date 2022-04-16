import react from 'react'
import NavBar from '../../components/NavBar/NavBar'
import auc from '../../components/images/pictures/auc.jpg'
import h from '../../components/images/pictures/h.jpg'
import h1 from '../../components/images/pictures/h1.jpeg'
import h6 from '../../components/images/pictures/h6.jpeg'
import h7 from '../../components/images/pictures/h7.jpg'



import './home.css';
import Footer from '../../components/Footer/footer';


export default function Home() {


    return (
        <div class="first">
            <div>
                <NavBar />

            </div>

            <div class="container">

                <img src={auc} style={{ width: "100%", height: "400px" }} />
                <div class="text-block">
                    <h3>Online Auction</h3>

                </div>
            </div>


            <div class="row">
                <div class="column">
                    <img src={h} alt="Snow" style={{ width: "90%", height: "70%" }} />
                    <div class="space">
                        <h3 className="Home_h3">Egypt</h3>
                        <p className="Home_p"> Good Artifact... <br />
                            Egyption pyramids <br/>Thousand of years ago</p>
                    </div>
                </div>
                <div class="column">
                    <img src={h1} alt="Forest" style={{ width: "90%", height: "70%" }} />
                    <div class="space">
                        <h3 className="Home_h3">Russian</h3>
                        <p className="Home_p"> Good Artifact.. <br />
                            Egyption pyramids <br/>Thousand of years ago</p>
                    </div>
                </div>
                <div class="column">
                    <img src={h6} alt="Mountains" style={{ width: "80%", height: "70%" }} />
                    <div class="space">
                        <h3 className="Home_h3">Egypt</h3>
                        <p className="Home_p"> Good Artifact... <br />
                            Egyption Pyramids <br/>Thousand of years ago</p>
                    </div>
                </div>
                <div class="column">
                    <img src={h7} alt="Mountains" style={{ width: "90%", height: "70%" }} />
                    <div class="space">
                        <h3 className="Home_h3">China</h3>
                        <p className="Home_p"> Good Artifact... <br />
                            Egyption pyramids <br/>Thousand of years ago</p>
                    </div>
                </div>
                
            </div>
       

            <div>

                <Footer />

            </div>
        </div>

    )

}