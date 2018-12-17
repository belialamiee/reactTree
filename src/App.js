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
                    'title': 'seller',
                    'description': 'This is the seller of the item',
                    'children': [
                        {
                            'title': 'account',
                            'description': 'The account of the seller',
                            'children': [
                                {
                                    'title': 'balance',
                                    'description': 'The balance of the seller'
                                }
                            ]
                        }
                    ]
                },
                {
                    'title': 'buyer',
                    'description': 'This is the recipient of the goods'
                }
            ]
    }

    render() {
        return [
            <Title/>,
            <LeftDiv title={this.title} elements={this.elements}/>,
            <RightDiv content={this.state.currentDescription}/>
        ]
    }
}

export default App;
