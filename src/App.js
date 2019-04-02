import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Paul",
      email: "paul.linck@gmail.com"
    };
  }

  render() {
    return (
        <Router>
            <div className="container">
                <Navigation />
                <Route
                    exact path="/"
                    render={() => (
                    <Dashboard {...this.state} />
                    )}
                /> 
            </div>
        </Router>
    );
  }
}
export default App;