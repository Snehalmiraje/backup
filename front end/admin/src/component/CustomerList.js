import React, { Component } from 'react'
import Customerservice from '../Services/Customerservice'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Customerlist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers:[]
                 
        }
        
        this.deletecustomer=this.deletecustomer.bind(this);
        
    }
    componentDidMount(){
        Customerservice.getCustomers().then((res)=>{
            this.setState({customers:res.data})
        });
    }
    
   
    deletecustomer(email){
        Customerservice.deleteCustomer(email).then(res=>{
            this.setState({customers:this.state.customers.filter(customer=>customer.email!==email)})
        })

    }
           

    render() {
        return (
            <>
            <h2 className="text-center">Customers List</h2>
            <div className="row">

            
                
            </div>
                <div className="row">
                <table className="table table-striped table bordered">
                    <thead>
                        <tr>
                            <th> Customer Name </th>
                            <th> Customer email </th>
                            <th> Customer Contact </th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.customers.map(
                            customer =>
                            <tr key={customer.email}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.contact}</td>
                                <td>
                                    <button onClick={()=>this.deletecustomer(customer.email)} className="btn btn-danger btn-block">DELETE</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>  
            </>
        )
    }
}
