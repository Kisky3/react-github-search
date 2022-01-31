import React, { Component } from 'react';
import List from './components/List'
import Search from './components/Search'
import Loading from './components/Loading'
import ParticlesBg from 'particles-bg';
import './App.css';

class App extends Component {
  state = {
    users: [], 
    showLoading: false,
  }
  getUserData = (data) => {
    this.setState({users: data});
  }

  setLoadingState = (state) => {
    this.setState({showLoading: state});
  }

  render() {
    const {users,showLoading } = this.state
    const bg = {position: 'fixed', zIndex: -1, opacity: 0.2}

    return (
      <div>
      <ParticlesBg type="cobweb" bg={bg}/>
      <div className="container">
        <header>Search Github Users</header>
        <Loading showLoading={showLoading} />
        <Search getUserData={this.getUserData} setLoadingState={this.setLoadingState} />
        <List users={users}/>
      </div>
      </div>
    );
  }
}

export default App;
