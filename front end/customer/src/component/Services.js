import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import img1 from "./images/car-seat2.png";
import img2 from "./images/car-wash.png";
import img3 from "./images/car-wash3.png";
import i1 from "./images/1.png";
import i2 from "./images/2.png";
import i3 from "./images/3.png";
import i4 from "./images/4.png";
class Services extends React.Component {
   

    render() {
        return (
            <div>
            
                <div class="conatainer bg-dark py-5">
                    <h1 className="display-3 bg-light">Our Services</h1>
                    <div class="row h-100 align-items-center py-5">
                        <div class="col-lg-4">
                            <div class="card bg-transparent text-white">
                                     <img src={img1} class="imgw" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="display-6">Impressive Interior</h5>
                                        <p class="display-7">Internal cleaning with dry steam and suction vacuuming using our special car cleaning accessories.</p>
                                        </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card bg-transparent text-white">
                                    <img src={img2}class="imgw" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="display-6">Ready To Shine</h5>
                                        <p class="display-7">External cleaning with Wet steam and also High Pressure wash using our special car cleaning accessories.</p> 
                                        </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card bg-transparent text-white">
                                <img src={img3} class="imgw" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="display-6">Detailing Glow</h5>
                                   <p class="display-7">
                                   Rubbing is a process that results in the removal of stains and marks on the paint surface of the car gives your car a smooth look.
                                   </p>
                                    </div>
                            </div>      
                        </div>
                    </div>

                </div>   
                <h1 className="bg-light display-3">Washing services</h1>
                <div className="bg-dark">
      <div class="our_solution_category">

        <div class="solution_cards_box">
          
          <div class="solution_card">
              <div class="so_top_icon">
              <img src={i1}></img>
              </div>
              <div class="solu_title">
                <h3>Exterior Washing</h3>
              </div>
              <div class="solu_description">
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
             
            </div>
          </div>
          <div class="solution_card">
            
            <div class="so_top_icon">
            <img src={i3}></img>
            </div>
            <div class="solu_title">
              <h3> Interior Washing</h3>
            </div>
            <div class="solu_description">
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
             
            </div>
          </div>
        </div>
       
        <div class="solution_cards_box sol_card_top_3">
          <div class="solution_card">
            
            <div class="so_top_icon">
            <img src={i2}></img>
            </div>
            <div class="solu_title">
              <h3>Vacuum Cleaning</h3>
            </div>
            <div class="solu_description">
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              
            </div>
          </div>
          <div class="solution_card">
            <div class="so_top_icon">
            <img src={i4}></img>
            </div>
            <div class="solu_title">
              <h3>Wet Cleaning</h3>
            </div>
            <div class="solu_description">
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
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

