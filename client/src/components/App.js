import React, { Component } from 'react';
import '../App.css';
import { Menu } from "semantic-ui-react";
import HomeView from "./HomeView"
import LoginView from "./LoginView"

export default class App extends Component {
  state = {
    loggedIn: false,
    location: "home"
  }

  getView = () => {
    const { location } = this.state;
    switch(location){
      case "home":
        return <HomeView />
      case "Login":
        return <LoginView />
      default:
        return null;
    }
  }

  changeLocation = (location) => {
    this.setState({ location });
  }

  handleItemClick = (e, { name }) => {
    this.setState({activeItem: name})
    this.changeLocation(name)
    if (name === "Login" || name === "Logout"){
      this.setState({loggedIn: !this.state.loggedIn})
    }
  }

  render(){
    // Destructure activeItem and login status from state
    const { activeItem } = this.state

    return (
      <div className="App">
          <Menu color="grey" inverted>
            <Menu.Item
              name='dashboard'
              active={activeItem === 'Dashboard'}
              onClick={this.handleItemClick}
              float="right"
            >
              Dashboard
            </Menu.Item>

            <Menu.Item
              name='products'
              active={activeItem === 'Products'}
              onClick={this.handleItemClick}
            >
              Products
            </Menu.Item>

            <Menu.Item
              name={this.state.loggedIn ? "Login" : "Logout"}
              active={activeItem === this.state.loggedIn ? "Login" : "Logout"}
              onClick={this.handleItemClick}
            > 
              {this.state.loggedIn ? "Login" : "Logout"}
            </Menu.Item>
          </Menu>
          {this.getView()}
      </div>
    )
  }
}
