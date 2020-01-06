import React, {Component} from "react"
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class CreateUserView extends Component {

  //---------------------------------------------------------------------------------
  onSubmit = e => {
    e.preventDefault();
    console.log("You hit submit", e);
  //make a post request to the server
  // axios.post("route to server", {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName
  //     email: this.state.email
  //     password: this.state.password
  // })
  // .then((response) => {
  //     console.log(response)
  //     //call the function passed by the parent (not yet created) to take a local copy of the user
  //     this.props.handleNewUser(response.data)
  // })
  // .catch(err => (console.log(err)))
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