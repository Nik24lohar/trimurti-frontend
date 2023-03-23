import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Carousel } from 'react-bootstrap';

function Review() {
    const [reviewItems, setReviewItems] = useState([]);
    const getReviews = async () => {
        await axios
            .get("https://ecom-backend-opal.vercel.app/api/reviews")
            .then((response) => {
                setReviewItems(response.data);
                console.log(reviewItems);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        getReviews();
    }, []);

    return (
        <div>
            <div className="container justify-content-center">
                <div class="row p-5">
                    <h1>Testmonials</h1>
                    <Carousel>
                        {reviewItems.map((item) => (

                            <Carousel.Item interval={1000}>

                                <div class="p-3 mb-5 bg-white rounded" key={item._id} >
                                    <div class="card-body">
                                        <p>{item.review}</p>
                                        <h3>{item.name}</h3>
                                        <h5>{item.role}</h5>
                                    </div>
                                </div>
                            </Carousel.Item>

                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default Review;