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
                        <div class="col-sm-3">
                            <div className="card border-0 text-center shadow p-3 bg-white rounded">
                            <img className="card-img-top p-1 w-80 h-80" src={item.img} alt="" />
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