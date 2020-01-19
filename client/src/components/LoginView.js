import React, {Component} from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';

export default class LoginView extends Component {
  constructor(props){
    super(props)
    this.state = {
        email: "",
        password: ""
    }
  }

  onSubmit = e => {
    e.preventDefault();
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    })
    console.log("You signed in!", e);
  }

    render(){
        return (
            <Grid centered columns={2}>
              <Grid.Column>
                <Header as="h2" textAlign="center">
                  Login
                </Header>
                <Segment>
                  <Form size="large">
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="Email address"
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                    />
                    <Button color="blue" fluid size="large" onClick={this.onSubmit}>
                      Login
                    </Button>
                    <br></br>
                    <Button color="blue" fluid size="large"><a href="/auth/google">Login with Google</a></Button>
                  </Form>
                </Segment>
                <Message>
                  Not registered yet? <a href="users/new">Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>
        )
    }
}