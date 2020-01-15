import React, { Component } from 'react';
import './App.css';
import { Menu } from "semantic-ui-react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {connect} from "react-redux";

import {deletedListingHandler, listingHandler} from "./actions/listingAction"
import HomeView from "./components/HomeView"
import LoginView from "./components/LoginView"
import CreateUserView from "./components/CreateUserView"
import Listing from './components/Listing'
import NewProductForm from './components/NewProductForm'

 class App extends Component {
  state = {
    loggedIn: false,
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({activeItem: name})
    if (document.cookie.includes("jwt=")){
      this.setState({loggedIn: true})
    }
  }

  componentDidMount = () => {
    if (document.cookie.includes("jwt=")){
      this.setState({loggedIn: true})
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
              name='dashboard'
              active={activeItem === 'Dashboard'}
              onClick={this.handleItemClick}
              float="right"
            >
            </Menu.Item>
            </div>

            <Menu.Item
              as={Link} to='/products'
              name='New product'
              active={activeItem === 'Products'}
              onClick={this.handleItemClick}
            >
            </Menu.Item>

            <Menu.Item
              as={Link} to='/users/:id'
              name='My Profile'
              active={activeItem === 'Profile'}
              onClick={this.handleItemClick}
            >
            </Menu.Item>

            <Menu.Item
//            as={Link} to='/login' 
              as={Link} to={this.state.loggedIn ? "/auth/logout" : "/login" }
              name={this.state.loggedIn ? "Logout" : "Login"}
              active={activeItem === this.state.loggedIn}
              onClick={this.handleItemClick}
            > 
              {/* {this.state.loggedIn ? "Logout" : <Link to="/login">Login</Link>} */}

            </Menu.Item>
          </Menu>
         
          <Route exact path="/dashboard" component={Listing} />
          <Route exact path="/products" component={NewProductForm} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/users/new" component={CreateUserView} />
          <Route exact path="/" component={HomeView} />
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