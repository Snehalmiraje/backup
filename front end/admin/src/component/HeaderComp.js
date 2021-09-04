import React from 'react';
import PropTypes from 'prop-types';

class HeaderComp extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="header">
                <h1>Admin Panel</h1>
            </div>
        );
    }
}



export default HeaderComp;
