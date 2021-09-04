import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';

export default class App extends Component {
  c="newsapp";
  render() {
    return (
      <>
      <Navbar/>
      <News />
      <Footer/>
      </>
    )
  }
}
