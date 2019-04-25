import axios from 'axios'
import { GET_GITHUB_REPO, RETRIEVE_REPO } from './types';


// Fetch Github Repos
export const fetchRepos = (githubData) => dispatch => {
    axios.get(`https://api.github.com/users/${githubData.name}/repos`)
        .then(res => {
            dispatch({
                type: RETRIEVE_REPO,
                payload: res.data
            })
        })
        .catch(err => {

        })
}