import React from 'react';


class RightDiv extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'title': props.title
        };
        this.getContent = this.getContent.bind(this);
    }

    getContent() {
        return 'This would display the contents based on the link on the right hand side';
    }

    render() {
        return <div className="pull-right cell">{this.state.title} <br/>{this.getContent()}</div>
    }
}

export default RightDiv;