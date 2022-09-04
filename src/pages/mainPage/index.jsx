import {Component} from "react";
import "./style.css";
import "./responsive.css"
import java from "../image/Java10x.png"
import css from "../image/CSS310x.png"
import html from "../image/Html 510x.png"
import javascript from "../image/JavaScript10x.png"
import boostrap from "../image/Bootstrap10x.png"
import mongoDb from "../image/MongoDB10x.png"
import NodeJS from "../image/Node Js10x.png"
import react from "../image/React Native10x.png"
import spring from "../image/Spring Logo10x.png"
import springBoot from "../image/Spring Logo10x-1.png"
import express from "../image/Express Js10x.png"
import NPM from "../image/NPM10x.png"
import materialUI from "../image/Material Ui10x.png"
import postman from "../image/Postman Api10x.png"
import mysql from "../image/MySQL Logo10x.png"
import frontEnd from "../image/front-end.png"
import BackEnd from "../image/back end 2.png"
import mobileDev from "../image/mobile dev.png"
import Slider from "react-slick";
import {projects} from "./projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar2 from "../../components/navBar2";






class MainPage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return(
            <section className="body">

                <NavBar2/>

                {/*===============Hero Section====================*/}
                <div className="hero-section" id="home">
                    <div className="hero-content"  data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
                        <h1>Iroshan<br/>Dhananjaya</h1>
                        <h3>Full Stack Developer</h3>
                        <a href="#contact">Contact Me</a>
                        <div className="hero-social">
                            <div> <a href="https://www.facebook.com/profile.php?id=100074329315171"><img src={java}/></a></div>
                            <div><a href="https://github.com/IroshanDhananjaya"><img src={java}/></a></div>
                            <div><a href="https://www.linkedin.com/in/iroshan-dhananjaya-3a3bba224/"><img src={java}/></a></div>
                        </div>
                    </div>
                    <div className="hero-img"data-aos="fade-down"  data-aos-easing="linear"
                         data-aos-duration="500">
                        <div></div>
                        <div></div>
                    </div>
                </div>

                {/*===============about Section====================*/}

                <div className="about-section" id="about" >
                    <div className="about-content">
                        <h1  data-aos="fade-left"  data-aos-easing="linear"
                             data-aos-duration="500">Who am i</h1>
                        <p  data-aos="fade-right"  data-aos-easing="linear"
                            data-aos-duration="700">
                            I’m Iroshan Dhananjaya.I currently studing in Software Engineering at IJSE in Panadura. I also self studying about software and web programming and much more using Internet. I am a Developer and also a Designer.If you have as any Project or if you want make a Software for your bussiness contact me.I make your project as soon as possible.You really like my work,if you don't change this until you like I give you seticfaction as soon as possible
                        </p>
                        <a href="#"  data-aos="fade-left"  data-aos-easing="linear"
                           data-aos-duration="800">Download CV</a>
                    </div>
                    <div>
                        <div data-aos="zoom-in-up" data-aos-duration="800">
                            <h2>20+<br/> Complete Projects</h2>
                            <div></div>
                        </div>
                        <div data-aos="zoom-in-up" data-aos-duration="800">
                            <h2>1+<br/>Years Experience</h2>
                            <div></div>
                        </div>
                        <div data-aos="zoom-in-up" data-aos-duration="800">
                            <h2>5+<br/>Happy Clients</h2>
                            <div></div>
                        </div>
                    </div>
                </div>

                {/*===============Tech Stack section====================*/}
                <div className="tech-stack-section" id="skill">
                    <div className="stack-topic">
                        <h1>What i know</h1>
                        <div></div>
                    </div>
                        <div className="stack-container row">
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={java}/>
                                <h5>Java</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={css}/>
                                <h5>Css</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={html}/>
                                <h5>Html</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item" data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={javascript}/>
                                <h5>Java Script</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item" data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={boostrap}/>
                                <h5>Boostrap</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={mongoDb}/>
                                <h5>Mongo DB</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={NodeJS}/>
                                <h5>Node JS</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-anchor-placement="center-bottom">
                                <img src={react}/>
                                <h5>React</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={spring}/>
                                <h5>Spring</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={springBoot}/>
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={express}/>
                                <h5>Express</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={NPM}/>
                                <h5>NPM</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={materialUI}/>
                                <h5>Material UI</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item" data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={postman}/>
                                <h5>Postman</h5>
                            </div>
                            <div className="col-xxl-2 col-md-2 col-sm-6 col-6 stack-item"  data-aos="fade-up"
                                 data-aos-duration="1000">
                                <img src={mysql}/>
                                <h5>Mysql</h5>
                            </div>

                        </div>
                </div>

                {/*===============Service section====================*/}
                <div className="service-section" id="service">
                    <div className="service-topic">
                        <h1>What can i do</h1>
                        <div></div>
                    </div>
                    <div className="service-container row">
                        <div className="" data-aos="flip-left" data-aos-duration="1000">
                            <img src={frontEnd}/>
                            <h3>Frontend<br/> Developer</h3>
                            <a href="#"> Contact Me =></a>
                        </div>
                        <div className="" data-aos="flip-right" data-aos-duration="1000">
                            <img src={BackEnd}/>
                            <h3>Backend<br/> Developer</h3>
                            <a href="#"> Contact Me =></a>
                        </div>
                        <div className="" data-aos="flip-left" data-aos-duration="1000">
                            <img src={mobileDev}/>
                            <h3>Mobile App <br/> Developer</h3>
                            <a href=""> Contact Me =></a>
                        </div>
                    </div>
                </div>

                {/*===============Projects section====================*/}
                <div className="project-section" id="projects">
                    <div className="project-topic">
                        <h1>What have i done</h1>
                        <div></div>
                    </div>
                    <div className="project-slider" data-aos="zoom-in-up" data-aos-duration="1000">
                        <Slider {...settings}>
                            {projects.map((data)=>(

                                <div className="project-card">
                                    <div className="project-card-left">
                                       <div className="project-image">
                                           <img src={data.linkImg}/>
                                       </div>
                                    </div>
                                    <div className="project-card-right">
                                        <h2>{data.title}</h2>
                                        <p>{data.disc}</p>
                                        <a href={data.LinkCode}>View Code</a>
                                    </div>
                                </div>
                            ))}

                        </Slider>

                    </div>


                    <div className="project-footer"data-aos="fade-up"  data-aos-duration="1000">
                        <h6>I have already done several projects. You can see all those things by visiting my GitHub Profile</h6>
                        <a href="https://github.com/IroshanDhananjaya">Git Hub</a>
                    </div>
                </div>

                {/*===============contact section====================*/}

                <div className="contact-section" id="contact">
                    <div className="contact-topic">
                        <h1>How do contact me</h1>
                        <div></div>
                    </div>

                    <p className="Paragraph1">I will answer all your messages as soon as possible and I am committed to doing what you want very well.</p>

                    <div className="contact-info-container row">
                        <div className="col-xxl-4 col-md-4 col-sm-12 col-12" data-aos="zoom-in-up" data-aos-duration="1000">
                            <div></div>
                            <h6>Email</h6>
                            <a id="email" href = "mailto:iroshandhananjaya0322@gmail.com">iroshandhananjaya0322@gmail.com</a>
                        </div>
                        <div className="col-xxl-4 col-md-4 col-sm-12 col-12" data-aos="zoom-in-up" data-aos-duration="1000">
                            <div></div>
                            <h6>Contact Info</h6>
                            <a id="number" href="tel:+0772893976">+94 77-289 3976</a>
                        </div>
                        <div className="col-xxl-4 col-md-4 col-sm-12 col-12" data-aos="zoom-in-up" data-aos-duration="1000">
                            <div></div>
                            <h6>Location</h6>
                            <p>Opanayaka , Sri Lanka</p>
                        </div>
                    </div>
                    <div className="footer-social-icon" data-aos="fade-right" data-aos-duration="1000">
                        <div><a href="https://github.com/IroshanDhananjaya"><img src={java}/></a></div>
                        <div><a href="https://www.linkedin.com/in/iroshan-dhananjaya-3a3bba224/"><img src={java}/></a></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className="Paragraph2">Designed by <span>Iroshan Dhananjaya</span></p>
                </div>

            </section>

        );
    }
}



export default MainPage;