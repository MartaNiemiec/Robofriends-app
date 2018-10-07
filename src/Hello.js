import React, { Component } from 'react';   //the same as React.Component
import './Hello.css';

class Hello extends Component {
    render() {
        return  (
            <div className="f1 tc">
                <h1>HelloWorld</h1>
                <p>{this.props.greeting}</p>   {/* props = properties (in index.js file) */}   
            </div>
        );
    }
}

/* class Hello is just a function like this: 

    const Hello = (props) => {
        return (
            <div className="f1 tc">
                <h1>HelloWorld</h1>
                <p>{props.greeting}</p>   
            </div>
        );
    }
*/
    


export default Hello;
















