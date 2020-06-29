import React from "react";
import { Link } from "react-scroll";
import '../App.css';

const navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-nav" style={{ position: 'fixed', width: '100%', zIndex: 100 }}>
        <Link className="navbar-brand nav-shadow" data-toggle="collapse" data-target=".navbar-collapse.show"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            to="Home"
        >
            MASK SAVER
            </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"

                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        to="Home"

                    >
                        主頁 <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"

                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        to="Intro"

                    >
                        關於
                    </Link>

                </li>

                <li className="nav-item">
                    <Link className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"

                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        to="Founders"

                    >
                        創辦人
                    </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"

                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        to="Product"

                    >
                        產品
                        </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"

                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        to="FB"

                    >
                        關注我們
                        </Link>

                </li>
                <li className="nav-item disabled">
                    <Link className="nav-link" href="#Photo" data-toggle="collapse" data-target=".navbar-collapse.show"

                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        to="Gallery"

                    >
                        相薄
                        </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"

                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        to="Channel"

                    >
                        我們的頻道
                        </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"

                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        to="QA"

                    >
                        Q&A
                        </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"

                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        to="Footer"

                    >
                        聯絡我們
                        </Link>

                </li>
               
            </ul>
        </div>
    </nav>


)

export default navbar;