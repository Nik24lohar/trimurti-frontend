import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useEffect, useState } from 'react'
import Navbar from '../navbar/navbar.jsx'
import './product.css';
import axios from 'axios';
import swal from 'sweetalert';
import { Row, Button
 } from 'react-bootstrap';
function Product() {
    const [products, setProduct] = useState([]);

    const addToCart = (e) => {
        axios.get('https://ecom-backend-opal.vercel.app/cart')
            .then(response => {                
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        swal({
            title: "added to card!",
            text: "you product added to card successfully!",
            icon: "success",
            button: "ok",
        });

    }
    const getProduct = async () => {
        axios.get('https://ecom-backend-opal.vercel.app/products')
            .then(response => {
                setProduct(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
       
    }

    useEffect(() => {
        getProduct();
    }, [])

    const renderProduct = (product) => {
        return( 
        <div className='card'>
            <img src={product.images[0]} alt="product" className='productimage' />
            <div className='detail'>
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
            </div>

            <Button className='btn' value={product._id} onClick={() => addToCart(product)}>ADD TO CARD</Button>
        </div>
        );
    }

    return <div className='section-products'>
        <Row>
        <Navbar />
        {products.map(renderProduct)}</Row>
        </div>; 

}
export default Product;