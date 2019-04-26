import isEmpty from '../../validation/is-empty'
import { RETRIEVE_REPO, FETCH_LOADING, EMPTY_REPOS } from '../actions/types';

const initialState = {
    isWork: "yes",
    fetchData: {},
    loading: false
}

export default function(state = initialState, action){
    switch (action.type) {
        case RETRIEVE_REPO:
            return {
                ...state,
                fetchData: action.payload,
                loading: false
            }

        case FETCH_LOADING:
            return {
                ...state,
                loading: true
            }

        case EMPTY_REPOS:
            return{
                ...state,
                fetchData: {}
            }

        default:
            return state;
    }
}