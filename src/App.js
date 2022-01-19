import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      filteredMonsters: []
    };

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users, filteredMonsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  filterByName = () => {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    this.setState({ filteredMonsters: filteredMonsters });
  }

  render() {
    const { filteredMonsters, searchField } = this.state;
    // const fileteredMonsters = monsters.filter(monster =>
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    // );
    return (
      <div className="App" >
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange} />
        <button onClick={() => this.filterByName()}>Enter text and then click to Filter</button>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App;
