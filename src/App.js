import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const title = "welcome to Homepage";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <switch>
            <Route path="/">
              <Home/>
            </Route>
          </switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
