import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchName: '',
  };

  handleSearchQuery = searchName => {
    console.log('Імя для пошуку в App: ', searchName);
    this.setState({ searchName });
  };

  componentDidMount() {
    // тут треба робити http запити
  }

  render() {
    return <Searchbar onSubmit={this.handleSearchQuery} />;
  }
}
