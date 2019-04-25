import React from 'react';

// ------------- Router ---------------
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// ------------------------------------

// -------------- Redux -----------------
import { Provider } from 'react-redux';
import store from './redux/store';
// --------------------------------------


// ------------- Pages ----------------
import Landing from './components/main-ui/landing/Landing';
// ------------------------------------


// -------------- Import styles
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <NavigationBar /> */}
          <Route exact path="/" component={Landing} />>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
