import React, { Component } from "react";
import Home from "./Home";
import logo from "./images/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Login extends Component {
    constructor(){
        super();
      
        this.state={
            email:null,
            password:null,
            isLoggedIn:false,
            token:null,
        }
        }
        
    login(e)
     {
        e.preventDefault();
          fetch('http://localhost:9090/customer/authenticate', {
            
             method:'POST',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json',
                 'Access-Control-Allow-Origin':'*',
                 'Access-Control-Allow-Credentials':true,
                 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                
             },
             body:JSON.stringify(this.state)
         })
         .then(res=>res.json())
         .then(result=>{
             console.log("result",result);
           localStorage.setItem('login',JSON.stringify({
               isLoggedIn:true,
               token:result.token
           }))
             this.setState({
                 isLoggedIn:true,
             })
         })
        
     }

    

    
  
    
    render() {
        return (
            <><nav className="navbar navbar-expand-lg fixed-top">
            
                        <ul className="navbar-nav">
                        <li className="nav-item">
                        <img src={logo} class="navbar-brand" alt=""></img>
                            </li>
                            <li className="nav-item hv">
                                <Link className="nav-link" to={"/sign-in"}>Login</Link>
                            </li>
                            <li className="nav-item hv">
                                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                            </li>
                            <li className="nav-item">
                            <img src="https://autoparkingpatras.gr/wp-content/uploads/2017/07/car_wash1.gif" className="anime-img"/>
                            </li>
                            
                        </ul>
                    
          
            </nav>
            <div className="auth-wrapper">-
                    <div className="auth-inner">
                        <div>
                            {!this.state.isLoggedIn ?

                                <form>
                                    <h3>Sign In</h3>

                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => { this.setState({ email: event.target.value }); } }/>
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => { this.setState({ password: event.target.value }); } } />
                                    </div>

                                   
                                    
                                    <button type="submit" className="btn btn-primary btn-block buttonspace" onClick={(e) => { this.login(e); } }>Submit</button>
                                </form>
                                :
                                <div className="welcome">
                                    Welcome! <p className="name"> {this.state.email} </p>You have successfully logged in.
                                    <Link className="btn btn-primary btn-block" to={"/home"}>ok</Link>
                                </div>}
                        </div>
                    </div>
                </div></>
           
        );
    }
}
/*
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/home" component={Home} />
          </Switch>*/ 