import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './pages/books';
import Categories from './pages/categories';
import { fetchBooks } from './redux/books/Books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBooks()), []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
