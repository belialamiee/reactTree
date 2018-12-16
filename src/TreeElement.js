import React from 'react';
import CollapseIcon from './CollapseIcon';

class TreeElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'displayChild': false

        };
        this.collapse = this.collapse.bind(this);
    }

    collapse() {
        this.setState({'displayChild': !this.state.displayChild});
    }

    render() {
        let description = "";
        let children = [];
        let indentStyle = {marginLeft: this.props.indent}
        if (this.state.displayChild) {
            description = <p className="elementDescription">{this.props.description}</p>;
            for (let i = 0; i < this.props.children.length; i++) {
                children.push(<TreeElement
                        title={this.props.children[i].title}
                        description={this.props.children[i].description}
                        children={this.props.children[i].children}
                        indent={this.props.indent + 20}
                    />
                )
            }
        }

        return [<div className='treeElement' style={indentStyle}>{this.props.title} <CollapseIcon
            key={Math.random()}
            collapse={this.collapse}
            open={this.state.displayChild}/></div>,
            <div style={indentStyle}>{description}</div>,
            children
        ];
    }
}

export default TreeElement;