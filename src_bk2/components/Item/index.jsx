import React, { Component } from 'react';
import './index.css';

class Item extends Component {
    state = {
        showLabel: false
    }

    handleLabel = (showLabel) => {
        return () => {
            this.setState({ showLabel });
        }
    }

    openGithub = (html_url) => {
        return () => {
            window.open(html_url ,"_black"); 
        }
    }

    render() {
        const { avatar_url, login, html_url } = this.props.userObj
        return (
            <div 
                className="item" 
                onMouseEnter={this.handleLabel(true)} onMouseLeave={this.handleLabel(false)}
                onClick={this.openGithub(html_url)}
            >
                <img alt="img" src={avatar_url} />
                <label style={{display: this.state.showLabel ? 'block' : "none"}}>{login}</label>
            </div>
        );
    }
}

export default Item;
