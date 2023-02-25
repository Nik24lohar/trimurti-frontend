import {React,useState,useEffect} from 'react'; 
import Navbar from '../navbar/navbar';

function Card() {
  const [products , setProduct]=useState([]);

      const getProduct = async()=>{
        const response = await fetch('http://localhost:8000/product/card');
        console.log(response)
        const data = await response.json();
        console.log(data.productData);
        setProduct(data.productData);
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
            
                <button className='btn'  value={curElem.Id}  >buy</button>
                        </div>

                         </>
                    )
                })
            }
  </div>
)
}
export default Card;