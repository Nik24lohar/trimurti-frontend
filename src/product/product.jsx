import React, { useState, useEffect } from 'react';
import axios from "axios"
import swal from 'sweetalert';
import Navbar from '../navbar/navbar.jsx'
import Categories from '../category/category.jsx'
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

    const detectDeviceType = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            ? 'Mobile'
            : 'Desktop';
    console.log(detectDeviceType());


    function buyViaWhatsapp(item) {
        try {
            let wpUrlMobile = "https://api.whatsapp.com/send/?phone=918208162056&text=Hey+Trimurti+Traders%2C+I+want+to+buy%0Aproduct+%3A+" + item.name + "%0Aprice+%3A+" + item.price + "%0Acategory+%3A+" + item.category + "&type=phone_number&app_absent=0";
            let wpUrlDesktop = "https://web.whatsapp.com/send/?phone=918208162056&text=Hey+Trimurti+Traders%2C+I+want+to+buy%0Aproduct+%3A+" + item.name + "%0Aprice+%3A+" + item.price + "%0Acategory+%3A+" + item.category + "&type=phone_number&app_absent=0";
            wpUrlMobile.replace(/ /g, "%20");
            wpUrlDesktop.replace(/ /g, "%20");

            if (detectDeviceType() == 'Desktop') {
                window.open(wpUrlDesktop, "_blank", "noreferrer");
                console.log('desktop opened')
            } else if (detectDeviceType() == 'Mobile') {
                console.log('Mobile opened');
            }
        } catch (error) {
            console.log(error)
        }
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
                <div class="row">
                    <h1>Our Latest Products</h1>
                    {cartItems.map((item) => (

                        <div class="col-sm-3">
                            <div className="card border-0 text-center shadow p-3 bg-white rounded">
                            <img className="card-img-top p-1 w-100 h-100" src={item.images[0]} alt={item.images[0]} />
                                <div className="card-block">
                                    <h4 className="card-title">{item.price}</h4>
                                    <p className="card-text">{item.category}</p>                                  
                                    <button className='btn btn-primary' value={item._id} onClick={() => buyViaWhatsapp(item)}>Buy Now</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;