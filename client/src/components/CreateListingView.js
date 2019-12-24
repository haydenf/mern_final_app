import React, {Component} from "react"
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class CreateListingView extends Component {
    render(){
        return(
            <Form>
            <Form.Field>
              <label>Title</label>
              <input placeholder='Title' />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input placeholder='Description' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        )
    }
}