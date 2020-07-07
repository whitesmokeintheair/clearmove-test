import { isOfType } from 'typesafe-actions';
import { RequestActionTypes, RequestActions } from './types';
import { Epic, combineEpics } from 'redux-observable';
import { mergeMap, filter, catchError } from "rxjs/operators";
import { requestSuccess, requestError } from './actions';

const API_KEY = '92d590ff486c6a1d7e8d20b793c89a8a';
const GET_FILM_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

export const fetchEpic: Epic<RequestActionTypes, RequestActionTypes> = (action$) =>
  action$.pipe(
    filter(isOfType(RequestActions.SEND_REQUEST)),
    mergeMap(async () => {
      const data = await fetch(GET_FILM_URL).then(res => res.json());
      return requestSuccess(data.results);
    }),
    catchError(err => Promise.resolve(requestError(err.toString())))
)

const epics = combineEpics(
  fetchEpic,
);

export default epics;