import React, { Component } from 'react';
import List from './components/List'
import Search from './components/Search'
import Loading from './components/Loading'

class App extends Component {
  state = {
    userData: {
      total_count: 0,
      // avatar_url, html_url, login
      items: []
    },
    loading: false,
  }
  getUserData = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <Loading />
        <Search getUserData={this.getUserData}/>
        <List/>
      </div>
    );
  }
}

export default App;
