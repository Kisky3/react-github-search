import Loader from "react-loader-spinner";
import { Component } from 'react';
import './index.css'
export default class Loading extends Component {
    render() {
        const {showLoading} = this.props
        return (
            <div style={{display: showLoading ? 'block': 'none'}} className="loading">
            <div>
                <Loader
                    type="Puff"
                    color="#ccc"
                    height={150}
                    width={150}
                    className="loading-mark"
                    timeout={10000}
                />
            </div>
            </div>
        );
    }
}
