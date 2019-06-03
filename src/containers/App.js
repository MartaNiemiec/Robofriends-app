import React, { Component } from 'react';   // React.Component = {Component}
import { connect } from 'react-redux';
import CardList from '../components/CardList';  //parent of Card component
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; 
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {

    // ====== STATE ======
    // state is something that can change and affect the app; 
    // state lives in the parent component
    constructor() {
        super() // calls the constructor of Component
        this.state = {
            robots: []
        }
    }
    

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')  //fetch is a part of the window object
        .then(response => response.json())  //response return a promise
        .then(users => this.setState({robots: users}));
    }

    
    // With anything that comes from React, so constructor and render, are pre-built in React, any time we make our own methods on a component, we have to use arrow functions, and this makes sure that the "this" value is according to where it was created, which is the "App"


    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (!robots.length) ?   //if robots.length==0 so it's true, !the opposite is false
            <h1>Loading...</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);