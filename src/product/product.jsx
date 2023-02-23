import {React,useEffect,useState} from 'react'
import Navbar from '../navbar/navbar.jsx'

import './product.css'


function Product() {
    const [products , setProduct]=useState([]);
    const handleBtnClick = (id) => {
        console.log(id);
      };

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
              
             
                <div className='card'>
                <img src={curElem.picture} alt="product" className='productimage' />
                <div className='detail'>
                    <h3>{curElem.productName}</h3>
                    <p>{curElem.description}</p>
                </div>
            
                <button className='btn' type="submit" value={curElem.Id}  onClick={handleBtnClick(curElem.Id)}>ADD TO CARD</button>
                        </div>
               
                    )
                })
            }
            
            {/*card*/}
            
        </div>
    )
}
export default Product