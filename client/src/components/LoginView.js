import React, {Component} from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

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
                    <Button color="blue" fluid size="large">
                      Login
                    </Button>
                    <br></br>
                    <Button fluid size="large"><a href="/auth/google">Login with Google</a></Button>
                  </Form>
                </Segment>
                <Message>
                  Not registered yet? <a href="/users/new">Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>
        )
    }
}