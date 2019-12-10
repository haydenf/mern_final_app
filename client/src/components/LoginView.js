import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react';

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
            <p>Not signed up? <span onClick={() => {this.props.changeLocation("createUser")}}>Create user</span></p>
          </Form>
        )
    }
}