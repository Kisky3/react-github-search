import Loader from "react-loader-spinner";
import { Component } from 'react';
import './index.css'
export default class Loading extends Component {
    render() {
        const {showLoading} = this.props
        return (
            <div style={{display: showLoading ? 'block': 'block'}} className="loading">
            <div>
                <Loader
                    type="Puff"
                    color="#ccc"
                    height={100}
                    width={100}
                    className="loading-mark"
                    timeout={10000}
                />
            </div>
            <span className="loading-text">Loading</span>
            </div>
        );
    }
}
