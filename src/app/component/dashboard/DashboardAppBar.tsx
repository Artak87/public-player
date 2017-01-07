import * as React from "react";
import AppBar from "material-ui/AppBar";

interface IDashboardAppBarProps {
    onOpenMenu: Function;
}

interface IDashboardAppBarState {
}

const STATE_DEFAULT_VALUE: IDashboardAppBarState = {};

export class DashboardAppBar extends React.Component<IDashboardAppBarProps, IDashboardAppBarState> {

    constructor(props: IDashboardAppBarProps, context: any) {
        super(props, context);
        this.state = STATE_DEFAULT_VALUE;
    }

    private openMenu() {
        this.props.onOpenMenu();
    }

    render() {
        return (
            <AppBar
                title="Dashboard"
                onLeftIconButtonTouchTap={() => this.openMenu()}
            />
        );
    }
}
