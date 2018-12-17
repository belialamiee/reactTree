import React from 'react';

class CollapseIcon extends React.Component {
    render() {
        if (this.props.open) {
            return <i className="collapseWidget" onClick={this.props.collapse}>[-]</i>;
        } else {
            return <i className="collapseWidget" onClick={this.props.collapse}>[+]</i>;
        }
    }
}

export default CollapseIcon;