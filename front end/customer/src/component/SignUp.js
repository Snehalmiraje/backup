import React, { Component } from "react";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class SignUp extends Component {
    constructor() {
        super()
    
        this.state = {
            name: null,
            contact: null,
            email: null,
            password: null, 
            isSignUp: false 
        }
    
     
    }
    register(e){
       e.preventDefault();
        
        fetch('http://localhost:9090/customer/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                contact: this.state.contact,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        
        .catch(err => console.log(err));
       this.setState({
           name: null,
           contact: null,
           email: null,
           password: null,
           isSignUp: true
       })
    }
       
      
    
    
    


    render() {
        return (
            <><nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-in"}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav><div className="auth-wrapper">
                <div className="auth-inner">
                <div>
                {
                    !this.state.isSignUp ?
                    <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" onChange={(event)=>{this.setState({name:event.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" className="form-control" placeholder="Enter contact" onChange={(event)=>{this.setState({contact:event.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event)=>{this.setState({email:event.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event)=>{this.setState({password:event.target.value})}}/>
                </div>

                <button type="submit"  className="btn btn-primary btn-block" onClick={(e)=>this.register(e)}>Sign Up</button>
              
              </form>
              :
              <Login/>

                }
            </div>
                </div>
            </div></>
           
            
            
        );
    }
}
/* <div>
                {
                    !this.state.isSignUp ?
                    <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" onChange={(event)=>{this.setState({name:event.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" className="form-control" placeholder="Enter contact" onChange={(event)=>{this.setState({contact:event.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event)=>{this.setState({email:event.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event)=>{this.setState({password:event.target.value})}}/>
                </div>

                <button type="submit"  className="btn btn-primary btn-block" onClick={(e)=>this.register(e)}>Sign Up</button>
              
              </form>
              :
              <Login/>

                }
            </div> */