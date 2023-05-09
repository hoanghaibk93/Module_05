import {DELETE_USER, GET_ALL_USER} from "../action/types";

const initialState = []
const userReducer = (user = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_ALL_USER:
            return payload;
        case DELETE_USER:
            return payload;
        default:
            return user;
    }
}
export default userReducer;