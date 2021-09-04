
import React, { Component } from 'react'


class AddWasher extends Component {
    constructor() {
        super();
        this.state = {
            name:null,
            email:null,
            contact:null

        };
    }
    save(e){
      
        fetch("http://localhost:9091/admin/createWasher"
        ,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name:this.state.name,
                    email:this.state.email,
                    contact:this.state.contact
                    })
        }
        )
        .then(res => res.json())
       .catch(error => console.error('Error:', error))
       this.setState({
           name:null,
           email:null,
           contact:null
       })

       
    }
    

    render() {
        return (
           
                <div className="auth-inner">
            <div className="container">
                     <form>
                <h3>Add Washer</h3>

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

                
                <button type="submit"  className="btn btn-primary btn-block" onClick={(e)=>this.save(e)}>Save</button>
              
              </form>
            </div>
            </div>
        );
    }
}



export default AddWasher;
