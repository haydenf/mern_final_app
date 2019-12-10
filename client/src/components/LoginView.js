import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class LoginView extends Component {
    render(){
        return (
            <Form>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
            <p>Not signed up? <Link to="/createUser">Create user</Link></p>
          </Form>
        )
    }
}