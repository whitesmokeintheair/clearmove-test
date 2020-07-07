import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { sendRequest } from '../store/actions';
import { FilmState } from '../store/types';

export const FilmList = () => {

  const dispatch = useDispatch();
  const {
    films,
    isLoading,
    error
  } = useSelector((state:FilmState) => ({
    films: state.films, 
    isLoading: state.isLoading, 
    error: state.error
  }))

  useEffect(() => {
    if (!films.length && !isLoading && !error){
      dispatch(sendRequest());
    }
  }, [films, isLoading, error, dispatch])

  if (!films || isLoading) return <p>'Loading...'</p>;

  if (error) return <p>{error}</p>;

  return <>
    {films.map(({ title, original_title, release_date, id }) => (
      <div key={id} className="card">
        <div className="container">
          <h3><b>{title}</b></h3>
          <p>Original title: {original_title}</p>
          <p>Year: {release_date}</p>
        </div>
      </div>
    ))}
  </>
}