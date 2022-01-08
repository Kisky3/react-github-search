import React, { Component } from 'react';
import Item from '../Item'
import './index.css';

class List extends Component {
    render() {
        return (
            <div className="list">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        );
    }
}

export default List;
