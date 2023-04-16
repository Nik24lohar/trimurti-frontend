import { React, useState, useEffect } from 'react';
import axios from "axios"
import "./category.css"

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
            <div className="container categoryCard justify-content-center">
                <div class="row gx-5 gy-5">
                    <h1 className='display-4 pb-5 text-danger mb-5 fw-bold'>Categories</h1>
                    {categories.map((item) => (                       
                        <div class="col-md-4">
                            <div className="card border-0 text-center shadow p-3 bg-white rounded">
                            <img className="card-img-top categoryImg" src={item.img} alt="" />
                                <div className="card-block">
                                    <h4 className="card-title">{item.name}</h4>                                                                                                         
                                </div>
                            </div>
                        
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}
export default Category;