import React, { Component } from 'react';
import './App.css';
import { Menu } from "semantic-ui-react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {connect} from "react-redux";

import {deletedListingHandler, listingHandler} from "./actions/listingAction"

import LoginView from "./components/LoginView"
import LoginSwitch from "./components/LoginSwitch"
import ProfileView from "./components/MyProfileView"
import DashboardView from './components/DashboardView'
import SellerProfile from './components/SellerProfile'
import NewProductForm from './components/NewProductForm'
import CreateUserView from './components/CreateUserView'

 export class App extends Component {
  state = {
    loggedIn: false,
    activeItem: 'Dashboard',
    userid: {}
  }

  setLoggedIn = (e, { name }) => {
    this.setState({activeItem: name})
    document.cookie.includes("jwt=") ? this.setState({loggedIn: true}) : this.setState({loggedIn: false})
    }
  

  componentDidMount(){
    if (document.cookie.includes("jwt=")){
      this.setState({loggedIn: false, activeItem: "Login"});
    }
    this.setState({
      userid: this.props.user._id
    })
    console.log(this.state.userid, '')


  }


  render(){
    // Destructure activeItem and login status from state
    const { activeItem } = this.state
    console.log(this.props.user, '-=-=-=-=-=-=-=-=-=-=-')

    return (
      <div className="App" data-test="component-app">
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
              setLoggedIn={this.setLoggedIn}/>
          </Menu>

          <Route exact path="/dashboard" component={DashboardView} />
          <Route exact path="/products" component={NewProductForm} />
          <Route exact path="/seller" component={SellerProfile} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/users" component={ProfileView} />
          <Route exact path="/" component={DashboardView} />
          <Route exact path="/users/new" component={CreateUserView} />
        </BrowserRouter>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings,
  user: state.user
})
const mapDispatchToProps = (dispatch) => ({
  listingHandler: listings => dispatch(listingHandler(listings)),
  deletedListingHandler: id => dispatch(deletedListingHandler(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)