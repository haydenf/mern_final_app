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
            modalOpen: false
         }
   }

   // modal for edit function //

    handleOpen = listings => {this.setState({ 
        modalOpen: true,
        _id: listings._id,
        title: listings.title,
        description: listings.description
     });
    };
    
    handleClose = () => this.setState({ modalOpen: false })

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
        var listing = {
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
                    this.handleClose();
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

                            <Modal
                                trigger={<Button onClick={() => this.handleOpen(listing)}>Edit</Button>}
                                open={this.state.modalOpen}
                                onClose={this.handleClose}
                                basic
                                allowClear
                                size='small'>
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
                            <Button color='green' onClick={this.editHandler} inverted> edit </Button>
                                </Modal.Content>
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


