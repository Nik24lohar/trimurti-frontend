import React, { useState, useEffect } from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

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
        <div className='p-5'> 
            <div>
                <div>
                    <h1 className='display-4 p-5 text-danger mb-5 fw-bold'>Testmonials</h1>
                    <div className='p-5'>

                    <Carousel>
                        {reviewItems.map((item) => (

                            <Carousel.Item interval={1000}>

                                <div class="p-3 mb-5 homeBody rounded" key={item._id} >
                                    <div class="card-body">
                                        <h5 className='text-secondary'>{item.role}</h5>
                                        <h3 className="text-info display-3">{item.name}</h3>
                                        <p className='fw-bold h1'>{item.review}</p>
                                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/>
                                    </div>
                                </div>
                            </Carousel.Item>

                        ))}
                    </Carousel>
                    </div>   
                </div>
            </div>

            <div className="container justify-content-center p-5 shadow-lg p-3 mb-5 bg-white rounded">
                <form className="section  justify-content-center">
                    <h1 className='display-4 pb-5 text-danger mb-5 fw-bold'>Submit a Review</h1>
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