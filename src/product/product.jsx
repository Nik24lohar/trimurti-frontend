import {React,useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import Navbar from '../navbar/navbar.jsx'
import './product.css'
import axios from 'axios';
import swal from 'sweetalert';
function Product() {
    const [products , setProduct]=useState([]);
    const handleBtnClick = (id) => {
        console.log(id);
      };

      
      const send=(e)=>{
        e=JSON.stringify(e);
        console.log(e);
        const url="http://localhost:8000/product/card";

        axios.post(url,
            e
              ).then(
            res=>{
              if (res.data.message === "login successfully"){
                swal({
                  title: "Good job!",
                  text: "product is added in card!",
                  icon: "success",
                  button: "ok",
                });
    
                
              }
              else if (res.data.message === "fail to login"){{
                swal({
                  title: "try again",
                  text: "fail to add in card",
                  icon: "error",
                  button: "ok",
                });
              }
             
               } 
            }
            )


      }
    const getProduct = async()=>{
        const response = await fetch('http://localhost:8000/product/product');
        console.log(response);
        const data = await response.json();
        setProduct(data.data);
    }

    useEffect(() => {
        getProduct();
    },[])


    



    return (
        <div>
            {/*"Id": 1,
      "picture": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "productName": "Camera",
      "availableQuantity": 2,
      "pricePerUnit": 30000,
      "description": "wonderfull camera"
    },*/}

            <Navbar/>
            {
                products.map((curElem)=>{
                    return(
              <>
             
                <div className='card'>
                <img src={curElem.picture} alt="product" className='productimage' />
                <div className='detail'>
                    <h3>{curElem.productName}</h3>
                    <p>{curElem.description}</p>
                </div>
            
                <button className='btn'  value={curElem.Id}  onClick={()=>send(curElem)}>ADD TO CARD</button>
                        </div>
                
                </>
                    )
                })
            }
            
            {/*card*/}
            
        </div>
    )
}
export default Product