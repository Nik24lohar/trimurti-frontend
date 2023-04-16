import React, { Component } from 'react'
import '../style/midpart2.css';



export class midpart2 extends Component {
   data = [
    {"name":"Teresa May",
    "role":"Founder at ET Company",
    "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
  },
  {"name":"Maggie McLoan",
    "role":"Front-end Developer in NY",
    "comment":"Autem, totam debitis suscipit saepe sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis."
  },
  {"name":"Alexa Horwitz",
    "role":"Front-end Developer in NY",
    "comment":"Cras sit amet nibh libero, in gravida nulla metus scelerisque ante sollicitudin commodo cras ."
  },
  {"name":"daniel Evens",
    "role":"Founder at KT Company",
    "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
  }
  
  ]

  render() {
    return (
      <div className='d-flex justify-content-center p-3'>
         
        <div className=" text-start">
          
          <h1 className=' display-4 pb-5 text-danger mb-5 fw-bold'>Team</h1>
          <div className="row pt-5 pb-5 text-center">

          {this.data.map((comment, index) => (
            <div className="col d-flex justify-content-center">
        <div className='card homeCard shadow-lg p-3 mb-5 bg-white rounded'  key={index}>

          <h2 className='mt-5 text-primary'>{comment.name}</h2>
          <h5 className='text-muted'>{comment.role}</h5>
          <br />
          
          
          <p className='mb-5 fw-bold'>{comment.comment}</p>
          <div className="row p-5">

          </div>
        </div>
        </div>
      ))}
           
           
          </div>
        </div>
     

      </div>
    )
  }
}

export default midpart2