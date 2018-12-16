import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'value': '', 'className': 'red'};
    }

    render() {
        return [
            <input className="toggleInput" type="checkbox" id="switch"/>,
            <label className="toggleLabel" >Toggle</label>]

    }
}

export default Toggle;