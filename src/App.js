import React, { Component } from "react";
import CardList from "./CardList";
import {robots} from './Robots' // must destructure if not using 'export default'
import SearchBox from './SearchBox'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange(event) {
        console.log(event.target.value);
        const filteredRobots = this.state.robots
    }
    render() {
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={this.state.robots}/>
            </div>
           
        );
    }
}

export default App;