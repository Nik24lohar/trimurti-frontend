import React, { useState, useEffect } from 'react';
import axios from "axios"
import swal from 'sweetalert';
import Navbar from '../navbar/navbar.jsx'
import Categories from '../category/category.jsx'
import Reviews from '../Review/review';
import useRazorpay from "react-razorpay";


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

    const buyProduct = async (prodID) => {
        console.log("Lets buy : " + prodID)
        await axios.post("https://ecom-backend-opal.vercel.app/api/product/buy", {
            productId: prodID,

        }).then(result => {
            console.log(result)
            setOrder(result.data);
        }).catch(err => console.log(err));

        let price = parseInt(order.amount);

        var options = {
            "key": "rzp_test_c3XxeYO6fC8y0Q", 
            "amount": "50000", 
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order.id, 
            "callback_url": "https://ecom-backend-opal.vercel.app/api/payment/verify",
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        
        const razor = new window.Razorpay(options);
        razor.open();

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

                                <button className='btn btn-primary' value={item._id} onClick={() => buyProduct(item._id)}>Buy Now</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;