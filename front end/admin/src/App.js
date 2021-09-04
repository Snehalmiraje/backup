
import './App.css';
import Customerlist from './component/CustomerList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HeaderComp from './component/HeaderComp';
import AddWasher from './component/AddWasher';
import WasherList from './component/WasherList';
function App() {
  return (
    <div>
  <Router>
  
     <HeaderComp/>
        <div className="container">
            <Switch>
                    <Route path="/" exact component={Customerlist}></Route>
                    <Route path="/customers"  component={Customerlist}>  </Route>
                    <Route path="/addwasher" component={AddWasher}></Route>
                   
                  
            </Switch>
        </div>
        <hr/>
        <div className="container">
             <WasherList/>
         </div>
    </Router>
   
  </div>
  );
}

export default App;
