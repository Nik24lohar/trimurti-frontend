import React, { Component } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export class footer extends Component {
  render() {
    return (
      <div className=''>
        {/* Remove the container if you want to extend the Footer to full width. */}
        <div className="">
          {/* Footer */}
          <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#929fba' }}>
            {/* Grid container */}
            <div className="container p-4 pb-0">
              {/* Section: Links */}
              <section className>
                {/*Grid row*/}
                <div className="row">
                  {/* Grid column */}
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      Trimurti
                    </h6>
                    <p>
                      All type of air filters and oil filters are available in one place
                    </p>
                  </div>
                  {/* Grid column */}
                  <hr className="w-100 clearfix d-md-none" />
                  {/* Grid column */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                    <p>
                      <part className="text-white">Oil Filtering</part>
                    </p>
                    <p>
                      <part className="text-white">Engin parts</part>
                    </p>
                    <p>
                      <part className="text-white">Air Filtering</part>
                    </p>
                    <p>
                      <part className="text-white">Components making</part>
                    </p>
                  </div>
                  {/* Grid column */}
                  <hr className="w-100 clearfix d-md-none" />
                  {/* Grid column */}
                  <hr className="w-100 clearfix d-md-none" />
                  {/* Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p><i className="fas fa-home mr-3" />Factory: Gate No-267/A/2, Patil Ind. Complex, Gulhane Ind, Estate, Shed A-2 Lawale Phata,
                      Pirangut, Tal-Mulashi, Dist.-Pune, Maharashtra Pin-412115</p>
                    <p><i className="fas fa-envelope mr-3" /> trimurti@gmail.com</p>
                    <p><i className="fas fa-phone mr-3" /> + 0230 234 567 88</p>
                    <p><i className="fas fa-print mr-3" /> + 0230 234 567 89</p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                    {/* Facebook */}
                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="facebook" role="button"><FacebookIcon /></a>
                    {/* Twitter */}
                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="Twitter" role="button"><TwitterIcon /></a>
                    {/* Google */}
                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="Google" role="button"><GoogleIcon /></a>
                    {/* Instagram */}
                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="Insta" role="button"><InstagramIcon /></a>
                    {/* Linkedin */}
                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="Linked in" role="button"><LinkedInIcon /></a>
                    {/* Github */}
                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="Github" role="button"><GitHubIcon /></a>
                  </div>
                </div>
                {/*Grid row*/}
              </section>
              {/* Section: Links */}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2022 Copyright:
              <a className="text-white" href="website" style={{ textDecoration: "none" }}>Team XYZ</a>
            </div>
            {/* Copyright */}
          </footer>
          {/* Footer */}
        </div>
        {/* End of .container */}
      </div>
    )
  }
}

export default footer