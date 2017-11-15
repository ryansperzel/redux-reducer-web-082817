export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
    // WAS doing this: let newObj = {...state, friends: [...state.friends]}, but didn't work since it was destructive - bc when the object had a nested array, it passed by REFERENCE, and destoryed the original state.friends
      let newObj = {...state, friends: [...state.friends]}
      for(var i = 0; i < newObj.friends.length; i++) {
        if(newObj.friends[i].id === action.id) {
          newObj.friends.splice(i, 1);
        }
      }
      return newObj
    default:
      return state
  }
}
