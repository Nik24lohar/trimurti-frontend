import axios from 'axios'
import React ,{useState}from 'react'
import swal from 'sweetalert';

function Support() {
  const url="https://web-production-b900.up.railway.app/user/";
  const [data,setData]= useState(
    {
      "email": "",
      "first_name": "",
      "last_name": "",
      "password": "",
      "contact_no": ""
    }
  )
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
          "first_name": data.first_name,
          "last_name": data.last_name,
          "password": data.password,
          "contact_no": data.contact_no
        
        }
          ).then(
        res=>{
          if (res.data.message === "user registered sccessfully"){
            swal({
              title: "Good job!",
              text: "you are registered successfully!",
              icon: "success",
              button: "ok",
            });
          }
          if (res.data.message === "fail to register"){
            swal({
              title: "try again",
              text: "fail to register",
              icon: "error",
              button: "ok",
            });
          }
         
        }
      )
  }
  return (
    
    <div>    
       <div>{/* Section: Design Block */}
    <section >
            {/* Jumbotron */}
            <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: 'hsl(0, 0%, 96%)'}}>
              <div className="container">
                <div className="row gx-lg-5 align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                    <h1 className="my-5 display-3 fw-bold ls-tight">
                      The best offer <br />
                      <span className="text-primary">for your best Clients</span>
                    </h1>
                    <p style={{color: 'hsl(217, 10%, 50.8%)'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                      quibusdam tempora at cupiditate quis eum maiores libero
                      veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>
                  </div>
                  <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card">
                      <div className="card-body py-5 px-md-5">
                        <form onSubmit={(e)=>submit(e)}>
                          {/* 2 column grid layout with text inputs for the first and last names */}
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input type="text" onChange={(e)=>handle(e)} id="first_name" value={data.first_name} placeholder='First name' className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input type="text" onChange={(e)=>handle(e)} value={data.last_name} id="last_name" placeholder='Last name' className="form-control" />
                              </div>
                            </div>
                          </div>
                          {/* Email input */}
                          <div className="form-outline mb-4">
                            <input type="text" onChange={(e)=>handle(e)} value={data.email} id="email" placeholder='Email address' className="form-control" />
                          </div>
                          <div className="form-outline mb-4">
                            <input type="text" onChange={(e)=>handle(e)} value={data.contact_no} id="contact_no" placeholder='Phone no' className="form-control" />
                          </div>
                          {/* Password input */}
                          <div className="form-outline mb-4">
                            <input type="password" onChange={(e)=>handle(e)} value={data.password} id="password" placeholder='Password' className="form-control" />
                          </div>
                          {/* Checkbox */}
                          <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
                            <label className="form-check-label" htmlFor="form2Example33">
                              Subscribe to our newsletter
                            </label>
                          </div>
                          {/* Submit button */}
                          <button type="submit" className="btn btn-primary btn-block mb-5 w-100" >
                            Sign up
                          </button>
                          {/* Register buttons */}
                         
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Jumbotron */}
          </section>
          {/* Section: Design Block */}</div></div>
  )
}

export default Support