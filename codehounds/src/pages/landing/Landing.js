import React, {Component} from "react";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import logoGreen from '../images/logoGreen.png'
import logoBlack from '../images/logoBlack.png'
import "./landing.css";
import Navbar  from '../../components/nav/Navbar';
// import Footer  from '../../components/footer/Footer';

// import rhino from '../images/babyrhino2.png';
// import brtext from'../images/text2.png';
import { Container, Row, Col } from 'reactstrap';
// import Footer  from '../components/footer';


//     background-image: linear-gradient(#20202052, #34abcf65)

class Landing extends Component {

    render() {
    return (
        <div>
            {/* <Container id='landingBody' > */}
        <Navbar/>
        <Container  id="card-holder">
            <Zoom>
                <img src={logoGreen}/>
            </Zoom>
            <h1> landing page</h1>
            </Container>
            {/* </Container> */}

        </div>
    );
}}

export default Landing;