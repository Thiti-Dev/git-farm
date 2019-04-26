import axios from 'axios'
import { GET_GITHUB_REPO, RETRIEVE_REPO, FETCH_LOADING, EMPTY_REPOS, GET_USER_INFO } from './types';


// Fetch Github Repos
export const fetchRepos = (githubData) => dispatch => {
    dispatch(setFetchLoading())
    axios.get(`https://api.github.com/users/${githubData.name}/repos`)
        .then(res => {
            dispatch({
                type: RETRIEVE_REPO,
                payload: res.data
            })
            dispatch(fetchUserData(githubData.name));
        })
        .catch(err => {

        })
}

export const fetchUserData = (targetName) => dispatch => {
    axios.get(`https://api.github.com/users/${targetName}`)
        .then(res => {
            dispatch({
                type: GET_USER_INFO,
                payload: res.data
            })
        })
        .catch(err => {

        })
}

//  Fetch loading
export const setFetchLoading = () => {
    return {
        type: FETCH_LOADING
    }
}

//  Fetch loading
export const emptyRepos = () => {
    return {
        type: EMPTY_REPOS
    }
}