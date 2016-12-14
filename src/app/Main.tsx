import * as React from "react";
import {deepOrange500} from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {IndexLink, Link} from "react-router";


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});


class Main extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
    }


    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    render() {

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <div>
                        <IndexLink to="/"> <FlatButton label="Language Trainer"/></IndexLink>
                        <Link to="/TrainingPage"><FlatButton label="Training"/></Link>
                        <Link to="/ToDoList"><FlatButton label="Progres"/></Link>
                        {/*<Link to="/Test"><FlatButton label="Test" /></Link>*/}
                        <Link to="/Counter"><FlatButton label="Update"/></Link>
                        <Link to="/Change"><FlatButton label="Dictionaries"/></Link>
                    </div>
                    <div id="content">
                        {this.props.children}
                    </div>
                    <div className="footer">
                        <p>Learning German <a href="http://www.4h.am">4h</a> and <a href="http://about.me/aram.of.am">Aram Karapetyan.</a>
                        </p>
                    </div>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default Main;
