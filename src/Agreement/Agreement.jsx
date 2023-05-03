import React from 'react';
import Navbar from '../navbar/navbar';

const Agreement = () => {
    return (
        <div>
            <Navbar/>
            <div className="container p-5">
                <div className="title text-center  text-secondary h1 card shadow-lg p-3 mb-5 bg-primary rounded">
                <h1 className='p-5 bg-warning'>
                Trade Agreements
                </h1>
                </div>
                <div className='p-5 shadow-lg p-3 mb-5 bg-white rounded'>
                    <ol className='fw-bold h3'>
                        <li>Login Authority will be provided by Admin</li>
                        <li>upload </li>
                    </ol>
                </div>

            </div>
        </div>
    );
}

export default Agreement;

