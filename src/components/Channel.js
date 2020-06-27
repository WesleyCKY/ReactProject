import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
class Channel extends Component {
    render() {
        return (
            <div>
                <br />
                <h3 className="text-center">我們的頻道</h3>
            <MDBContainer fluid className="text-center">
                <MDBRow>
                    <MDBCol md="6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EU-2nuTxJ0g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </MDBCol>
                
                    <MDBCol md="6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/B1Ea-t9vhIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        );
    }
}
export default Channel;