import {NEW_LISTING, SET_LISTINGS, DELETE_LISTING} from './types'; 

export const newListingHandler = (listing) => {
    return {type: NEW_LISTING, val: listing}};

export const listingHandler = (listings) => {
    return {type: SET_LISTINGS, val: listings}};

export const deletedListingHandler = (id) => {
    return {type: DELETE_LISTING, val: id}};

