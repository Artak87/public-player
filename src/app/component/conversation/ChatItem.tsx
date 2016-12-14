import * as React from "react";
import Paper from 'material-ui/Paper';

interface IChatItemProps {
    data: any;
    me?: boolean;
}

interface IChatItemState {
    zDepth?: number;
    text?: string;
}

const STATE_DEFAULT_VALUE: IChatItemState = {
    text: "",
    zDepth: 1,
};

const style = {
    display: "inline-block",
    alignSelf: "flex-start",
    margin: "6px",
    padding: "8px",
};

export class ChatItem extends React.Component<IChatItemProps, IChatItemState> {

    private text: string;

    constructor(props: IChatItemProps, context: any) {
        super(props, context);
        this.text = this.props.children.toString().replace(/\n/g, "<br>");
        this.state = STATE_DEFAULT_VALUE;

        if (props.me) {
            style.alignSelf = "flex-end";
        }

    }

    private mouseEnter() {
        this.setState({
            zDepth: 2,
        });
    }

    private mouseLeave() {
        this.setState({
            zDepth: 1,
        });
    }

    render() {
        return (<Paper
                style={style}
                zDepth={this.state.zDepth}
                onMouseEnter={() => this.mouseEnter()}
                onMouseLeave={() => this.mouseLeave()}
                dangerouslySetInnerHTML={{__html: this.text}}
            />
        );
    }
}
