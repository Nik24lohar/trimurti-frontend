import { React, useState, useEffect } from 'react';
import axios from "axios"

function Category() {
    const [categories, setCategories] = useState([]);

    
    useEffect(() => {
        axios
        .get("https://ecom-backend-opal.vercel.app/api/category")
        .then((response) => {
            setCategories(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <div>
            <div className="container justify-content-center">
                <div class="row p-5">
                    <h1>Categories</h1>
                    {categories.map((item) => (
                        <div class="card border-0 w-25 m-5 text-center col-md-4 shadow p-3 mb-5 bg-white rounded" key={item._id} >
                            <img class="card-img-top p-1 w-80 h-80" src={item.img} alt="Category Image" />
                            <div class="card-body">
                                <h3>{item.name}</h3>                                                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Category;