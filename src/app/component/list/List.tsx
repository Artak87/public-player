import * as React from "react";


interface IListProps {
}

interface IListState {

}

export class List extends React.Component<IListProps, IListState> {


    constructor(props: IListProps, context: any) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>List</h1>
            </div>
        );
    }

}
