import React, { useState } from 'react'
import './login.css'
import Navbar from '../navbar/navbar'
import Footer from '../sliding/footer'
import swal from 'sweetalert';
import axios from 'axios';
function Login() {
  const url="https://web-production-b900.up.railway.app/login/";
  const [data,setData]=useState(
    {
      "email": "",
      "password": "",
    
    })
    function handle(e){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
      console.log(newdata)
    }
    function submit(e){
      e.preventDefault();
      axios.post(url,
        {
          "email": data.email,
          "password": data.password
        
        }
          ).then(
        res=>{
          if (res.data.message === "login successfully"){
            swal({
              title: "Good job!",
              text: "you are registered successfully!",
              icon: "success",
              button: "ok",
            });
          }
          else if (res.data.message === "fail to login"){{
            swal({
              title: "try again",
              text: "fail to register",
              icon: "error",
              button: "ok",
            });
          }
         
           } 
        }
    )
  }

  return (
    <div>
    <Navbar/>
      <div className="back">
        
        <div className="main">
        <h3 className="mb-5">Sign in</h3>
        <form onSubmit={(e)=>submit(e)}>
        <div className='middel_section'>
        <div className="form-outline mb-4">
       
          <input type="email" onChange={(e)=>handle(e)} id="email" value={data.email} placeholder='Email' className="form-control form-control-lg" />
        </div>
        <div className="form-outline mb-4">
          <input type="password" onChange={(e)=>handle(e)} id="password" value={data.password} placeholder='Password' className="form-control form-control-lg" />
        </div>
        <div className="form-check d-flex justify-content-center mb-4">
            <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33"  />
          <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
          
        </div>
        <button type="submit" className="btn ">
                          LOGIN
        </button>
        <hr/>
      <a href='/signup' className='btn1'>register yourself</a>
      
        </div>
      </form>
        </div>
       
      </div>
      <Footer/>
  </div>
  )
}

export default Login;