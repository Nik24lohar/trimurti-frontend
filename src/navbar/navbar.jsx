import React, { Component } from 'react'
import './navbar.css'
import { useSelector } from 'react-redux';
function Navbar() {
  
    const getdata = useSelector((state)=>state.cartreducer);
console.log(getdata) 
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder" href="Trimurti">TRIMURTI</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">

                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="product">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agreements">Trade agreements</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="Feedback">Feedback</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/login" >Admin</a>
              </li>
              <li id="login" className="nav-item">
                <a className="nav-link " href="/login">login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      </div>
    )
  }


export default Navbar