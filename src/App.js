 
import './App.css';
import SignIn from './login signup/signin';
import SignUp from './login signup/signup';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Records from './component/Records';
import EditRecord from './component/EditRecord';
function App() {
  return (
    <div className="App">
      <Router className="App">
  
      <Switch>
        <Route exact path="/records" component={Records} />
      <Route exact path="/" component={SignUp}/>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/edit-record" component={EditRecord} />
      
    </Switch>
     
    </Router>
    </div>
  );
}

export default App;
