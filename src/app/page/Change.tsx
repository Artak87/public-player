import * as React from "react";

export default class Change extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            inpValue: "Guest",
        };
    }

    changeTitle(e: any) {
        this.setState({
            inpValue: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Hi {this.state.inpValue}</h1>
                <input type="text" onChange={this.changeTitle.bind(this)}/>
            </div>
        );
    }
}
