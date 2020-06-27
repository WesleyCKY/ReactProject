import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
class FB extends Component {
    render() {
        return (
            <div>
                <h3 className="text-center">最新消息</h3>
            <MDBContainer fluid className="text-center">
                <MDBRow>
                    <MDBCol md="12">
                        <div class="fb-page" data-href="https://www.facebook.com/masksaver/" data-tabs="timeline" data-width="500" data-height="600" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/masksaver/" class="fb-xfbml-parse-ignore">
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