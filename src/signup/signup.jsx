import React, { useState } from 'react'
import './signup.css'
import Navbar from '../navbar/navbar'
import Footer from '../sliding/footer'
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const url = "https://ecom-backend-opal.vercel.app/api/signin/";
  const [data, setData] = useState(
    {
      "name": "",
      "address": "",
      "company": "",
      "email": "",
      "phone": "",
      "password": ""

    })
  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function submit(e) {
    e.preventDefault();

    console.log(data.email, data.password)
    axios.post("https://ecom-backend-opal.vercel.app/api/signup", {
      "name": data.name,
      "address": data.address,
      "company": data.company,
      "email": data.email,
      "phone": data.phone,
      "password": data.password

    }).then(result => {
      if (result.status == 200) {
        console.log("login success")
        swal({
          title: "Good job!",
          text: "you are resistered successfully!",
          icon: "success",
          button: "ok",
        });
        navigate('/product', { replace: true });
      }
    }).catch(err => {
      console.log(err)
      swal({
        title: "try again",
        text: "fail to register",
        icon: "error",
        button: "ok",
      });
    })

  }

  return (
    <div>
      <Navbar />
      <div className="back">
        <div>
          <div className="container card p-5 bg-white">
            <h3 className="mb-5 text-center pt-5">Register</h3>
            <form className='container' onSubmit={(e) => submit(e)}>
              <div className='middel_section'>
                <div className="form-outline mb-4">

                  <input type="text" onChange={(e) => handle(e)} id="name" value={data.name} placeholder='Name' className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                  <input type="text" onChange={(e) => handle(e)} id="email" value={data.email} placeholder='Email' className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                  <input type="number" onChange={(e) => handle(e)} id="phone" value={data.phone} placeholder='Phone Number' className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                  <input type="text" onChange={(e) => handle(e)} id="company" value={data.company} placeholder='Company Name' className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                  <input type="text" onChange={(e) => handle(e)} id="address" value={data.address} placeholder='Address' className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                  <input type="text" onChange={(e) => handle(e)} id="password" value={data.password} placeholder='Password' className="form-control form-control-lg" />
                </div>

                <button type="submit" className="btn2">
                  Signup
                </button>
                <br />
                <br />
                <a href='/login' style={{ textDecoration: "none" }} className=''>Already Have a account? Login</a>

              </div>
            </form>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Signup;