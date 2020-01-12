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
  //want to save data for props if needed but should save on backend for more security
    axios.post("/api/users", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    })
    // console.log(this.state);
    .then((response) => {
      console.log("xxxxxx", response)
      //call the function passed by the parent (not yet created) to take a local copy of the user
      this.props.handleNewUser(response.data)
      console.log(".......", this.state)
    })
    .catch(err => (console.log(err)))
  }

//---------------------------------------------------------------------------------

    render(){
        return(
            <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <label>Confirm Email</label>
              <input placeholder='Confirm Email' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input placeholder='Confirm Password' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button onClick={this.onSubmit} type='submit'>Submit</Button>
          </Form>
        )
    }
}