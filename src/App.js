import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/Header';
import SignInSignOut from './pages/signInSignOut/SignInSignOut';
import { auth } from './firebase/firebaseUtils';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}
export default App;
