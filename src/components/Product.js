import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import ProductImg from '../images/image7.png';
import CardGrid from '../components/CardGrid'
import img1 from '../images/image4.png';
import img2 from '../images/image5.png';
import img3 from '../images/image6.png';

const Product = props => (
    <div class="jumbotron-product jumbo-bootom">
        <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
                <MDBCol md="12">
                    <h1 class="jumbotron-intro-head">SAVING THE MASK 計劃</h1>
                    <h1 class="jumbotron-intro-text">數碼港敢創抗疫計劃成員之一</h1>
                </MDBCol>
                <MDBCol md="6">
                    {/* bannner here */}
                    <img src={ProductImg} alt="product image" className="img-fluid" />
                    <br />
                </MDBCol>
                <br />
                <MDBCol md="6" className="">
                    <h3>每盒MASKSAVER包括：</h3>
                    <ul>
                        <li>
                            <h5>1 個可重⽤⼝罩</h5>
                        </li>
                        <li>
                            <h5>60 塊可更換濾芯</h5>
                        </li>
                        <li>
                            <h5>1 個鉗⼦</h5>
                        </li>
                        <li>
                            <h5>2 條掛⽿帶</h5>
                        </li>
                        <li>
                            <h5>1 個⿐貼</h5>
                        </li>
                        <li>
                            <h5>2 個⾯貼</h5>
                        </li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <div className="container-fluid">
            <div className="card-group row col-12">
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <CardGrid
                        imgsrc={img1} title={"口罩外部"}
                        li1={<li>食品級吸塑膠</li>}
                        li2={<li>環保物料</li>}
                        li3={<li>無毒無害</li>}
                        li4={<li>可多次使用</li>}
                        li5={<li>簡單清洗消毒即可</li>}
                    />
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <CardGrid imgsrc={img2} title={"濾芯"}
                        li1={<li>阻隔細菌濾膜</li>}
                        li2={<li>採用歐盟標準EN-149</li>}
                        li3={<li>FFP2/3 級</li>}
                        li4={<li>過濾微粒達94%或以上</li>}
                        li5={<li>建議每天更換⼀次</li>}
                    />
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <CardGrid imgsrc={img3} title={"​掛耳帶"}
                        li1={<li>硅膠</li>}
                        li2={<li>五段式調校長度</li>}
                        li3={<li>無毒無害</li>}
                        li4={<li>可多次使用</li>}
                        li5={<li>簡單清洗消毒即可</li>} 
                    />
                </div>

            </div>
        </div>


    </div>
)

export default Product;