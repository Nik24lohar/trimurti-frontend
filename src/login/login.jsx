import React, { useState } from 'react'
import './login.css'
import Navbar from '../navbar/navbar'
import Footer from '../sliding/footer'
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const url = "https://ecom-backend-opal.vercel.app/api/signin/";
  const [data, setData] = useState(
    {
      "email": "",
      "password": "",

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
    axios.post("https://ecom-backend-opal.vercel.app/api/signin", {
      email: data.email,
      password: data.password,

    }).then(result => {
      if (result.status == 200) {
        console.log("login success")
        swal({
          title: "Good job!",
          text: "you are logged in successfully!",
          icon: "success",
          button: "ok",
        });
        navigate('/product', { replace: true });
      }
    }).catch(err => {
      console.log(err)
      swal({
        title: "try again",
        text: "fail to login",
        icon: "error",
        button: "ok",
      });
    })

  }

  return (
    <div>
      <Navbar />
      <div className="back">
        <div className=''>
          <div className="container card p-5 bg-white">
            <h3 className="mb-5 text-center pt-5">Sign in</h3>
            <form className='container' onSubmit={(e) => submit(e)}>
              <div className='middel_section '>
                <div className="form-outline mb-4">

                  <input type="email" onChange={(e) => handle(e)} id="email" value={data.email} placeholder='Email' className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                  <input type="password" onChange={(e) => handle(e)} id="password" value={data.password} placeholder='Password' className="form-control form-control-lg" />
                </div>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" />
                  <label className="form-check-label " htmlFor="form1Example3"> Remember password </label>

                </div>
                <button type="submit" className="btn btn-primary">
                  LOGIN
                </button>
                <br />
                <br />
                <a href='/signup' style={{ textDecoration: "none" }} className='text-primary h4'>Sign Up</a>

              </div>
            </form>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Login;