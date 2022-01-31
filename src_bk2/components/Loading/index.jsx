import ReactLoading from 'react-loading';
import { Component } from 'react';
import './index.css'
class Loading extends Component {
    render() {
        const {showLoading} = this.props
        return (
            <div style={{display: showLoading ? 'block': 'none'}}>
                <div className="loading">
                    <ReactLoading
                        type={"balls"}
                        color={"#ccc"}
                        height={150}
                        width={150}
                        className="loading-mark"
                    />
                </div>
            </div>
        );
    }
}

export default Loading;
