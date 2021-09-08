import React from 'react';
import PropTypes from 'prop-types';
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import wp from "./images/whatsapp.png";
class AboutUs extends React.Component {
    

    render() {
        return (
       <div class="Us">   
            <div class="bg-dark">
            <div class="container py-5">
                <div class="row align-items-center py-6">
                <div class="col-lg-6">
                    <h1 class="display-4">About us </h1>
                    <p class="lead text-muted mb-0">Speed Car Wash is a brand which is literally going to change the way people think about car cleaning. It is a unique mechanized car cleaning concept where cars are getting pampered by the latest equipments including high pressure cleaning machines, spray injection and extraction machines, high powered vacuum cleaners, steam cleaners and so on.</p>
                   
                </div>
                <div class="col-lg-6 d-none d-lg-block">
                    </div>
                </div>
            </div>
            </div>

            <div class="bg-white py-5">
            <div class="container py-5">
                <div class="row align-items-center mb-5">
                <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                    <h2 class="font-weight-dark">PROFESSIONAL CAR WASHER</h2>
                    <p class="font-italic text-muted mb-4">We offer PROFESSIONAL CAR WASH and Car Servicing  at a most AFFORDABLE PRICES
                    Biodegradable and eco-friendly Products and Techniques, with world's best Castrol oil as our Partner</p>
                </div>
                <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"></div>
                </div>
                <div class="row align-items-center">
                <div class="col-lg-5 px-5 mx-auto">
                    </div>
                <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                    <h2 class="font-weight-dark">AT YOUR DOOR SERVICE</h2>
                    <p class="font-italic text-muted mb-4">We are very EASY TO REACH company, You can Call Us, Book Us on Website or Download our Mobile Application, E-Mail Us or Message us through any Messenger.</p>
                </div>
                </div>
            </div>
            </div>

            <div class="bg-dark py-5">
            <div class="container py-5">
                <div class="row mb-4">
                <div class="col-lg-5">
                    <h2 class="display-4 font-weight-dark">Our team</h2>
                    <p class="font-italic text-muted">LOVE YOUR CAR, WE MAKE IT MORE ADORABLE.</p>
                </div>
                </div>

                <div class="row text-center">
                    
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                    <h5 class="mb-0">Snehal Miraje</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                    
                    </div>
                </div>
                
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                    <h5 class="mb-0">Sachin Miraje</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                     
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                    <h5 class="mb-0">Sanjeevini Dodwad</h5><span class="small text-uppercase text-muted">Manager</span>
                     
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                    <h5 class="mb-0">Mandar Dodwad</h5><span class="small text-uppercase text-muted">Manager</span>
                     
                    </div>
                </div>
                <ul class="link-list">
                        <li class="list-inline-item"><img src={facebook} class="social-link"></img></li>
                        <li class="list-inline-item"><img  src={twitter}class="social-link"></img></li>
                        <li class="list-inline-item"><img  src={instagram} class="social-link"></img></li>
                        <li class="list-inline-item"><img src={wp} class="social-link"></img></li>
                </ul>
                </div>
                
            </div>
           
            </div>  
</div>
        );
    }
}

export default AboutUs;
