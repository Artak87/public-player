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
}

export class SearchPage extends React.Component<ISearchPageProps, ISearchPageState> {


	constructor(props: ISearchPageProps, context: any) {
		super(props, context);
		this.state = {
		};
	}


	render() {
		return (
			<div>
				<h1>SearchPage</h1>
			</div>
		);
	}
	

}
