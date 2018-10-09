import React, { Component } from 'react';   // React.Component = {Component}
import CardList from '../components/CardList';  //parent of Card component
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; 
import ErrorBoundry from '../components/ErrorBoundry'
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
    

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')  //fetch is a part of the window object
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    
    // With anything that comes from React, so constructor and render, are pre-built in React, any time we make our own methods on a component, we have to use arrow functions, and this makes sure that the "this" value is according to where it was created, which is the "App"
    onSearchChange = (event) => {   
        this.setState({ searchfield: event.target.value })
    }


    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (!robots.length) ?   //if robots.length==0 so it's true, !the opposite is false
            <h1>Loading...</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}


export default App;