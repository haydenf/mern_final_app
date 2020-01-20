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

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    axios.get('/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    console.log("You signed in!");
    
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
                      name="email"
                      onChange={this.onChange}
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={this.onChange}
                    />
                    <Button 
                    color="blue"
                    fluid size="large"
                    onClick={this.onSubmit}
                    type='submit'>
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