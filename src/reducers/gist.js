let initState = {
    userSearched: 'ebidel',
    gists: []
}

export default function gist(state = initState, action) {
  let newState = {};
  switch(action.type) {
    case 'GET_GISTS_SUCCESS':
      newState = Object.assign({}, state, {gists: action.gists});
    break;
    case 'GET_GIST_FORK_SUCCESS':
      let gists = [...state.gists];
      let forksOfGist = gists.find(gist => {
        return (gist.id === action.gist.id);
      });
      if (forksOfGist)
        forksOfGist.forksList = action.forks;
      newState = Object.assign({}, state, {gists});
    break;
    case 'CHANGE_USER_SEARCHED':
      newState = Object.assign({}, state, {userSearched: action.user});
    break
    default:
      newState = Object.assign({}, state);
  }
  return newState;
}
