import React, { Component } from 'react';
import './App.css';
import { Menu } from "semantic-ui-react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {connect} from "react-redux";

import {deletedListingHandler, listingHandler} from "./actions/listingAction"

import LoginView from "./components/LoginView"
import LoginSwitch from "./components/LoginSwitch"
import ProfileView from "./components/ProfileView"
import Listing from './components/Listing'
import NewProductForm from './components/NewProductForm'

 class App extends Component {
  state = {
    loggedIn: false,
    activeItem: 'Dashboard'
  }

  setLoggedIn = (e, { name }) => {
    this.setState({activeItem: name})
    document.cookie.includes("jwt=") ? this.setState({loggedIn: true}) : this.setState({loggedIn: false})
  }

  logout = () => {
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.setState({loggedIn: false, activeItem: "Login"});
    console.log("LOGOUT")
  }

  componentDidMount(){
    if (document.cookie.includes("jwt=")){
      this.setState({loggedIn: false, activeItem: "Login"});
    }
  }

  render(){
    // Destructure activeItem and login status from state
    const { activeItem } = this.state

    return (
      <div className="App">
        <BrowserRouter>
        
          <Menu className="nav" inverted>
            <div>
            <Menu.Item
              as={Link} to='/dashboard' 
              name='Dashboard'
              active={activeItem === 'Dashboard'}
              onClick={this.setLoggedIn}
              float="right"
            >
            </Menu.Item>
            </div>

            <Menu.Item
              as={Link} to='/products'
              name='New product'
              active={activeItem === 'Products'}
              onClick={this.setLoggedIn}
            >
            </Menu.Item>

            <Menu.Item
              as={Link} to='/users'
              name='My Profile'
              active={activeItem === 'Profile'}
              onClick={this.setLoggedIn}
            >
            </Menu.Item>

            <LoginSwitch 
              loggedIn={this.state.loggedIn} 
              logout={this.logout} 
              setLoggedIn={this.setLoggedIn}/>
          </Menu>

          <Route exact path="/dashboard" component={Listing} />
          <Route exact path="/products" component={NewProductForm} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/users" component={ProfileView} />
          <Route exact path="/" component={Listing} />
        </BrowserRouter>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings
})
const mapDispatchToProps = (dispatch) => ({
  listingHandler: listings => dispatch(listingHandler(listings)),
  deletedListingHandler: id => dispatch(deletedListingHandler(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)