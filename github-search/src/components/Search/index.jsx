import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import url from '../../asset/setting';

class Search extends Component {
    search = () => {
        // get user's input, constructure and rename var
        const {keyWordElement:{value: keyWord}} = this;
        this.props.setLoadingState(true);
        
        // send request
        axios.get(url + keyWord).then(
            response => {
                this.props.getUserData(response.data);
                this.props.setLoadingState(false);
            },
            error => {console.log(error)}
        )
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
