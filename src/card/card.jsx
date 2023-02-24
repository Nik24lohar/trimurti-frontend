import {React,useState,useEffect} from 'react'; 
import Navbar from '../navbar/navbar';
import axios from 'axios';
import swal from 'sweetalert';
const Cards=()=>{

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
        const response = await fetch('http://localhost:8000/product/card');
        console.log(response);
        const data = await response.json();
        setProduct(data.data);
    }
    useEffect(() => {
        getProduct();
    },[])
   


return(
    <div>
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
            
                <button className='btn'  value={curElem.Id} >ADD TO CARD</button>
                        </div>
                
                </>
                    )
                })
            }
    </div>
)
}
export default Cards