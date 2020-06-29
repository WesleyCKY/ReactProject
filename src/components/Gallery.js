import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import img1 from '../images/photo1.jpeg';
import img2 from '../images/photo2.jpg';
import img3 from '../images/photo3.jpg';
import img4 from '../images/photo4.jpg';
import img5 from '../images/photo5.jpg';
import img6 from '../images/photo6.jpg';
import img7 from '../images/photo7.jpg';
import img8 from '../images/photo8.jpg';
import img9 from '../images/photo9.jpeg';
import img10 from '../images/photo10.jpeg';
import img11 from '../images/photo11.jpeg';


const breakPoints = [
  { width: 20, itemsToShow: 1 },
];

export default function Gallery1() {
  return (
    <>
      <br />
      <h3 className="text-center heading">相薄</h3>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img className="cover" src={img2} alt="2" /></Item>
          <Item><img className="cover" src={img1} alt="1" /></Item>
          <Item><img className="cover" src={img3} alt="3" /></Item>
          <Item><img className="cover" src={img4} alt="4" /></Item>
          <Item><img className="cover" src={img5} alt="5" /></Item>
          <Item><img className="cover" src={img6} alt="6" /></Item>
          <Item><img className="cover" src={img7} alt="7" /></Item>
          <Item><img className="cover" src={img8} alt="8" /></Item>
          <Item><img className="cover" src={img9} alt="9" /></Item>
          <Item><img className="cover" src={img10} alt="10" /></Item>
          <Item><img className="cover" src={img11} alt="11" /></Item>
        </Carousel>
      </div>
    </>
  );
}

