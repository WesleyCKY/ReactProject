import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
class FB extends Component {
    render() {
        return (
            <div>
                <h3 className="text-center heading">關注我們</h3>
            <MDBContainer fluid className="text-center">
                <MDBRow>
                    <MDBCol md="12">
                        <div className="fb-page" data-href="https://www.facebook.com/masksaver/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/masksaver/" className="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/masksaver/">MaskSaver</a>
                        </blockquote>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>

        );
    }
}
export default FB;