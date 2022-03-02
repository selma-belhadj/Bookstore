import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './pages/books';
import Categories from './pages/categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/books">
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
