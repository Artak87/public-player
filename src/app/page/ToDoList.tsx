import * as React from "react";

const styles = {
    buttonStyale: {
        margin: 10,
    },
};
export default class ToDoList extends React.Component<any, any > {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            items: [],
            value: " ",
        };
    }

    ctrls: {
        input?: HTMLInputElement;
    } = {};

    _changeState(e: any) {
        this.setState({value: e.target.value});
    }

    _addComment(a: any) {
        const itemsArray = this.state.items;
        itemsArray.push(
            {
                text: this.state.value,
                key: Date.now()
            }
        );
        this.setState({items: itemsArray});
        this.setState({value: ""});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this._changeState.bind(this)}/>
                <button style={styles.buttonStyale} onClick={this._addComment.bind(this)}>Submite</button>
            </div>
        );
    }
}
