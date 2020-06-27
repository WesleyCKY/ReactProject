import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Footerlogo from '../images/image8.png';
const Footer = () => {
    return (
        <div className="panel-footer">
            <MDBFooter className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="4">
                            <h3 className="title">IOT Solution LTD</h3>
                            <img src={Footerlogo} alt="footer logo image" className="img-fluid" />
                        </MDBCol>
                        <MDBCol md="4">
                            <h3 className="title">辦公時間</h3>
                            <h5>Mon - Fri: 9am - 6pm</h5>
                            <br />
                            <h3 className="title">聯繫方式</h3>
                            <h5>pr@steamvr.hk</h5>
                            {/* <div class="fb-share-button" data-href="https://www.facebook.com/masksaver/" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">分享</a></div> */}
                        </MDBCol>
                        <MDBCol md="4">
                            <h3 className="title">地址</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14744.20417312936!2d114.07828700000002!3d22.502268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33c51a6462740c2c!2zU1RFQU0gVlIg5L2T6aqM5Lit5b-D!5e0!3m2!1szh-CN!2sus!4v1593256914372!5m2!1szh-CN!2sus" width="400" height="300" frameborder="0" allowfullscreen="" aria-hidden="false"></iframe>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.facebook.com/masksaver/"> THE MASKSAVER </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer;