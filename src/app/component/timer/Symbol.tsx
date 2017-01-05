import * as React from "react";

interface ISymbolProps {
}

interface ISymbolState {
    number?: number;
}

const style = {
    block: {
        display: "inline-block",
        border: "1px solid #2196F3",
        width: "60px",
        height: "60px",
        margin: "1px",
    },
    on: {
        display: "inline-block",
        width: "18px",
        height: "18px",
        backgroundColor: "#2196F3",
        border: "1px solid transparent",
        transition: "background-color 300ms",
        float: "left",
    },
    off: {
        display: "inline-block",
        width: "18px",
        height: "18px",
        backgroundColor: "transparent",
        border: "1px solid transparent",
        transition: "background-color 300ms",
        float: "left",
    },
};

export class Symbol extends React.Component<ISymbolProps, ISymbolState> {

    constructor(props: ISymbolProps, context: any) {
        super(props, context);
        this.state = {
            number: 0,
        };
    }

    setNumber(number: number) {
        this.setState({number: number});
    }

    render() {
        const blocks: any[] = [];
        for (var i = 1; i < 10; ++i) {
            const bStyle = i <= this.state.number ? style.on : style.off;
            blocks.push(<div key={i} style={bStyle}></div>);
        }
        return (
            <div style={style.block}>{blocks}</div>
        );
    }
}
