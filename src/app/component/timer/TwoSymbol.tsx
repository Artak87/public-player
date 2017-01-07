import * as React from "react";
import {Symbol} from "./Symbol";

interface ITwoSymbolProps {
    style?: any;
}

interface ITwoSymbolState {
}

export class TwoSymbol extends React.Component<ITwoSymbolProps, ITwoSymbolState> {

    private firstSymbol: Symbol;
    private secondSymbol: Symbol;

    constructor(props: ITwoSymbolProps, context: any) {
        super(props, context);
        this.state = {};
    }

    setNumber(n: number) {
        const first = Math.floor(n / 10);
        const second = n % 10;
        this.firstSymbol.setNumber(first);
        this.secondSymbol.setNumber(second);
    }

    render() {
        return (
            <div style={this.props.style || {}}>
                <Symbol ref={obj => this.firstSymbol = obj}/>
                <Symbol ref={obj => this.secondSymbol = obj}/>
            </div>
        );
    }
}
