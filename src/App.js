import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Books from './redux/books/Books';
import Categories from './redux/categories/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
