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
        <Container className="sectionPointy" id="section1">
            <div id='sectionOneLogo'>
                <Zoom>
                    <img id='mainLogo' src={logoGreen}/>
                </Zoom>
            </div>
            <Container id='sectioneOneText'> 
            <h1>Disrupting the way web development is done</h1>
            <h3>We pride ourselves on soft skills that match our technical skills
            having a web development team that understands your vision and builds it step by step with you</h3>
            {/* <Link */}
            </Container>
            </Container>
            {/* </Container> */}

        </div>
    );
}}

export default Landing;