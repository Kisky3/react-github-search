import Loader from "react-loader-spinner";
import { Component } from 'react';
import './index.css'
export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <Loader
                    type="Puff"
                    color="#ccc"
                    height={100}
                    width={100}
                    className="loading-mark"
                />
            </div>
        );
    }
}