import isEmpty from '../../validation/is-empty'
import { RETRIEVE_REPO } from '../actions/types';

const initialState = {
    isWork: "yes",
    fetchData: {}
}

export default function(state = initialState, action){
    switch (action.type) {
        case RETRIEVE_REPO:
            return {
                ...state,
                fetchData: action.payload
            }

        default:
            return state;
    }
}