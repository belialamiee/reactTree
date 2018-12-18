import React from 'react';
import CodeBody from "./CodeBody";

class LeftDiv extends React.Component {

    render() {
        return <div key="codeBodyParent" className="pull-left cell">{this.props.title}<CodeBody
            descriptionCallBack={this.props.descriptionCallBack}
            content={this.props.elements}/></div>
    }
}

export default LeftDiv;