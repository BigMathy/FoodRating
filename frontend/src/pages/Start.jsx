import React from 'react';
import '../css/Start.css';
import { WiStars } from "react-icons/wi";
import { Link, useNavigate } from "react-router-dom";

function Start() {
    return (
        <div className="page-container">
            {/* Section 1 */}
            <section className="start-section">
                {/* Floating background */}
                <div className="floating-bg">
                    <span className="float-item starFloat">*</span>
                    <span className="float-item keyword">yum!</span>
                    <span className="float-item keyword">mmmmmh</span>
                    <span className="float-item circle pink"></span>
                    <span className="float-item circle blue"></span>
                    <span className="float-item circle light-blue"></span>
                    <span className="float-item circle yellow"></span>
                </div>

                {/* Main centered logo */}
                <div className='logo'>
                    <div className='food-diary'>
                        <p><WiStars /> Your food diary, but fun</p>
                    </div>
                    <h1 className='rate'>rate</h1>
                    <h1 className='discover'>discover</h1>
                    <h1 className='remember'>remember</h1>
                    <p className='sub-text'>Keep track of all the amazing (and not so amazing) places you've eaten.</p>
                    <p className='sub-text-two'>Because life's too short for bad food</p>

                    <div className='call-to-action'>
                        <Link className="cta" to="/rating">{"Start rating stuff ->"}</Link>
                    </div>
                </div>

            </section>

            {/* Section 2 (example info section) */}
            <section className="info-section">
                <h2>More about our app</h2>
                <p>Here’s where you can explain features, show screenshots, etc.</p>
            </section>
        </div>
    );
}

export default Start;
