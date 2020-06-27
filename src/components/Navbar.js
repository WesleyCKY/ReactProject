import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../App.css';

const navbar = props => (
    // <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-nav" style={{ position: 'fixed', width: '100%', zIndex: 100 }}>
    //     <a class="navbar-brand nav-shadow" href="#Banner">MASK SAVER</a>
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div class="navbar-nav">
    //             {/* <a class="nav-item nav-link active" href='#Banner'>Home <span class="sr-only">(current)</span></a>
    //             <a class="nav-item nav-link" href='#Intro'>關於</a>
    //             <a class="nav-item nav-link" href='#Footer'>聯絡我們</a> */}
    //             <Link
    //                 className="navbar-nav"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-70}
    //                 duration={1000}
    //                 to="Banner"
    //             // activeClassName="selected"
    //             >
    //                 Home
    //                 </Link>
    //             <Link
    //                 // class="nav-item nav-link active"
    //                 className="navbar-nav"
    //                 activeClass="active"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-70}
    //                 duration={1000}
    //                 to="Intro"
    //             // activeClassName="selected"
    //             >
    //                 關於
    //                 </Link>
    //             <Link
    //                 class="navbar-nav"
    //                 activeClass="active"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-70}
    //                 duration={1000}
    //                 to="Footer"
    //             // activeClassName="selected"
    //             >
    //                 聯絡我們
    //                 </Link>
    //         </div>
    //     </div>
    // </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-nav" style={{ position: 'fixed', width: '100%', zIndex: 100 }}>
        <a class="navbar-brand nav-shadow" href="#Home">
            <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="Home"
                activeClassName="selected"
            >
                MASK SAVER
            </Link>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#Home">
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="Home"
                            activeClassName="selected"
                        >
                            主頁 <span class="sr-only">(current)</span>
                        </Link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Intro">
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="Intro"
                            activeClassName="selected"
                        >
                            關於
                    </Link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Product">
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="Product"
                            activeClassName="selected"
                        >
                            產品
                        </Link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#QA">
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="QA"
                            activeClassName="selected"
                        >
                            Q&A
                        </Link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Channel">
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="Channel"
                            activeClassName="selected"
                        >
                            我們的頻道
                        </Link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Footer">
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="Footer"
                            activeClassName="selected"
                        >
                            聯絡我們
                        </Link>
                    </a>
                </li>
                <li class="nav-item disabled">
                    <a class="nav-link" href="#Photo">
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="Photo"
                            activeClassName="selected"
                        >
                            相薄
                        </Link>
                    </a>
                </li>
            </ul>
        </div>
    </nav>


)

export default navbar;