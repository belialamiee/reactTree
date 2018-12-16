import React from 'react';
import CodeBody from "./CodeBody";

class LeftDiv extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'title': props.title,
            'elements': [
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
                                    'description': 'The balance of the seller',
                                    'children': []
                                }
                            ]
                        }
                    ]
                },
                {
                    'title': 'buyer',
                    'description': 'This is the recipient of the goods',
                    'children': []
                }
            ]
        }
    };

    render() {
        return <div className="pull-left cell">{this.state.title}<CodeBody content={this.state.elements}/></div>

    }
}

export default LeftDiv;