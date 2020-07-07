import { RequestActionTypes, RequestActions, FilmList } from './types';

export function sendRequest(): RequestActionTypes {
  return {
    type: RequestActions.SEND_REQUEST
  }
}

export function requestSuccess(data: FilmList): RequestActionTypes {
  return {
    type: RequestActions.REQUEST_SUCCESS,
    data: data
  }
}

export function requestError(message: string): RequestActionTypes {
  return {
    type:  RequestActions.REQUEST_ERROR,
    message: message
  }
}
