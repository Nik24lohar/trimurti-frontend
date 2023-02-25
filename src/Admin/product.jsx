import React, {useState} from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../sliding/footer'
import {Storage} from '../firebase'
import {getDownloadURL, ref,uploadBytesResumable} from 'firebase/storage'
import swal from 'sweetalert';
import axios from 'axios';
function Product() {
  const picurl="";
  const [progress , setProgress]=useState(0);
  const url="http://127.0.0.1:8000/product/product";
  const [data,setData]=useState(
    {
      "pricePerUnit": "",
      "availableQuantity": "",
      "productName":"",
      "description":"",
      "picture":""
    })


  // const customViewsArray =  [new google.picker.DocsView()]; // custom view
  const uploadfile=(files)=>{
      if (!files) return ;
      const storageref = ref(Storage, `/files/${files.name}`);
      const uploadTask=uploadBytesResumable(storageref,files);
      uploadTask.on("state_changed",(snapshot)=>{
        const prog=Math.round( [snapshot.bytesTransferred/snapshot.totalBytes]*100);
        alert(progress);
        setProgress(prog)
      },(error)=>{
        alert(error);
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(url=> data.pic=url);
      });

  };

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

        "productName":data.productName,
        "pricePerUnit": data.pricePerUnit,
        "availableQuantity": data.availableQuantity,
        "productName":data.productName,
        "description":data.description,
        "picture":data.pic

      }
        ).then(
      res=>{
        if (res.data.message === "product created"){
          swal({
            title: "Good job!",
            text: "you created product successfully!",
            icon: "success",
            button: "ok",
          });
        }
        else if (res.data.message === "product fail to create"){{
          swal({
            title: "try again",
            text: "fail to created product",
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
        <h3 className="mb-5">Product</h3>
        <form onSubmit={(e)=>submit(e)}>
        <div className='middel_section'>
        <div className="form-outline mb-4">
          <input type="productName" onChange={(e)=>handle(e)} id="productName"  value={data.productName}placeholder='productName' className="form-control form-control-lg" />
        </div>
        
        <div className="form-outline mb-4">
          <input type="availableQuantity" onChange={(e)=>handle(e)} id="availableQuantity" value={data.availableQuantity} placeholder='availableQuantity' className="form-control form-control-lg" />
        </div>
        <div className="form-outline mb-4">
          <input type="pricePerUnit" onChange={(e)=>handle(e)} id="pricePerUnit" value={data.pricePerUnit} placeholder='pricePerUnit' className="form-control form-control-lg" />
        </div>
        <div className="form-outline mb-4">
          <input type="description" onChange={(e)=>handle(e)} id="description" value={data.description} placeholder='description' className="form-control form-control-lg" />
        </div>
        <div className="form-outline mb-4">
          <input type="file"  id="productName" placeholder='productName' className="form-control form-control-lg"
          onChange={(event)=>{uploadfile(event.target.files[0]);}}
          />
        </div>
<button type="submit" className="btn " > Click and Upload</button>
        </div>
      </form>
        </div>
       
      </div>
      <Footer/>
        </div>
    )
}

export default Product;