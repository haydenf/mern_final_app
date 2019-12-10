import React, {Component} from "react"
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class CreateUserView extends Component {
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
            <Button type='submit'>Submit</Button>
          </Form>
        )
    }
}