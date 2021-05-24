import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoApp from './pages/TodoApp';


function App () {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={TodoApp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
