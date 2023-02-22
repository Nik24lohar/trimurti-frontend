import React, {useState} from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../sliding/footer'
import {Storage} from '../firebase'
import {getDownloadURL, ref,uploadBytesResumable} from 'firebase/storage'

function Product() {
  const [progress , setProgress]=useState(0);
  const formHandler=(e)=>{
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadfile(file);
  }
  const [imageUpload,setImageUload]=useState(null);
  // const customViewsArray =  [new google.picker.DocsView()]; // custom view
  const uploadfile=(files)=>{
      if (!files) return ;
      const storageref = ref(Storage, `/files/${files.name}`);
      const uploadTask=uploadBytesResumable(storageref,files);
      uploadTask.on("state_changed",(snapshot)=>{
        const prog=Math.round( [snapshot.bytesTransferred/snapshot.totalBytes]*100);
      setProgress(prog)
      },(error)=>{
        alert(error);
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(url=>alert(url));
      });

  };
      
      



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
        <h3>Upload {progress}%</h3>
        <div className="form-outline mb-4">
          <input type="availableQuantity" id="availableQuantity" placeholder='availableQuantity' className="form-control form-control-lg" />
        </div>
        <div className="form-outline mb-4">
          <input type="pricePerUnit" id="pricePerUnit" placeholder='pricePerUnit' className="form-control form-control-lg" />
        </div>
        <div className="form-outline mb-4">
          <input type="description" id="description" placeholder='description' className="form-control form-control-lg" />
        </div>
        <div className="form-outline mb-4">
          <input type="file" id="productName" placeholder='productName' className="form-control form-control-lg"
          onChange={(event)=>{uploadfile(event.target.files[0]);}}
          />
        </div>
<button onClick={uploadfile}> Click and Upload</button>
        </div>
      </form>
        </div>
       
      </div>
      <Footer/>
        </div>
    )
}

export default Product;