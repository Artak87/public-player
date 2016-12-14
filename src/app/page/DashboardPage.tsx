import * as React from "react";
import * as jQuery from "jquery";
import TextField from "material-ui/TextField";


export class DashboardPage extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            session: {},
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            disab: true

        };
    }

    takefirstName(e: any) {
        this.setState({
            firstName: e.target.value
        });
    }

    takeLastName(e: any) {
        this.setState({
            lastName: e.target.value
        });
    }

    takeEmail(e: any) {
        this.setState({
            email: e.target.value
        });
    }


    private getQuestion(e: any) {
        jQuery.ajax({
            method: "POST",
            url: "http://192.168.4.75:3456/session",
            type: "jsonp",
            data: JSON.stringify({
                user: {
                    firstname: this.state.firstName,
                    lastname: this.state.lastName,
                    email: this.state.email,
                }
            }),
            contentType: "application/json; charset=utf-8",
            success: (session: any) => {
                this.setState({session});
                console.log(session);
                console.log(session._id);
            }
        });
        jQuery.ajax({
            method: "POST",
            url: "http://192.168.4.75:3456/5818a2bed42dbf4b0a3639da/check-answer",
            type: "jsonp",
            data: JSON.stringify({
                answer: "ERHJBC",
            }),
            contentType: "application/json; charset=utf-8",
            success: (result: any) => {
                console.log("check-answer", result);
            }
        });

        jQuery.ajax({
            method: "GET",
            url: "http://192.168.4.75:3456/5818a2bed42dbf4b0a3639da/question",
            type: "jsonp",
            contentType: "application/json; charset=utf-8",
            success: (result: any) => {
                console.log("question", result);
            }
        });
        jQuery.ajax({
            method: "GET",
            url: "http://192.168.4.75:3456/5818a2bed42dbf4b0a3639da/statistic",
            type: "jsonp",
            contentType: "application/json; charset=utf-8",
            success: (result: any) => {
                console.log("statistic", result);
            }
        });
        e.preventDefault();
    }

    alertSessionId() {
        alert(this.state.session._id);
    }

    render() {
        return (
            <div>
                <form action="">
                    <TextField
                        hintText="First Name"
                        floatingLabelText="First"
                        type="text" onChange={this.takefirstName.bind(this)}/> <br />
                    <TextField
                        hintText="Last Name"
                        floatingLabelText="Last"
                        type="text" onChange={this.takeLastName.bind(this)}/> <br />
                    <TextField
                        hintText="email"
                        floatingLabelText="EMAIL"
                        type="email" onChange={this.takeEmail.bind(this)}/> <br /> < br />
                    {/* <button onClick={this.getQuestion.bind(this)}>StartSesion</button>
                     <button >GetAjax</button>*/}
                </form>
            </div>
        );
    }
}

// todo remove
export default DashboardPage;