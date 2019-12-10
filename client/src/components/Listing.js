import React, {Component} from "react";
import {connect} from "react-redux";
import { Card, Image, Button, Icon} from 'semantic-ui-react'
import axios from "axios"
import {deletedListingHandler, listingHandler} from "../actions/listingAction"

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            _id: "",
            title: "",
            description: "",
            image: ""
         }
   }
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
            .put("/api/listings", listing)
            .then(res => {
                const updateListing = this.props.listings.map(listing => {
                    if (listing._id === res.data._id) {
                        return res.data;
                    }
                    return listing
                });
                    this.props.listingHandler(updateListing)
            })
                    .catch(err => console.log("this is an axios error" + err));
    };

    // deleting function handling delete on state and for the backend
    deletion = (listing) => {
        axios
            .delete("/api/listings", { data: listing })
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
                            <Image src='../../public/logo192.png' wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>{listing.title}</Card.Header>
                            <Card.Description>{listing.description}</Card.Description>
                            <div>
                                <Button primary>Edit</Button>
                                <Button secondary>Delete</Button>
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


