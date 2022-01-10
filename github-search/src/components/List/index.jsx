import React, { Component } from 'react';
import Item from '../Item'
import './index.css';

class List extends Component {
    render() {
        const { total_count, items } = this.props.users

        if (total_count && items) {
            return (
                <div className="list-container">
                    <span>Total: {total_count}, show 30 records </span>
                    <div className="list">
                        {
                            items.map((userObj) => {
                                return (
                                    <Item userObj={userObj} key={userObj.id}/>
                                )
                            })

                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div className="list-container">
                    <span>Nothing here..</span>
                </div>
            )
        }
    }
}

export default List;
