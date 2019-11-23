import React, {Component} from "react";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import logoGreen from '../images/logoGreen.png';
import logoBlack from '../images/logoBlack.png';
import logoWhite from '../images/logoWhite.png';
import "./landing.css";
import Navbar  from '../../components/nav/Navbar';
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
        
                <img id='mainLogo' src={logoWhite} />
            
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
                    </h3> 
                     {/* CodeHounds makes that easier than ever.  */}
                <p>The CodeHounds mission is one of transparency and growth for all.We achieve this by creating the 
                    vision of our customers and in turn our product being a game changer for their business. That being said,
                    the only way we grow, is when you do.
                </p>
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
                <p>CodeHounds is a veteran owned and operated Web Development studio. After the military our CEO used 
                    his GI bill trying to find the balance of money and passion, it took a few years until he found his way to
                    web development but the passion he discovered grew quickly. He was the first person hired out of the University texas 
                    at Austin Full Stack web development bootcamp, he was also the honor grad. His skillset beginning to match his passion, 
                    he noticed a problem within his industry. Web firms were speaking like their work was secretive and no one could understand it,
                    so they charged whatever they wanted and had lackluster client communication. "No longer" he said, and thus became CodeHounds.
                </p>
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
                    <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                </ul>
            </article>

            {/* <!-- Elements --> */}
            <article id="elements">
                <h2 class="major">Elements</h2>

                <section>
                    <h3 class="major">Text</h3>
                    <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is
                        <em>emphasized</em>.
                        This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                        This is <u>underlined</u> and this is code: <code>for</code>. Finally, <a
                            href="#">this is a link</a>.</p>
                    <hr />
                    <h2>Heading Level 2</h2>
                    <h3>Heading Level 3</h3>
                    <h4>Heading Level 4</h4>
                    <h5>Heading Level 5</h5>
                    <h6>Heading Level 6</h6>
                    <hr />
                    <h4>Blockquote</h4>
                    <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus
                        euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
                        iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem
                        ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
                    <h4>Preformatted</h4>
                    <pre><code>i = 0;

                        {/* while (!deck.isInOrder()) {
                        print `Iteration` + i;
                        deck.shuffle();
                        i++;
                        } */}

                    print 'It took ' + i + ' iterations to sort the deck.';</code></pre>
                </section>

                <section>
                    <h3 class="major">Lists</h3>

                    <h4>Unordered</h4>
                    <ul>
                        <li>Dolor pulvinar etiam.</li>
                        <li>Sagittis adipiscing.</li>
                        <li>Felis enim feugiat.</li>
                    </ul>

                    <h4>Alternate</h4>
                    <ul class="alt">
                        <li>Dolor pulvinar etiam.</li>
                        <li>Sagittis adipiscing.</li>
                        <li>Felis enim feugiat.</li>
                    </ul>

                    <h4>Ordered</h4>
                    <ol>
                        <li>Dolor pulvinar etiam.</li>
                        <li>Etiam vel felis viverra.</li>
                        <li>Felis enim feugiat.</li>
                        <li>Dolor pulvinar etiam.</li>
                        <li>Etiam vel felis lorem.</li>
                        <li>Felis enim et feugiat.</li>
                    </ol>
                    <h4>Icons</h4>
                    {/* <ul class="icons">
                        <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                        <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
                    </ul> */}

                    <h4>Actions</h4>
                    <ul class="actions">
                        <li><a href="#" class="button primary">Default</a></li>
                        <li><a href="#" class="button">Default</a></li>
                    </ul>
                    <ul class="actions stacked">
                        <li><a href="#" class="button primary">Default</a></li>
                        <li><a href="#" class="button">Default</a></li>
                    </ul>
                </section>

                <section>
                    <h3 class="major">Table</h3>
                    <h4>Default</h4>
                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Item One</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                    <td>29.99</td>
                                </tr>
                                <tr>
                                    <td>Item Two</td>
                                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                    <td>19.99</td>
                                </tr>
                                <tr>
                                    <td>Item Three</td>
                                    <td> Morbi faucibus arcu accumsan lorem.</td>
                                    <td>29.99</td>
                                </tr>
                                <tr>
                                    <td>Item Four</td>
                                    <td>Vitae integer tempus condimentum.</td>
                                    <td>19.99</td>
                                </tr>
                                <tr>
                                    <td>Item Five</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                    <td>29.99</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="2"></td>
                                    <td>100.00</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <h4>Alternate</h4>
                    <div class="table-wrapper">
                        <table class="alt">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Item One</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                    <td>29.99</td>
                                </tr>
                                <tr>
                                    <td>Item Two</td>
                                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                    <td>19.99</td>
                                </tr>
                                <tr>
                                    <td>Item Three</td>
                                    <td> Morbi faucibus arcu accumsan lorem.</td>
                                    <td>29.99</td>
                                </tr>
                                <tr>
                                    <td>Item Four</td>
                                    <td>Vitae integer tempus condimentum.</td>
                                    <td>19.99</td>
                                </tr>
                                <tr>
                                    <td>Item Five</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                    <td>29.99</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="2"></td>
                                    <td>100.00</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>

                <section>
                    <h3 class="major">Buttons</h3>
                    <ul class="actions">
                        <li><a href="#" class="button primary">Primary</a></li>
                        <li><a href="#" class="button">Default</a></li>
                    </ul>
                    <ul class="actions">
                        <li><a href="#" class="button">Default</a></li>
                        <li><a href="#" class="button small">Small</a></li>
                    </ul>
                    <ul class="actions">
                        <li><a href="#" class="button primary icon solid fa-download">Icon</a></li>
                        <li><a href="#" class="button icon solid fa-download">Icon</a></li>
                    </ul>
                    <ul class="actions">
                        <li><span class="button primary disabled">Disabled</span></li>
                        <li><span class="button disabled">Disabled</span></li>
                    </ul>
                </section>

                <section>
                    <h3 class="major">Form</h3>
                    <form method="post" action="#">
                        <div class="fields">
                            <div class="field half">
                                <label for="demo-name">Name</label>
                                <input type="text" name="demo-name" id="demo-name" value="" placeholder="Jane Doe" />
                            </div>
                            <div class="field half">
                                <label for="demo-email">Email</label>
                                <input type="email" name="demo-email" id="demo-email" value="" placeholder="jane@untitled.tld" />
                            </div>
                            <div class="field">
                                <label for="demo-category">Category</label>
                                <select name="demo-category" id="demo-category">
                                    <option value="">-</option>
                                    <option value="1">Manufacturing</option>
                                    <option value="1">Shipping</option>
                                    <option value="1">Administration</option>
                                    <option value="1">Human Resources</option>
                                </select>
                            </div>
                            <div class="field half">
                                <input type="radio" id="demo-priority-low" name="demo-priority" checked/>
                                <label for="demo-priority-low">Low</label>
                            </div>
                            <div class="field half">
                                <input type="radio" id="demo-priority-high" name="demo-priority"/>
                                <label for="demo-priority-high">High</label>
                            </div>
                            <div class="field half">
                                <input type="checkbox" id="demo-copy" name="demo-copy"/>
                                <label for="demo-copy">Email me a copy</label>
                            </div>
                            <div class="field half">
                                <input type="checkbox" id="demo-human" name="demo-human" checked/>
                                <label for="demo-human">Not a robot</label>
                            </div>
                            <div class="field">
                                <label for="demo-message">Message</label>
                                <textarea name="demo-message" id="demo-message" placeholder="Enter your message"
                                    rows="6"></textarea>
                            </div>
                        </div>
                        <ul class="actions">
                            <li><input type="submit" value="Send Message" class="primary" /></li>
                            <li><input type="reset" value="Reset" /></li>
                        </ul>
                    </form>
                </section>

            </article>

        </div>

        {/* <!-- Footer --> */}
        <footer id="footer">
            <p class="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
        </footer>

    </div>

    {/* <!-- BG --> */}
    <div id="bg"></div>
    </body>
    </div>

        );
    }}

export default Landing;