import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
class Channel extends Component {
    render() {
        return (
            <div>
                <br />
                <h3 className="text-center heading">我們的頻道</h3>
            <MDBContainer fluid className="text-center">
                <MDBRow>
                    <MDBCol md="6">
                        <iframe title="promote" width="100%" height="500px" src="https://www.youtube.com/embed/EU-2nuTxJ0g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </MDBCol>
                
                    <MDBCol md="6">
                        <iframe title="demo" width="100%" height="500px" src="https://www.youtube.com/embed/B1Ea-t9vhIg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        );
    }
}
export default Channel;