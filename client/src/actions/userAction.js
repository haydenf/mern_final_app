import {SET_USER, REMOVE_USER} from './types'


export const setUser = (user) => {
    console.log('hello this is useraction', user)
    return {type: SET_USER,  val: user}};

export const removeUser = () => {
    return {type: REMOVE_USER}
}