import React, { useState , useEffect} from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../sliding/footer'

import useDrivePicker from 'react-google-drive-picker'

function Product() {

  const [openPicker,data, authResponse] = useDrivePicker();  
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId: "835939200765-mormgim1go51b2rsr2g8mssllrduk9lr.apps.googleusercontent.com",
      developerKey: "AIzaSyDybJxJ8gv9sVs5SRq2v1MrxOSyJF48mXk",
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
    })
  }
useEffect(()=>{
  if (data){
    data.docs.map((i)=>console.log(i))
  }
},[data])

    return (
        <div>
        <Navbar/>
      <div className="back">
        
        <div className="main">
        <h3 className="mb-5">Sign in</h3>
        <form >
        <div className='middel_section'>
        <div className="form-outline mb-4">
          <input type="productName" id="productName" placeholder='productName' className="form-control form-control-lg" />
        </div>
        {/**
         *  "Id": 1,
      "picture": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "productName": "Camera",
      "availableQuantity": 2,
      "pricePerUnit": 30000,
      "description": "wonderfull camera"
         */}

        <div className="form-outline mb-4">
          <input type="availableQuantity" id="availableQuantity" placeholder='availableQuantity' className="form-control form-control-lg" />
        </div>
        <div className="form-outline mb-4">
          <input type="pricePerUnit" id="pricePerUnit" placeholder='pricePerUnit' className="form-control form-control-lg" />
        </div>
        <div className="form-outline mb-4">
          <input type="description" id="description" placeholder='description' className="form-control form-control-lg" />
        </div>
        <button type="submit" className="btn " onClick={handleOpenPicker}>
                          Add product
        </button>
        </div>
      </form>
        </div>
       
      </div>
      <Footer/>
        </div>
    )
}

export default Product;