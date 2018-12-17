import React from 'react';
import TreeElement from './TreeElement';

class CodeBody extends React.Component {

    render() {
        let treeElements = [];
        for (let i = 0; i < this.props.content.length; i++) {
            treeElements.push(<TreeElement
                key={Math.random()}
                title={this.props.content[i].title}
                description={this.props.content[i].description}
                children={this.props.content[i].children}
                indent={0}
            />);
        }
        return [
            <pre className="codeBody">Content:</pre>,
            treeElements
        ]
    }
}

export default CodeBody;