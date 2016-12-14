import * as React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import DashboardPage from "./DashboardPage";

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */

const styles = {
    texCen: {
        textAlign: "center",
    },
};


interface ITestComponentProperties {

}

interface ITestComponentState {
    open: boolean;
}

export default class Test extends React.Component<ITestComponentProperties, ITestComponentState> {

    constructor(props: ITestComponentProperties, context: any) {
        super(props, context);
        this.state = {
            open: true,
        };
    }

    private handleClose() {
        this.setState({open: false});
    }

    render() {
        const actions = [
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={() => this.handleClose()}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Please fill this fields and push submit button"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    style={styles.texCen}
                >
                    <DashboardPage/>
                </Dialog>
            </div>
        );
    }
}





