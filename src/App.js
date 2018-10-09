import React, { Component } from 'react';   // React.Component = {Component}
import CardList from './CardList';  //parent of Card component
import SearchBox from './SearchBox';
import Scroll from './Scroll'; 
import './App.css';

class App extends Component {

// ====== STATE ======
// state is something that can change and affect the app; 
// state lives in the parent component
    constructor() {
        super() // calls the constructor of Component
        this.state = {
            robots: [],
            searchfield: '' 
        }
    }

    // With anything that comes from React, so constructor and render, are pre-built in React, any time we make our own methods on a component, we have to use arrow functions, and this makes sure that the "this" value is according to where it was created, which is the "App"

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')  //fetch is a part of the window object
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {   
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
    
}

export default App;