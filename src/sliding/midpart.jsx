import React, { Component } from 'react';
import First from '../images/img1.png';
import Second from '../images/img5.png';
import Thrid from '../images/img3.png';
import '../style/midpart.css'
import CheckIcon from '@mui/icons-material/Check';
export class midpart extends Component {
  render() {
    return (
        <div className=' p-5 m-5'>
        
        <div className='row pt-5'>

      <div className='col pb-5'>
        <img src={require("../images/hero.png")} height="auto" width={250} className="hero" alt="" srcset="" />
      </div>
     
      <div className='  col pt-5'>
      <h1 className='text-start mt-5'>Innovative <span style={{color:"red"}}>oil filtering</span> System </h1><br/>
      <ul className='text-start mt-5 ml-5'>
        <li><CheckIcon style={{color:"blue"}}/> Mart 360 technology</li><br />
        <li><CheckIcon style={{color:"blue"}}/> Intelligent unmanned systems</li> <br />
        <li><CheckIcon style={{color:"blue"}}/> Intelligent chemical mixing system</li><br />
        <li><CheckIcon style={{color:"blue"}}/> Innovative suspension system</li><br />
        <li><CheckIcon style={{color:"blue"}}/> Unique embedded fast air drying</li><br />
        <li><CheckIcon style={{color:"blue"}}/> Digital voice security alarm system</li><br />
        <li><CheckIcon style={{color:"blue"}}/> Faulty self-checking system</li>
      </ul>
      </div>
        </div>
      
      </div>
      
      
    )
  }
}

export default midpart