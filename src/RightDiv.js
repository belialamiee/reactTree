import React from 'react';

class RightDiv extends React.Component {

    render() {
        return [
            <div key='contentTitle' className="pull-right cell"><br/>{this.props.content[0].title}</div>,
            <div key='contentDescription' className="pull-right cell"><br/>{this.props.content[0].description}</div>
        ]
    }
}

export default RightDiv;