import React from 'react';


class RightDiv extends React.Component {

    render() {
        return <div className="pull-right cell"> <br/>{this.props.content}</div>
    }
}

export default RightDiv;