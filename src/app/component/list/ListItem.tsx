interface IListItemProps {
}

interface IListitemState {
	
}

export class List extends React.Component<IListItemProps, IListItemState> {

	
	constructor(props: IListItemProps, context: any) {
		super(props, context);
		this.state = {
			
		};
	}

	render() {
		return (
			<div>
				<h1>ListItem</h1>
			</div>
		);
	}
	
}
