let initState = {
    userSearched: 'ebidel',
    gists: []
}

export default function gist(state = initState, action) {
  switch(action.type) {
    case 'GET_GISTS_SUCCESS':
      return Object.assign({}, state, {gists: action.gists});
    break;
    case 'GET_GIST_FORK_SUCCESS':
      let gists = [...state.gists];
      let forksOfGist = gists.find(gist => {
        return (gist.id === action.gist.id);
      });
      if (forksOfGist)
        forksOfGist.forksList = action.forks;
      return Object.assign({}, state, {gists});
    break;
    case 'CHANGE_USER_SEARCHED':
      return Object.assign({}, state, {userSearched: action.user});
    break
    default:
      return state;
  }
}
