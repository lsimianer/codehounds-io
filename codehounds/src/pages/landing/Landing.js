import React, {Component} from "react";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import logoWhite from '../images/logoWhite.png';
import "./landing.css";
import { FaInstagram } from 'react-icons/fa';
import { MdEmail, MdCode } from 'react-icons/md';


// import Footer  from '../../components/footer/Footer';


import { Container, Row, Col } from 'reactstrap';
// import Footer  from '../components/footer';


//     background-image: linear-gradient(#20202052, #34abcf65)

class Landing extends Component {
    
    render() {
    return (
        <div>
<body class="is-preload">
        {/* <Navbar/> */}
       
{/* <!-- Wrapper --> */}
<div id="wrapper">

    {/* <!-- Header --> */}
    <header id="header">
        
                <img id='mainLogo' src={logoWhite} alt="logo, scroll down to read about us, our contact section is at the bottom" />
            <div class="content">
                <div class="inner">
                    <h1>CodeHounds.IO</h1>
                    <h2>Disrupting the way web development is done</h2>
                    <p>We pride ourselves on soft skills that match our technical skills.
                       You now have a web development team that understands your vision and builds it step by step with you
                    </p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#Development">Development</a></li>
                    <li><a href="#ADA">ADA</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/* <!--<li><a href="#elements">Elements</a></li>--> */}
                </ul>
            </nav>
        </header>

        {/* <!-- Main --> */}
        <div id="main">

            {/* <!-- Intro --> */}
            <article id="intro">
                <h2 class="major">Intro</h2>
                {/* <span class="image main"></span> */}
                <h3>Getting your business in front of potential customers is a challenge, closing the deal after is even harder.
                     CodeHounds makes that easier than ever. 
                    </h3> 
                <blockquote>
                    <p>The CodeHounds mission is one of transparency and growth for all.We achieve this by creating the 
                        vision of our customers and in turn our product being a game changer for their business. That being said,
                        the only way we grow, is when you do.
                    </p>
                </blockquote>
            </article>

            {/* <!-- Work --> */}
            <article id="work">
                <h2 class="major">Work</h2>
                <span class="image main"><img src="images/pic02.jpg" alt="" /></span>
                <h3>We've worked with everyone from nutrition super stores to your local landscaping company and whether your contract
                    has three zeroes at the end or five, you'll get the same treatment and attention to detail.
                </h3>
                {/* <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna
                    sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas
                    laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat
                    tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
                    tempus.</p> */}
            </article>

            {/* <!-- About --> */}
            <article id="about">
                <h2 class="major">Who We Are</h2>
                <span class="image main"><img src="images/pic03.jpg" alt="" /></span>
                <blockquote>
                <p>CodeHounds is a veteran owned and operated Web Development studio. After the military our CEO used 
                    his GI bill trying to find the balance of money and passion, it took a few years until he found his way to
                    web development but the passion he discovered grew quickly. He was the first person hired out of the University texas 
                    at Austin Full Stack web development bootcamp, he was also the honor grad. His skillset beginning to match his passion, 
                    he noticed a problem within his industry. Web firms were speaking like their work was secretive and no one could understand it,
                    so they charged whatever they wanted and had lackluster client communication. "No longer" he said, and thus became CodeHounds.
                </p>
                </blockquote>
            </article>

            <article id="contract">
                <h2 class="major">how we work</h2>
                <span class="image main"><img src="images/pic03.jpg" alt="" /></span>
                <h3>Working with CodeHounds is a straight forward process.
                </h3>
                <ol>
                <li>Contact us via email with your, current website or business needing one, and a short summary of what you need done.</li>
                <li>Have a budget and timeline in mind. These are part of our contract requirements before starting</li>
                <li>Designate a point of contact that can sign off on changes made or current work.</li>
                <li>Define the terms of our business relationship (ongoing support, quick fix, or new build) </li>
                <li>Put a deposit down on your project</li>
                <li>Review items to be satisfactory until finished</li>
                <li>Enjoy your new website or app</li>
                </ol>
            </article>

            {/* <!-- Contact --> */}
            <article id="contact">
                <h2 class="major">Contact</h2>
                <form method="post" action="#">
                    <div class="fields">
                        <div class="field half">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div class="field half">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div class="field">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="4"></textarea>
                        </div>
                    </div>
                    <ul class="actions">
                        <li><input type="submit" value="Send Message" class="primary" /></li>
                        <li><input type="reset" value="Reset" /></li>
                    </ul>
                </form>
                <ul class="icons">
                <li><a href="#" id='instaIcon' class="footyIcon"><FaInstagram/></a></li>
                <li><a href="#" id='Email' class="footyIcon"><MdEmail/></a></li>
                <li><a href="#" id='codeHoundsIcon' class="footyIcon"><MdCode/></a></li>
                </ul>
            </article>

             </div>
           
        {/* <!-- Footer -->
        <footer id="footer">
            <p class="copyright">&copy; CodeHounds. 2020: </p>
        </footer> */}

        </div>

    {/* <!-- BG --> */}
    <div id="bg"></div>
    </body>
    </div>

        );
    }}

export default Landing;