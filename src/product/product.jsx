import React, { useState, useEffect } from 'react';
import axios from "axios"
import swal from 'sweetalert';
import Navbar from '../navbar/navbar.jsx'
import Categories from '../category/category.jsx'
import Reviews from '../Review/review';
import Stripe from "@stripe/react-stripe-js"
import StripeCheckout from 'react-stripe-checkout';
import useRazorpay from "react-razorpay";
import PaypalCheckoutButton from './PaypalCheckoutButton.js';


const Product = () => {
    const Razorpay = useRazorpay();
    const [cartItems, setCartItems] = useState([]);
    const [order, setOrder] = useState([]);


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


    function buyViaWhatsapp(){
        console.log(item.name);
    }

    useEffect(() => {
        axios
            .get("https://ecom-backend-opal.vercel.app/api/product")
            .then((response) => {
                setCartItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <Categories />
            <div className="container justify-content-center">
                <div class="row p-5">
                    <h1>Our Latest Products</h1>
                    {cartItems.map((item) => (

                        <div class="card border-0 w-25 m-5 text-center col-md-4 shadow p-3 mb-5 bg-white rounded" key={item._id} >
                            <img class="card-img-top p-1 w-100 h-100" src={item.images[0]} alt="Card image cap" />
                            <div class="card-body">
                                <h3>{item.name}</h3>
                                <p >₹ <span className="text-bold">{item.price}</span> /-</p>
                                <p>{item.category}</p>
                                {/* <button className='btn btn-primary' value={item._id} onClick={() => addToCart(item._id)}>ADD TO CARD</button> */}

                                <button className='btn btn-primary' value={item._id} onClick={() => buyViaWhatsapp(item)}>Buy Now</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;