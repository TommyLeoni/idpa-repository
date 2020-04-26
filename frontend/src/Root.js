import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from './Home/Home';
import ResultsPage from './Results/Results';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null
        }
    }

    setResults = (results) => {
        this.setState({
            results: results
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={() => <HomePage setResults={this.setResults} />} />
                        <Route path="/results" render={() => <ResultsPage results={this.state.results} />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Root;