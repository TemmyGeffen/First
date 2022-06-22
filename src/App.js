import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import {NewSecrenceMeeting} from "./components/pages/NewSecrenceMeeting"
import Products from "./components/pages/Products"
import SignUp from "./components/pages/SignUp"
import AddAppontmentCalender from './components/pages/AddAppontmentCalender'
import { MeetingHistory } from './components/Meetings/MeetingHistory';
import { AllUsers } from './components/Secretary/Allusers';
import { Status } from './status/status';
import { MeetingCalander } from './components/Secretary/CalanderForAllMeet';
import { PageForThisDay } from './components/Secretary/PageForThisDay';
import { Users } from './components/Secretary/Users';
import { AllEmployee } from './components/Secretary/AllEmployee';
import { TypeTretmentForEmployee } from './components/Employee/TypeTretmentForEmployee';
import { EmployeeSchlagle } from './components/Employee/EmployeeSchlagle';
import { AddSecrens } from './components/Maneger/AddSecrens';

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home} />
          <Route path='/services' component= {Services} />
          <Route path='/products' component= {Products} />
          <Route path='/sign-up' component= {SignUp} />     
          <Route path='/AddAppontmentCalender' component= {AddAppontmentCalender} /> 
          <Route path='/NewSecrenceMeeting' component= {NewSecrenceMeeting} /> 
          <Route path='/MeetingHistory' component= {MeetingHistory} /> 
          <Route path='/AllUsers' component= {AllUsers} /> 
          <Route path='/status' component={Status} />
          <Route path='/PageForThisDay' component={PageForThisDay}/>
          <Route path='/Users' component={Users}/>
          <Route path='/AllEmployee' component={AllEmployee}/>
          <Route path= '/TypeTretmentForEmployee'component={TypeTretmentForEmployee} />
          <Route path= '/EmployeeSchlagle'component={EmployeeSchlagle} />
          <Route path= '/AddSecrens'component={AddSecrens} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
