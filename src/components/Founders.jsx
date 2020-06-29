import React, { Component } from 'react';
import Founder from './Founder';
import '../components/card-style.css';
import img1 from '../images/founder1.png';
import img2 from '../images/founder2.png';
import img3 from '../images/founder3.png';


class Founders extends Component {

    render() {
        return (
            <div>
                <div><h3 className="text-center">創辦人</h3></div>
                <div className="container-fluid">
                    <div className="card-group row col-12 ">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <Founder imagesrc={img2} name={"發起人: 李偉康 Alex"} text={"(STEM 老師；香港發明創新總會常務副主席) 發起人: 李偉康 Alex (STEM 老師；香港發明創新總會常務副主席)"} />
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <Founder imagesrc={img1} name={"設計師: 袁思明 Anthony"} text={"(CEO, Many Things Development Ltd)"} />
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <Founder imagesrc={img3} name={"召集人: 梁偉健 Kenny"} text={"(CEO, IOT Solution Limited)"} />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Founders