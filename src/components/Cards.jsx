import React, {Component} from 'react';
import CardGrid from '../components/CardGrid';
import '../components/card-style.css';
import img1 from '../images/image1.jpeg';
import img2 from '../images/image2.jpeg';
import img3 from '../images/image3.jpg';

class Cards extends Component {

    render(){
        return(
            <div className="container-fluid">
                <div className="card-group row col-12">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <CardGrid imgsrc={img1} title={"3D 軟件 設計口罩"} />
                    </div>
                   
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <CardGrid imgsrc={img2} title={"3D 打印 製作模具"} />
                    </div>
                   
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <CardGrid imgsrc={img3} title={"真空吸塑成形技術製作樣板"} />    
                    </div>
  
                </div>
            </div>
        );
    }
}

export default Cards