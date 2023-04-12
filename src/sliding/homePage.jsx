import Navbar from '../navbar/navbar';
import React, { Component } from 'react'
import Comapnyname from './comapnyname';
import Midpart from './midpart';
import '../style/homepage.css';
import Footer from './footer';
import Midpart2 from './midpart2';
import Midpart3 from './mid3part';
import Reviews from '../Review/review';


export class homepage extends Component {
  render() {
    return (
      <div className='body'>
        <Navbar/>
        <Comapnyname/>
        <Midpart/>
        <div className='mid2'>
        <Midpart2/>
        </div>
        <div className='mid3'>
        <Midpart3/>
        </div>
        <Reviews/>
      <div className='footer'>
      <Footer/>
      </div>
      </div>
    )
  }
}

export default homepage;