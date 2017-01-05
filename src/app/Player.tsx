import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";


const style = {
    container: {
        margin: "40px"
    }
};

interface IPlayerProps {
}

interface IPlayerState {
}

export class Player extends React.Component<IPlayerProps, IPlayerState> {

    constructor(props: IPlayerProps, context: any) {
        super(props, context);

        this.state = {};
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div style={style.container}>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
