import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";
import {green500} from "material-ui/styles/colors";

const styles = {
    checkbox: {
        margin: 10,
    },
    ansbutton: {
        backgroundColor: green500,
    }
};
export interface TrainingPageProps {
}

class TrainingPage extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            selectedOption: " ",
            question: [],
        };
    }

    onchnaging(e: any) {
        this.setState({selectedOption: e.target.value});
    }

    onMonit() {
        if (this.state.selectedOption === "option1") {
            alert("Congratulations, You are Right!");
        }

        else {
            alert("Ooops, Something went wrong in your mind, think!");
        }
    }

    render() {
        return (
            <MuiThemeProvider >
                <div>
                    <h1>Who is the author of "War and Piece"?</h1>
                    <form>
                        <label style={styles.checkbox}>
                            <input type="radio" value="option1"
                                   checked={this.state.selectedOption === "option1"}
                                   onChange={this.onchnaging.bind(this)}/>
                            L.Tolstoy
                        </label>
                        <label style={styles.checkbox}>
                            <input type="radio" value="option2"
                                   checked={this.state.selectedOption === "option2"}
                                   onChange={this.onchnaging.bind(this)}/>
                            F.Dostoyevskiy
                        </label>
                        <label style={styles.checkbox}>
                            <input type="radio" value="option3"
                                   checked={this.state.selectedOption === "option3"}
                                   onChange={this.onchnaging.bind(this)}/>
                            M. Lermontov
                        </label>
                        <label style={styles.checkbox}>
                            <input type="radio" value="option4"
                                   checked={this.state.selectedOption === "option4"}
                                   onChange={this.onchnaging.bind(this)}/>
                            N.Gogol
                        </label>
                    </form>
                    <br/>
                    <FlatButton label="answer" style={styles.ansbutton} onClick={this.onMonit.bind(this)}/>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default TrainingPage;
