import React, { Component } from 'react';
import First from '../images/img1.png';
import Second from '../images/img5.png';
import Thrid from '../images/img3.png';
import '../style/midpart.css'
import CheckIcon from '@mui/icons-material/Check';
export class midpart extends Component {
  render() {
    return (
        <div>
      <div className='images'>
        <img  className="First" src={First} alt="" />
        <img className="Second"src={Second} alt="" />
        <img className="Third" src={Thrid} alt="" />
      </div>
      <div className='textpart'>
        <h1>Innovative <part className="part">oil filtering</part> System </h1><br/>
        <div className='checklist'><CheckIcon/> Intelligent unmanned systems<br/><br/>
        <part className="part1"> <CheckIcon/> mart 360 technology </part> <br/><br/>
        <part className="part2"> <CheckIcon/> Intelligent chemical mixing system</part><br/><br/>
        <part className="part3"> <CheckIcon/> Innovative suspension system</part><br/><br/>
        <part className="part4"> <CheckIcon/> Unique embedded fast air drying</part><br/><br/>
        <part className="part5"> <CheckIcon/> Digital voice security alarm system</part><br/><br/>
        <part className="part6"> <CheckIcon/> Faulty self-checking system</part><br/><br/>
    
      </div>
      </div>
      
      </div>
      
      
    )
  }
}

export default midpart