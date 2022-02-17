import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';

import Header from './components/header/header';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp';
import Checkout from './pages/checkOut/checkOut';




import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';





class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
  return (
        <div className="App">
       <Header  />
      <Switch>
        <Route to exact path='/' component={Home} />
        <Route to path='/shop' component={Shop} />
        <Route  to path='/checkout' component={Checkout} />
        <Route to
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
       
      </Switch>
    </div>
    );
  }
}


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
