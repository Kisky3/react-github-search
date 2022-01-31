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
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [1, 0.1],
      position: "center", 
      color: ["random", "#ff0000"],
      cross: "dead",
      random: 15,
      g: 5,
      onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
      }
    };
    return (
      <div>
      <ParticlesBg type="circle" bg={true} config={config}/>
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
