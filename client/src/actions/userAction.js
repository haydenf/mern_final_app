import {SET_USER, REMOVE_USER} from './types'


export const setUser = (user) => {
    return {type: SET_USER,  val: user}};

export const removeUser = () => {
    return {type: REMOVE_USER}
}