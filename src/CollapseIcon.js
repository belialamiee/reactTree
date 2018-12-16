import React from 'react';

class CollapseIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.open) {
            return <i className="linky" onClick={this.props.collapse}>[-]</i>;
        } else {
            return <i className="linky" onClick={this.props.collapse}>[+]</i>;
        }
    }
}

export default CollapseIcon;