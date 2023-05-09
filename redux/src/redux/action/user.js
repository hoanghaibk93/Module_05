import userService from "../../service/userService";
import {DELETE_USER, GET_ALL_USER} from "./types";

export const getAllUser = () => async (dispatch) => {
    try {
        const res = await userService.findAll();
        dispatch({
            type: GET_ALL_USER,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const removeUser = (id) => async (dispatch) => {
    try {
        await userService.remove(id);
        const res = await userService.findAll();
        dispatch({
            type: DELETE_USER,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}