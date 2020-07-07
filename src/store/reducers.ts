import { FilmState, RequestActionTypes, RequestActions } from "./types";

const initialState: FilmState = {
  films: [],
  isLoading: false,
  error: ''
}

export function reducer(state = initialState, action: RequestActionTypes): FilmState{

  switch(action.type){
    case RequestActions.SEND_REQUEST:
      return {...state, isLoading: true};
    case RequestActions.REQUEST_SUCCESS:
      return {...state, films: action.data, isLoading: false}
    case RequestActions.REQUEST_ERROR:
      return {...state, error: action.message, isLoading: false}
    default:
      return state;
  }
}