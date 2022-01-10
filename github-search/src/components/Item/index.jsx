import React, { Component } from 'react';
import './index.css';

class Item extends Component {
    render() {
        const {avatar_url} = this.props.userObj
        return (
            <div className="item">
                <img alt="img" src={avatar_url}/>
            </div>
        );
    }
}

export default Item;
