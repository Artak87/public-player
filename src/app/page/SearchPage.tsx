import * as React from "react";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Slider from 'material-ui/Slider';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import Pause from 'material-ui/svg-icons/av/pause';
import {AudioPlayer} from '../component/AudioPlayer';


const style = {
};

interface ISearchPageProps {
}

interface ISearchPageState {
	time?: number;
}

export class SearchPage extends React.Component<ISearchPageProps, ISearchPageState> {


	constructor(props: ISearchPageProps, context: any) {
		super(props, context);
		this.state = {
			time: Math.floor(Date.now() / 1000),
		};

		//setInterval(() => {
		//	this.setState({time: this.state.time + 1});
		//}, 1000);


		setTimeout(() => {
			alert("gugo");
		}, 2000)

	}


	render() {

		let hour: string = this.fillZero(Math.floor(this.state.time / 3600) % 24);
		let minute: string = this.fillZero(Math.floor(this.state.time / 60) % 60);
		let second: string = this.fillZero(this.state.time % 60);

		return (
			<div>
				<h1>SearchPage</h1>
				<div>
					<span>{hour}</span>
					<span>:</span>
					<span>{minute}</span>
					<span>:</span>
					<span>{second}</span>
				</div>
			</div>
		);
	}

	fillZero(n: number): string {
		if (n < 10) {
			return "0" + n;
		}
		return "" + n;
	}

}
