import React, { Component } from 'react';
import './index.css';
import axios from 'axios';

class Search extends Component {
    search = () => {
        // get user's input, constructure and rename var
        const {keyWordElement:{value: keyWord}} = this;
        
        // send request

    }
    render() {
        return (
            <div className="search">
                <input className="search-input" type="text" ref={c => this.keyWordElement = c} placeholder="search github user here.."/>
                <button className="search-button" onClick={this.search}> search</button>
            </div>
        );
    }
}

export default Search;
