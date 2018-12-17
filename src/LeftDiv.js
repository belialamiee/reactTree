import React from 'react';
import CodeBody from "./CodeBody";

class LeftDiv extends React.Component {
    render() {
        return <div className="pull-left cell">{this.props.title}<CodeBody content={this.props.elements}/></div>
    }
}

export default LeftDiv;