import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import img1 from "./images/car-seat2.png";
import img2 from "./images/car-wash.png";
import img3 from "./images/car-wash3.png";
class Services extends React.Component {
   

    render() {
        return (
            <div>
            
                <div class="conatainer">
                    <h1>Our Services</h1>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card">
                                     <img src={img1} class="imgw" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Impressive Interior</h5>
                                        <p class="card-text">Internal cleaning with dry steam and suction vacuuming using our special car cleaning accessories.</p>
                                        </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card">
                                    <img src={img2}class="imgw" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Ready To Shine</h5>
                                        <p class="card-text">External cleaning with Wet steam and also High Pressure wash using our special car cleaning accessories.</p> 
                                        </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card">
                                <img src={img3} class="imgw" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Detailing Glow</h5>
                                   <p class="card-text">
                                   Rubbing is a process that results in the removal of stains and marks on the paint surface of the car gives your car a smooth look.
                                   </p>
                                    </div>
                            </div>


                            
                        </div>
                    </div>

                </div>   
            </div>
        );
    }
}


export default Services;

