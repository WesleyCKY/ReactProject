import React from 'react';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards.jsx";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import FB from './components/FB';
import Product from './components/Product';
import QA from './components/QA';
import Channel from './components/Channel';
import Founders from './components/Founders';
import Gallery from './components/Gallery';
import './App.css';


class App extends React.Component {
  render() {
    return (

      <div className="div.disabled">
        <Navbar />
        <div id={'Home'}>
          <br />
          <Banner />
        </div>
        <div id={'card'}>
          <Cards />
        </div>
        <div id={'Intro'}>
          <Intro />
        </div>
        <div id={'Founders'}>
          <Founders />
        </div>
        <div id={'Product'}>
          <Product />
        </div>
        <div id={'FB'}>
          <FB />
        </div>
        <div id={'Gallery'}>
          <Gallery />
        </div>
        <div id={'Channel'}>
          <Channel />
        </div>
        <div id={'QA'}>
          <QA />
        </div>
        <div id={'Footer'}>
          <Footer />
        </div>
      </div>
    );
  };
};

export default App;
