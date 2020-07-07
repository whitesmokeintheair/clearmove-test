import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { FilmList } from './components/FilmList';


function App() {
  return <Provider store={store}>
    <header>
      <h3>FilmList</h3>
    </header>
    <main>
      <div className="list-container">
        <FilmList />
      </div>
    </main>
    <footer>
      <span>Кряк</span>
    </footer>
  </Provider>
}

export default App;
