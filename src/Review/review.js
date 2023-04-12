import React, { useState, useEffect } from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

function Review() {
    const [reviewItems, setReviewItems] = useState([]);
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [review, setRev] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleRole = (e) => {
        setRole(e.target.value)
    }
    const handleReview = (e) => {
        setRev(e.target.value)
    }

    const submitReview = (e) => {
        e.preventDefault()
        console.log(name, role, review)
        axios.post("https://ecom-backend-opal.vercel.app/api/reviews/add", {
            name: name,
            role: role,
            review: review

        }).then(result => {
            console.log(result)
            alert("review has been added");
            window.location.reload(false);
        }).catch(err => console.log(err))
    }

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

            <div className="container justify-content-center">
                <form className="section justify-content-center">
                    <h1>Submit a Review</h1>
                    <div class="form-group">
                        <input type="text" onChange={handleName} value={name} class="form-control w-100 mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                    </div>
                    <div class="form-group mt-3">
                        <input onChange={handleRole} type="text" value={role} class="form-control w-100 mt-2 " id="exampleInputPassword1" placeholder="Enter Role" />
                    </div>
                    <div class="form-group mt-3">
                        <textarea rows={4} onChange={handleReview} type="text" value={review} class="form-control w-100 mt-2 " id="exampleInputPassword1" placeholder="Enter Review" />
                    </div>
                    <div className="w-100 mt-2">
                        <button onClick={submitReview} type="submit" class="btn  btn-primary mt-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Review;