import React, {Component} from "react";
import axios from "axios";
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react'
import {newListingHandler} from '../actions/listingAction'
import {connect} from "react-redux";


class Forms extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: ""
        }

    }
   onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   onSubmit = e => {
       e.preventDefault()
         axios.post('/api/listing', {
            title: this.state.title,
            description: this.state.description
        })
        .then((res) => {
            console.log(res)
            this.props.newListingHandler(res.data)
        })
            .catch(err =>  console.log("Error from submiting form ---"+err))
    }

    render(){
        return(

            <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              New Product
            </Header>
            <Segment>
              <Form size="large">
                <Form.Input
                  fluid
                  placeholder="Product name"
                  name="title"
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  placeholder="Product Description"
                  name="description"
                  onChange={this.onChange}
                />
                <Button 
                  className="button"
                  onClick={this.onSubmit}
                  type='submit'
                  value="Add listing"
                  color="blue" 
                  fluid 
                  size="large"
                  >Submit</Button>
              </Form>
            </Segment>
            {/* <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field> */}
          </Grid.Column>
        </Grid>


        //     <Form>
        //     <Form.Field>
        //       <label>Company name</label>
        //       <br />
        //       <input 
        //         placeholder='Company name'
        //         name="title"
        //         onChange={this.onChange} />
        //     </Form.Field>
        //       <br />
        //     <Form.Field>
        //       <label>Description</label>
        //       <br />
        //       <input 
        //         placeholder='Description' 
        //         name="description"
        //         onChange={this.onChange}/>
        //     </Form.Field>
        //     <br />
        //     <Button 
        //         onClick={this.onSubmit}
        //         type='submit'
        //         value="Add listing"
        //         >Submit</Button>
        //   </Form>
        )
    }
}

// subscribe to the redux state update 
const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

// trigger an update to the redux state
const mapDispatchToProps = (dispatch) => ({
    newListingHandler: listing => dispatch(newListingHandler(listing))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Forms)