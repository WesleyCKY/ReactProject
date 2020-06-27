import React from "react";

// import images1 from '../images/image2.jpeg';

const CardGrid = props => (
    <div className="card text-center shadow">
        <div className="overflow">
            <img src={props.imgsrc} alt="image 1" className="card-img-top bg-cover" />
        </div>
        <div className="card-body text-dark">
            <h5 className="card-title product-title-size">{props.title}</h5>
            <p className="card-text text-secondary">
                {props.text}
            </p>
            <ul className="text-left product-text-size">
                {props.li1}
                {props.li2}
                {props.li3}
                {props.li4}
                {props.li5}
            </ul>
            {/* <a href="#" className="btn btn-outline-success">Go AnyWhere</a> */}
        </div>
    </div>
)

export default CardGrid;