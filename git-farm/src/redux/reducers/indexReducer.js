import isEmpty from '../../validation/is-empty'
import { RETRIEVE_REPO, FETCH_LOADING, EMPTY_REPOS, GET_USER_INFO } from '../actions/types';

const initialState = {
    isWork: "yes",
    fetchData: {},
    currentUserInfo: {},
    loading: false
}

export default function(state = initialState, action){
    switch (action.type) {
        case RETRIEVE_REPO:
            return {
                ...state,
                fetchData: action.payload
            }

        case GET_USER_INFO:
            return{
                ...state,
                currentUserInfo: action.payload,
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