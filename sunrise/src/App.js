import './App.css';
import Login from './components/login/Login';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = {Search} />
          <Route exact path = '/Login' component = {Login} />
          <Route exact path = '/Home' component = {Home} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
