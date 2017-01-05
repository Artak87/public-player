import * as React from "react";
import {TwoSymbol} from "./TwoSymbol";

interface IClockProps {
}

interface IClockState {
}

const style = {
    clock: {
        textAlign: "center",
        marginTop: "30%",
    },
    twoSymbol: {
        display: "inline-block",
        margin: "10px",
    }
};

export class Clock extends React.Component<IClockProps, IClockState> {

    private hourSymbol: TwoSymbol;
    private minuteSymbol: TwoSymbol;
    private secondSymbol: TwoSymbol;
    private timestamp: number;

    constructor(props: IClockProps, context: any) {
        super(props, context);
        this.state = {};
        this.start();
    }

    private start() {
        this.timestamp = Math.round(Date.now() / 1000);

        setInterval(() => {
            this.timestamp++;
            this.tickTak();
        }, 1000);

        this.tickTak();
    }

    private tickTak() {
        if (!this.hourSymbol || !this.minuteSymbol || !this.secondSymbol) {
            return;
        }
        const hour = Math.round(this.timestamp / 3600) % 24;
        const minute = Math.round(this.timestamp / 60) % 60;
        const second = this.timestamp % 60;

        this.hourSymbol.setNumber(hour);
        this.minuteSymbol.setNumber(minute);
        this.secondSymbol.setNumber(second);
    }

    render() {
        return (
            <div style={style.clock}>
                <TwoSymbol style={style.twoSymbol} ref={twoSymbol => this.hourSymbol = twoSymbol}/>

                <TwoSymbol style={style.twoSymbol} ref={twoSymbol => this.minuteSymbol = twoSymbol}/>

                <TwoSymbol style={style.twoSymbol} ref={twoSymbol => this.secondSymbol = twoSymbol}/>
            </div>
        );
    }
}
