import React, {Component} from 'react';
import './App.css';
import { CardList } from "../components/CardList/CardList.component";
import { SearchBox } from "../components/SearchBox/SearchBox.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    myAsyncFunction = async () => {
        try {
            const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await usersResponse.json();
            this.setState({monsters: users})
        } catch (e) {
            console.log('Error! ', e);
        }
    };

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({monsters: users}))
        //     .catch(error => console.log('Error: ', error));
        this.myAsyncFunction();
    }



    handleSearchBoxChange = (e) => {
        this.setState({searchField: e.target.value})
    };

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
        <div className="App">
            <h1> Monsters Rolodex </h1>
            <SearchBox placeholder='search monsters' handleSearchBoxChange={this.handleSearchBoxChange}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}

export default App;
