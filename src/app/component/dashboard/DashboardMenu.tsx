import * as React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import {menu} from "../../settings";
import {browserHistory} from "react-router";

interface IDashboardMenuProps {
}

interface IDashboardMenuState {
    open: boolean;
}

const STATE_DEFAULT_VALUE: IDashboardMenuState = {
    open: false,
};

export class DashboardMenu extends React.Component<IDashboardMenuProps, IDashboardMenuState> {

    constructor(props: IDashboardMenuProps, context: any) {
        super(props, context);
        this.state = STATE_DEFAULT_VALUE;
    }

    openMenu() {
        this.setState({
            open: true,
        });
    }

    closeMenu() {
        this.setState({
            open: false,
        });
    }

    render() {
        return (
            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
            >
                {menu.map((item, i) => {
                    return (<MenuItem key={i} href={"#" + item.path}
                                      onTouchTap={() => this.closeMenu()}>{item.name}</MenuItem>);
                })}
            </Drawer>
        );
    }
}
