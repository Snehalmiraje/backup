import React from 'react';
import PropTypes from 'prop-types';

class AboutUs extends React.Component {
    

    render() {
        return (
            <section class="text-center about">
            <h1>About US</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 about-item wow lightSpeedIn" data-wow-offset="200" >
                            <span class="fa fa-group"></span>
                            <h2>Section 1</h2>
                            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        </div>
                        <div class="col-lg-6 about-item wow lightSpeedIn" data-wow-offset="200">
                            <span class="fa fa-info"></span>
                            <h2>Section 2 </h2>
                            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                        </div>
                        
                        
                    </div>
                    
                </div>
    </section>
        );
    }
}



export default AboutUs;
