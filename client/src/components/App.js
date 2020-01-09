import React, { Component } from 'react';
import '../App.css';
import { Menu } from "semantic-ui-react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {connect} from "react-redux";

import {deletedListingHandler, listingHandler} from "../actions/listingAction"

import DashboardView from "./DashboardView"
import HomeView from "./HomeView"
import LoginView from "./LoginView"
import CreateUserView from "./CreateUserView"
import CreateListingView from "./CreateListingView"
import ProductsView from "./ProductsView"
import Listing from './Listing'
import Form from './Form'

 class App extends Component {
  state = {
    loggedIn: false,
  }

  handleItemClick = (e, { name }) => {
    this.setState({activeItem: name})
    if (name === "Login" || name === "Logout"){
      this.setState({loggedIn: !this.state.loggedIn})
    }
  }

  render(){
    // Destructure activeItem and login status from state
    const { activeItem } = this.state

    return (
      <div className="App">
        <BrowserRouter>
          <Menu color="grey" inverted>
            <Menu.Item
              name='dashboard'
              active={activeItem === 'Dashboard'}
              onClick={this.handleItemClick}
              float="right"
            >
            <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>

            <Menu.Item
              name='products'
              active={activeItem === 'Products'}
              onClick={this.handleItemClick}
            >
              <Link to="/products">Products</Link>
            </Menu.Item>

            <Menu.Item
              name={this.state.loggedIn ? "Login" : "Logout"}
              active={activeItem === this.state.loggedIn ? "Login" : "Logout"}
              onClick={this.handleItemClick}
            > 
              {this.state.loggedIn ? <Link to="/login">Login</Link> : "Logout"}
            </Menu.Item>
          </Menu>
         
          <Route exact path="/dashboard" component={DashboardView, Listing} />
          <Route exact path="/products" component={ProductsView, Form} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/users/new" component={CreateUserView} />
          <Route exact path="/listings" component={CreateListingView} />
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

