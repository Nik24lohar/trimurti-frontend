import Navbar from '../navbar/navbar';
import React, { Component } from 'react'

import Midpart from './midpart';
import '../style/homepage.css';
import Footer from './footer';
import Midpart2 from './midpart2';
import Midpart3 from './mid3part';
import Reviews from '../Review/review';


export class homepage extends Component {
  render() {
    return (
      <div className=''>
        <Navbar/>
       <div className='homeBody'>

        <div className=' text-start p-5'>
        <h1 className='title' class="display-1 h1 fw-holder">Trimurti Engineering</h1>
        <h2 className='subtitle' class="display4 fw-holder">Goals are dreams with deadlines</h2>
        </div>
        <Midpart/>
        {/* <Midpart2/> */}
        <Midpart3/>
        <Reviews/>
       </div>
        <Footer/>
       
      </div>
    )
  }
}

export default homepage;