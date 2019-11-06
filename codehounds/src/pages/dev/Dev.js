import React, {Component} from "react";
// import { Link } from "react-router-dom";
import "./dev.css";
// import rhino from '../images/babyrhino2.png';
// import brtext from'../images/text2.png';
import { Container, Row, Col } from 'reactstrap';
import Navbar  from '../../components/nav/Navbar';
// import Footer  from '../components/footer';


//     background-image: linear-gradient(#20202052, #34abcf65)

class Dev extends Component {

    render() {
    return (
        <div>
            {/* <Container id='landingBody' > */}
        <Navbar/>           
            <Container  id="card-holder">
                <h1> Dev page</h1>
            </Container>
                {/* </Container> */}

        </div>
    );
}}

export default Dev;