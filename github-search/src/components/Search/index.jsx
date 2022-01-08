import React, { Component } from 'react';
import './index.css';

class Search extends Component {

    render() {
        return (
            <div className="search">
                <input className="search-input" type="text" onChange={this.handleValue} placeholder="search github user here.."/>
                <button className="search-button"> search</button>
            </div>
        );
    }
}

export default Search;
