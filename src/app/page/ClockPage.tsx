import * as React from "react";
import {Clock} from "../component/timer/Clock";

interface IClockPageProps {
}

interface IClockPageState {
}

export class ClockPage extends React.Component<IClockPageProps, IClockPageState> {


	constructor(props: IClockPageProps, context: any) {
		super(props, context);
		this.state = {
		};
	}


	render() {
		return (
			<div>
				<Clock/>
			</div>
		);
	}
}
