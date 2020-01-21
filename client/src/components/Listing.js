import React, {Component} from "react";
import {connect} from "react-redux";
import { Card, Image, Button, Modal, Form, Container, Responsive } from 'semantic-ui-react'
import { Route, Link } from "react-router-dom";
import axios from "axios"
import {deletedListingHandler, listingHandler} from "../actions/listingAction" 
import {setUser} from "../actions/userAction"
import SellerProfile from "./SellerProfile"
import jwtDecode from 'jsonwebtoken';

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            _id: "",
            title: "",
            description: "",
            image: "",
            modalOpen: false,
            jwt: ''
         }
   }


    handleOpen = listings => {this.setState({ 
        modalOpen: true,
        _id: listings._id,
        title: listings.title,
        description: listings.description,
        blurb: listings.blurb,
        price: listings.price
     });
    };
    
    handleClose = () => this.setState({ modalOpen: false })

    // change logger //
    logChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("Logging change function console log " + this.state);
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
            description: this.state.description,
            blurb: this.state.blurb,
            price: this.state.price
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
                    .catch(err => console.log("this is an updated error " + err));
    };

    // deleting function handling delete on state and for the backend
    deletion = (listing) => {
        axios
            .delete("/api/listing", { data: listing })
            .then(() => {this.props.deletedListingHandler(listing._id)})
            .catch(err => console.log("this is the deletion function err " + err));
    };


    // mounting the listings and user //
    componentDidMount() {
        this.grabListings();
        // this.setUser();
        this.jwt_token();
        this.decode();
}

    render() { 
        const {listings} = this.props
        return ( 
            <div>
                <div className="card">
                <Container className="container">
                    <Card.Group centered>
                    {listings.map(listing => (
                        <Responsive as={Card} minWidth={300} className="listingCard">
                            <Card.Content>
                            <Image className="cardPic" src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'/>
                            <Card.Content className="cardPrice">{listing.price}</Card.Content>
                            <Card.Header>{listing.title}</Card.Header>
                            <Card.Description>{listing.blurb}</Card.Description>
                                <Modal
                                    trigger={<Button className="button" basic onClick={() => this.handleOpen(listing)}>Edit</Button>}
                                    open={this.state.modalOpen}
                                    onClose={this.handleClose}
                                    dimmer='blurring'
                                    size='small'>
                                    <Modal.Header>Edit information</Modal.Header>
                                    <Modal.Content image>
                                        <Image
                                            wrapped
                                            size="small"
                                            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                                        />
                                    <Modal.Description>
                                        <Form method="POST">
                                            <Modal.Header>Product Title</Modal.Header>
                                            <Form.Input
                                                fluid
                                                placeholder="Product title"
                                                name="title"
                                                value={this.state.title}
                                                onChange={this.logChange}
                                            />
                                            <Modal.Header>Product Blurb</Modal.Header>
                                            <Form.Input
                                                fluid
                                                placeholder="Product blurb"
                                                name="blurb"
                                                value={this.state.blurb}
                                                onChange={this.logChange}
                                            />
                                            <Modal.Header>Product Description</Modal.Header>
                                            <Form.TextArea
                                                fluid 
                                                placeholder="Product description"
                                                name="description"
                                                value={this.state.description}
                                                onChange={this.logChange}
                                            />
                                            <Modal.Header>Price</Modal.Header>
                                            <Form.Input
                                                fluid
                                                placeholder="Price"
                                                name="price"
                                                value={this.state.price}
                                                onChange={this.logChange}
                                            />
                                        </Form>
                                        </Modal.Description>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button basic className="button" onClick={this.editHandler}> 
                                            Edit 
                                        </Button>
                                        <Button className="button" as={Link} to='/seller'> 
                                            Meet the Seller 
                                        </Button>   
                                    </Modal.Actions>
                                </Modal>
                                <Button className="button" onClick={() => this.deletion(listing)}>Delete</Button>
                            </Card.Content>
                        </Responsive>
                        ))}
                    </Card.Group>
                </Container>
                <Route exact path="/seller" component={SellerProfile} />
            </div>
        </div>
        );
    }
}
 
// mapping for redux state management //
const mapStateToProps = (state) => ({
    listings: state.listings,
})
const mapDispatchToProps = (dispatch) => ({
    listingHandler: listings => dispatch(listingHandler(listings)),
    deletedListingHandler: id => dispatch(deletedListingHandler(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Listing)


