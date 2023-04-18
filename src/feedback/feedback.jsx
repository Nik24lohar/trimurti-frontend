import React, { useState } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../sliding/footer'
import { useNavigate } from 'react-router-dom';
import Review from '../Review/review';
function Feedback() {

    return (
        <div>
            <Navbar />
            <Review/>
            <Footer />

        </div>
    )
}

export default Feedback;