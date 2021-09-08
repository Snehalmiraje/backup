import React, { Component } from 'react'
import Customerservice from '../Services/Customerservice'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Washerservice from '../Services/Washerservice';
import  { Redirect } from 'react-router-dom'


export default class WasherList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Washers:[],
            
        }
      
        this.deletewasher=this.deletewasher.bind(this);
        
    }
    componentDidMount(){
       Washerservice.getWashers().then(res=>{
           this.setState({Washers:res.data})
       }
       )

    }
    
   
    deletewasher(email){
        Washerservice.deletewasher(email).then(res=>{
            this.setState({Washers:this.state.Washers.filter(washer=>washer.email!==email)})
        })

    }
    

           

    render() {

        return (
            <div>
            <h2 className="text-center">Car Washers List</h2>
            <div className="row">

          
            </div>
                <div className="row">
                <table className="table table-striped table bordered">
                    <thead>
                        <tr>
                            <th> Washer Name </th>
                            <th> Washer email </th>
                            <th> Washer Contact </th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.Washers.map(
                            washer =>
                            <tr key={washer.email}>
                                <td>{washer.name}</td>
                                <td>{washer.email}</td>
                                <td>{washer.contact}</td>
                                <td>
                                    <button onClick={()=>this.deletewasher(washer.email)} className="btn btn-danger btn-block">DELETE</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>  
            <Link className="btn btn-primary btn-block" to={"/addWasher"}>ADD</Link>
            </div>
        );
    }
}
