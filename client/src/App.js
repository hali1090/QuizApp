import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import Quiz from './components/quiz/Quiz';
import TrueFalse from './components/quiz/TrueFalse';
import QuizSelect from './components/quiz/QuizSelect';
import Feedback from './components/feedback/feedback';
import Results from './components/feedback/results';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import PrivateRoute from './components/routing/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import feedback from './components/feedback/feedback';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profile/:id' component={Profile} />
              <Route exact path='/quiz' component={Quiz}/>
              <Route exact path='/quizselect' component={QuizSelect}/>
              <Route exact path='/truefalse' component={TrueFalse}/>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/feedback' component={Feedback} />
              <PrivateRoute exact path='/results' component={Results}/>
              
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute exact path='/profiles' component={Profiles} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
