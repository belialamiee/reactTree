import React from 'react';
import Title from './Title';
import LeftDiv from './LeftDiv';
import RightDiv from './RightDiv';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            'currentDescription': 'I am a description',
        };
        this.title = "Tree Renderer";
        this.elements =
            [
                {
                    'id': '1.0',
                    'key': '1.0',
                    'title': 'seller',
                    'description': 'This is the seller of the item',
                    'children': [
                        {
                            'id': '1.1',
                            'key': '1.1',
                            'title': 'account',
                            'description': 'The account of the seller',
                            'children': [
                                {
                                    'id': '1.1.1',
                                    'key': '1.1.1',
                                    'title': 'balance',
                                    'description': 'The balance of the seller'
                                }
                            ]
                        }
                    ]
                },
                {
                    'id': '2.0',
                    'title': 'buyer',
                    'description': 'This is the recipient of the goods'
                }
            ];
        this.descriptionCallBack = this.descriptionCallBack.bind(this);

    }

    descriptionCallBack(data) {
        alert(data);
        // this.setState({
        //     'currentDescription': data
        // });
    }

    render() {
        return [
            <Title key='title'/>,
            <LeftDiv key='leftDiv' descriptionCallBack={this.descriptionCallBack} title={this.title} elements={this.elements}/>,
            <RightDiv key='rightDiv' content={this.state.currentDescription}/>
        ]
    }
}

export default App;
