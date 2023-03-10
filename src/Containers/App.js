import React, { Component } from 'react';
import CardList from "../Components/CardList";
import Searchbox from '../Components/Searchbox';
import './App.css';
import Scroll from '../Components/Scroll';
import errorBoundary from '../Components/ErrorBoundary';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            this.setState({robots:users})
        })
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                <errorBoundary>
                <CardList robots={filteredRobots} />
                </errorBoundary>
                </Scroll>
            </div>
                );
        }
      
        }
    
export default App;