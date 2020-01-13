import React, { Component } from 'react';
import '../App.css';
import { Menu } from "semantic-ui-react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import DashboardView from "./DashboardView"
import HomeView from "./HomeView"
import LoginView from "./LoginView"
import CreateUserView from "./CreateUserView"
import CreateListingView from "./CreateListingView"
import ProductsView from "./ProductsView"

export default class App extends Component {
  state = {
    loggedIn: false,
  }

  handleItemClick = (e, { name }) => {
    this.setState({activeItem: name})
    if (name === "Login" || name === "Logout"){
      this.setState({loggedIn: !this.state.loggedIn})
    }
  }

  handleNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
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
              {this.state.loggedIn ? "Logout" : <Link to="/login" handleNewUser={this.handleNewUser}>Login</Link>}
            </Menu.Item>
          </Menu>
          <Route exact path="/dashboard" component={DashboardView} />
          <Route exact path="/products" component={ProductsView} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/users/new" component={CreateUserView} />
          <Route exact path="/listings" component={CreateListingView} />
          <Route exact path="/" component={HomeView} />
        </BrowserRouter>
       
      </div>
    )
  }
}
