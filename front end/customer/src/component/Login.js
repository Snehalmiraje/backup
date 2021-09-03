import React, { Component } from "react";
import Home from "./Home";
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
         e.preventDefault();
     }

    

    
  
    
    render() {
        return (
            <><nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/sign-in"}></Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                                <h1 className="logowash"></h1>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-in"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="auth-wrapper">-
                    <div className="auth-inner">
                        <div>
                            {!this.state.isLoggedIn ?

                                <form>
                                    <h3>Sign In</h3>

                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => { this.setState({ email: event.target.value }); } } />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => { this.setState({ password: event.target.value }); } } />
                                    </div>

                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block" onClick={(e) => { this.login(e); } }>Submit</button>
                                </form>
                                :
                                <div>
                                    Welcome {this.state.email} you have successfully logged in.
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