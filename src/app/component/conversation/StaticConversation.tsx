import * as React from "react";
import {ChatItem} from "./ChatItem";

interface IStaticConversationProps {
    conversation: any[];
}

interface IStaticConversationState {
    conversation: any[];
}

const STATE_DEFAULT_VALUE: IStaticConversationState = {
    conversation: [],
};

export class StaticConversation extends React.Component<IStaticConversationProps, IStaticConversationState> {

    constructor(props: IStaticConversationProps, context: any) {
        super(props, context);
        this.state = STATE_DEFAULT_VALUE;
        this.state.conversation = props.conversation;
    }

    render() {
        const chatItem: any = [];
        this.state.conversation.forEach((item: any, i: number) => {
            chatItem.push(<div key={i}><ChatItem data={item} me={false}>{item.userMessage}</ChatItem></div>);
            chatItem.push(<div key={this.state.conversation.length + i}><ChatItem data={item}
                                                                                  me={true}>{item.botMessage}</ChatItem>
            </div>);
        });
        return (<div>{chatItem}</div>);
    }
}
