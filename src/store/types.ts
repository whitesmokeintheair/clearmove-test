type SendRequest = {
  type: RequestActions.SEND_REQUEST
}

type RequestSuccess = {
  type: RequestActions.REQUEST_SUCCESS,
  data: FilmList
}

type RequestError = {
  type: RequestActions.REQUEST_ERROR
  message: string
}

export type RequestActionTypes = SendRequest | RequestSuccess | RequestError

export enum RequestActions {
  SEND_REQUEST = 'SEND_REQUEST',
  REQUEST_SUCCESS = 'REQUEST_SUCCESS',
  REQUEST_ERROR = 'REQUEST_ERROR'
}

type Film = {
  id: string,
  title: string,
  original_title: string,
  release_date: string
}

export type FilmList = Film[]

export type FilmState = {
  films: FilmList,
  isLoading: boolean,
  error: string
}