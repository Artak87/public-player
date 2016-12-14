import * as React from "react";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Slider from 'material-ui/Slider';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import Pause from 'material-ui/svg-icons/av/pause';
import {AudioPlayer} from '../component/AudioPlayer';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


const style = {
	form: {
		position: "absolute",
		bottom: "0",
		width: "calc(100% - 80px)"
	},
	item: {
		margin: "4px",
		padding: "4px",
	}
};

interface IListPageProps {
}

interface IListPageState {
	writing?: boolean;
	fuck?: boolean;
}

export class ListPage extends React.Component<IListPageProps, IListPageState> {

	private textField: TextField;
	private list: any[] = [];


	constructor(props: IListPageProps, context: any) {
		super(props, context);
		this.state = {
			writing: false,
		};
	}

	private handelFormSubmit(event: any): boolean {
		const value: any = this.textField.getValue();
		if (!value) {
			return false;
		}
		event.target.reset();
		if (this.list.indexOf(value) !== -1) {
			return false;
		}

		this.list.push(value);
		this.setState({fuck: true});
		return false;
	}


	render() {
		const list: any = [];
		this.list.forEach((item, i) => {
			list.push(<Paper key={i} style={style.item} zDepth={1}>{item}</Paper>);
		});
		
		

		return (
			<div>
			<h1>ListPage</h1>
			{list}
			<form
				style={style.form}
				onSubmit={(event: any) => this.handelFormSubmit(event)}
			>
				<TextField
					ref={textField => this.textField = textField}
	     			hintText="Write your name"
	    			fullWidth={true}
	   			/>
	   			<PlayArrow />
   			</form>
			</div>
		);
	}
	

}
