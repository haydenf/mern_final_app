import {SET_USER, REMOVE_USER} from './types'


export const setUser = (data) => {
    return {type: SET_USER,  val: data}};

export const removeUser = () => {
    return {type: REMOVE_USER}
}
