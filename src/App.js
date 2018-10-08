import React, { Component } from 'react';   // React.Component = {Component}
import CardList from './CardList';  //parent of Card component
import SearchBox from './SearchBox';
import { robots } from './robots';  // "robots" is inside of {} because in robots.js "export" isn't "default" so it could have multiple exports


class App extends Component {

// ====== STATE ======
// state is something that can change and affect the app; 
// state lives in the parent component
    constructor() {
        super() // calls the constructor of Component
        this.state = {
            robots: robots,
            searchfield: '' 
        }
    }

    // With anything that comes from React, so constructor and render, are pre-built in React, any time we make our own methods on a component, we have to use arrow functions, and this makes sure that the "this" value is according to where it was created, which is the "App"
    onSearchChange = (event) => {   
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
    
}

export default App;