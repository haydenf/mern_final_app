import React, {Component} from "react";
import {connect} from "react-redux";
import { Card, Image, Button, Icon, Modal, Input, TextArea} from 'semantic-ui-react'
import axios from "axios"
import {deletedListingHandler, listingHandler} from "../actions/listingAction"

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            _id: "",
            title: "",
            description: "",
            image: "",
            open: false
         }
   }

   // modal for edit function //
    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }

    close = () => this.setState({ open: false })

   // change logger //
   logChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("Logging change function console log" + this.state);
    };
    // Fetching the listings from backend //
    grabListings = async () => {
        let res = await axios.get('/api/listing')
        let listings = res.data
        this.props.listingHandler(listings)
    }

    // editing function to edit the state and the backend //
    editHandler = (e) => {
        e.preventDefault();
        let listing = {
            _id: this.state._id,
            title: this.state.title,
            description: this.state.description
        };
        axios
            .put("/api/listing", listing)
            .then(res => {
                const updateListings = this.props.listings.map(listing => {
                    if (listing._id === res.data._id) {
                        return res.data;
                    }
                    console.log(res.data)
                    return listing
                });
                    this.close();
                    this.props.listingHandler(updateListings)
            })
                    .catch(err => console.log("this is an updated error" + err));
    };

    // deleting function handling delete on state and for the backend
    deletion = (listing) => {
        axios
            .delete("/api/listing", { data: listing })
            .then(() => {this.props.deletedListingHandler(listing._id)})
            .catch(err => console.log("this is the deletion function err" + err));
    };

    // mounting the listings //
    componentDidMount() {this.grabListings();}

    render() { 
        const {listings} = this.props
        const { open, closeOnEscape, closeOnDimmerClick } = this.state

        return ( 
            <div>
                {listings.map(listing => (
                    <div>
                        <Card.Group itemsPerRow={6}>
                            <Card>
                            {/* <Image src='=' wrapped ui={false} /> */}
                            <Card.Content>
                            <Card.Header>{listing.title}</Card.Header>
                            <Card.Description>{listing.description}</Card.Description>
                            <div>


                            <Button onClick={this.closeConfigShow(false, true)}> 
                            Edit
                            </Button>
                            <Modal
                                    open={open}
                                    closeOnEscape={closeOnEscape}
                                    closeOnDimmerClick={closeOnDimmerClick}
                                    onClose={this.close}
                                    >
                                    <Modal.Header>Edit information</Modal.Header>
                                    <Modal.Content>
                                <form method="POST">
                                <Input
                                    placeholder="Title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.logChange}
                                />
                                <br />
                                <br />
                                <TextArea
                                    placeholder="Description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.logChange}
                                />
                                </form>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button
                                        onClick={this.editHandler}
                                        positive
                                        labelPosition='right'
                                        icon='checkmark'
                                        content='Yes'
                                        />
                                    </Modal.Actions>
                                    </Modal>



                                <Button secondary onClick={() => this.deletion(listing)}>Delete</Button>
                            </div>
                            </Card.Content>
                            </Card>
                        </Card.Group>
                    </div>
                    ))}
            </div>
         );
    }
}
 
// mapping for redux state management //
const mapStateToProps = (state) => ({
    listings: state.listings
})
const mapDispatchToProps = (dispatch) => ({
    listingHandler: listings => dispatch(listingHandler(listings)),
    deletedListingHandler: id => dispatch(deletedListingHandler(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Listing)


