import apiConstants from '../constants/api'
const { baseURL } = apiConstants

export function getGistsSuccess(gists){
  return {type: 'GET_GISTS_SUCCESS', gists}
}

export function getGistForkSuccess(forks, gist){
  return {type: 'GET_GIST_FORK_SUCCESS', forks, gist};
}

export function changeUserSearched(user) {
  return {type: 'CHANGE_USER_SEARCHED', user}
}

export function fetchForks(gists) {
  return dispatch => {
    gists.forEach(gist => {
      fetch(gist.forks_url).then(response => response.json()).then(data => dispatch(getGistForkSuccess(data, gist)));
    });
  }
}

export function getGistById(id) {
  return dispatch => {
    if(id) {
      return fetch(`${baseURL}/gists/${id}`)
        .then((response) => {
          if(!response.ok) throw new Error(response);
          return response.json();
        }).then((gist) => {
          dispatch(getGistsSuccess([gist]))
        }).catch(error => {
          console.log(error);
          dispatch(getGistsSuccess([]))
        });
    }
  }
}

export function getUserGists(user){
  return (dispatch) => {
    return fetch(`${baseURL}/users/${user}/gists`)
      .then((response) => {
        if(!response.ok) throw new Error(response);
        return response.json();
      }).then((gists) => {
        dispatch(getGistsSuccess(gists))
        dispatch(fetchForks(gists));
      }).catch(error => {
        console.log(error);
        dispatch(getGistsSuccess([]))
      });
  }
}

export default getUserGists;
