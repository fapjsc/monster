import { Component } from 'react';

import './App.css';

import CardList from './components/card/CardList';
import SearchBar from './components/searchBar/SearchBar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      monsterFiltered: [],
    };
  }

  componentDidMount() {
    // 解決跨域
    let headers = new Headers();
    headers.append('Content-Type', 'application/json', {
      headers: headers,
    });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleSearch = event => {
    console.log(this);
    this.state.searchField = event.target.value;

    const { monsters, searchField } = this.state;

    const monsterFiltered = monsters.filter(monster => {
      console.log(searchField);
      console.log(monster.name.toLowerCase());
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    this.setState({
      monsterFiltered,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBar
          handleSearch={this.handleSearch}
          placeholder="search monster"
        />
        <CardList
          monsters={
            this.state.searchField
              ? this.state.monsterFiltered
              : this.state.monsters
          }
        />
      </div>
    );
  }
}

export default App;
