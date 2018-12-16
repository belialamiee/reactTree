import React from 'react';
import TreeElement from './TreeElement';

class CodeBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'content': props.content
        };
    }

    render() {
        let treeElements = [];
        for (let i = 0; i < this.state.content.length; i++) {
            treeElements.push(<TreeElement
                key={Math.random()}
                title={this.state.content[i].title}
                description={this.state.content[i].description}
                children={this.state.content[i].children}
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