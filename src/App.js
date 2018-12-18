import React from 'react';
import Title from './Title';
import LeftDiv from './LeftDiv';
import RightDiv from './RightDiv';
import nodeData from './demo.json';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            'currentNode': {
                'description': '',
                'title': ''
            },
        };
        this.title = "Tree Renderer";
        this.loadingElements = nodeData;
        this.elements =
            [
                {
                    'id': '1.0',
                    'title': '',
                    'description': ''
                }
            ];
        this.descriptionCallBack = this.descriptionCallBack.bind(this);
    }

    descriptionCallBack(data) {
        this.setState({
            'currentNode': data
        });
    }

    render() {
        this.elements = this.loadingElements;
        return [
            <Title key='title'/>,
            <LeftDiv key='leftDiv' descriptionCallBack={this.descriptionCallBack} title={this.title} elements={this.elements}/>,
            <RightDiv key='rightDiv' content={[this.state.currentNode]}/>
        ]
    }
}

export default App;
