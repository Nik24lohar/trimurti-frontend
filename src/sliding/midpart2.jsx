import React, { Component } from 'react'
import '../style/midpart2.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export class midpart2 extends Component {
  render() {
    return (
      <div className='midpart2'>
         
        <div className="container py-5">
         
          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  {/* <div className="d-flex justify-content-center mb-4">
                    <img src="" className="rounded-circle shadow-1-strong" width={100} height={100} />
                  </div> */}
                  <h5 className="font-weight-bold">Teresa May</h5>
                  <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt fa-sm text-info" />
                    </li>
                  </ul>
                  <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                    ad velit ab hic tenetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  {/* <div className="d-flex justify-content-center mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp" className="rounded-circle shadow-1-strong" width={100} height={100} />
                  </div> */}
                  <h5 className="font-weight-bold">Maggie McLoan</h5>
                  <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                  </ul>
                  <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />Autem, totam debitis suscipit saepe
                    sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis
                    labore laboriosam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  {/* <div className="d-flex justify-content-center mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp" className="rounded-circle shadow-1-strong" width={100} height={100} />
                  </div> */}
                  <h5 className="font-weight-bold">Alexa Horwitz</h5>
                  <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="far fa-star fa-sm text-info" />
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />Cras sit amet nibh libero, in gravida
                    nulla metus scelerisque ante sollicitudin commodo cras purus odio,
                    vestibulum in tempus viverra turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
     

      </div>
    )
  }
}

export default midpart2