import Loader from "react-loader-spinner";
import { Component } from 'react';
export default class Loading extends Component {
    render() {
        return (
            <Loader
                type="Puff"
                color="#ccc"
                height={100}
                width={100}
            />
        );
    }
}
