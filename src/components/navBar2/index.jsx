import {Component} from "react";
import "./style.css"

class NavBar2 extends Component{
    constructor() {
        super();
    }
    render() {

        return(
            <nav className="navbar navbar-expand-lg fixed-top navbarScroll Header">
                <div className="container">
                    <a className="navbar-brand a" style={{ color: "white"}}  href="#">Dhananjaya</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" style={{  backgroundColor: "white"}}>
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto" >

                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "white"}} href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "white"}} href="#skill">Skill</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "white"}} href="#service">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "white"}} href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "white"}} href="#contact">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
export default NavBar2