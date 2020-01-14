import React, {Component} from "react";
import { Segment, Grid, Header, Item } from 'semantic-ui-react';

export default class ProfileView extends Component {
    constructor(props){
      super(props)
      this.state = {
          firstName: "",
          lastName: "",
          email: ""
      }
    }

    render(){
        return(
            // <Grid centered columns={1}>
            // <Grid.Column>
            //     <Header as="h2" textAlign="center">
            //         Profile
            //     </Header>
            //     <Item>

      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />

      <Item.Content>
        <Item.Header>Stevie Feliciano</Item.Header>
        <Item.Description>Blurb blurb blurb</Item.Description>
      </Item.Content>
    // </Item>

        //         <Segment>
        //         <Item size="large">
        //             <Item.Content
        //               fluid
        //               name="fullName"
        //               value={this.state.firstName}+ {this.state.lastName}
        //             />
        //             <Item.Content
        //               fluid
        //               value={this.state.email}
        //               onChange={this.logChange}
        //             />
        //         </Item>
        //         </Segment>
        //     </Grid.Column>
        //     </Grid>
        )
    }
}