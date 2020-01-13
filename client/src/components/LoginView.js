import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class LoginView extends Component {
  constructor(props){
    super(props)
    this.state = {
        email: "",
        password: ""
    }
  }

    render(){
        return (
            <Form>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' type="password"/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
            <p>Not signed up? <Link to="/users/new" handleNewUser={this.handleNewUser}>Create user</Link></p>
          </Form>
        )
    }
}