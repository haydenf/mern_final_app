import React, {Component} from "react"
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from "axios";

export default class CreateUserView extends Component {
  constructor(props){
    super(props)
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        error: ""
    }
  }

  //---------------------------------------------------------------------------------
  onSubmit = e => {
    e.preventDefault();
    console.log("You hit submit", e);

    // this.setState = e;
  //want to save data for props if needed but should save on backend for more security
  
  axios.post("/api/users", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      if(response.data.success){
        this.props.history.push('/')
      }
    })
  }

  logChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
    
    
  handleSubmit = e => {
     e.preventDefault();
     console.log("form submitted successfully");
  };

//---------------------------------------------------------------------------------

    render(){
        return(
            <Form>
            <Form.Input
              placeholder="First Name"
              allowClear
              name="firstName"
              value={this.state.firstName}
              onChange={this.logChange}
            />
            <Form.Input
              placeholder="Last Name"
              allowClear
              name="lastName"
              value={this.state.lastName}
              onChange={this.logChange}
            />
            <Form.Input
              placeholder="Email"
              allowClear
              name="email"
              value={this.state.email}
              onChange={this.logChange}
            />
            <Form.Input
              placeholder="Confirm Email"
              allowClear
              name="confirmEmail"
//               value={this.state.confirmEmail}
//               onChange={this.logChange}
            />
            <Form.Input
              placeholder="Password"
              allowClear
              name="password"
              value={this.state.password}
              onChange={this.logChange}
              type="password"
            />
            <Form.Input
              placeholder="Confirm Password"
              allowClear
              name="confirmPassword"
              type="password"
//               value={this.state.password}
//               onChange={this.logChange}
            />
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button onClick={this.onSubmit} type='submit'>Submit</Button>
          </Form>
        )
    }
}