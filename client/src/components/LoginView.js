import React, {Component} from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { setUser } from '../actions/userAction'
import axios from "axios"
import {connect} from "react-redux";



class LoginView extends Component {
  constructor(props){
    super(props)
    this.state = {
        email: "",
        password: "",
        user: {}
    }
  }
  componentDidMount() {
    this.setUser();
  };

  setUser = async () =>
  {
      let data = await axios('auth/user').then(res => res.json())
      console.log("THIS IS DATA ____---------_____", data)
      if (data.success)
      {
          this.setState(setUser(data.user))
          console.log(data.user._id)
      }
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("You signed in!", e);
    this.props.history.push('/')
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
const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = (dispatch) => ({
  setUser: user => dispatch(setUser(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)
