import * as React from "react";
import {IssueService} from "../service/IssueService";
import LinearProgress from "material-ui/LinearProgress";
import {Card, CardHeader, CardText} from "material-ui/Card";
import Paper from "material-ui/Paper";
import {StaticConversation} from "../component/conversation/StaticConversation";


interface IIssuePageProps {
}

interface IIssuePageState {
    loading: boolean;
    issues: any[];
}

const STATE_DEFAULT_VALUE: IIssuePageState = {
    loading: true,
    issues: [],
};

export class IssuePage extends React.Component<IIssuePageProps, IIssuePageState> {

    private issueService: IssueService;

    constructor(props: IIssuePageProps, context: any) {
        super(props, context);
        this.state = STATE_DEFAULT_VALUE;
        this.issueService = new IssueService();
        this.loadIssues();
    }

    private loadIssues() {
        this.issueService.getIssues()
            .then((issues: any[]) => {
                this.setState({
                    loading: false,
                    issues: issues,
                });
            });
    }

    render() {
        if (this.state.loading) {
            return (<LinearProgress/>);
        }
        const issues: any = [];
        this.state.issues.forEach((issue, i) => {
            issue.lastTransactions.sort((a: any, b: any) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime());
            issues.push(
                <Card key={i}>
                    <CardHeader
                        title={`${issue.user.firstname} ${issue.user.lastname}`.trim()}
                        subtitle={issue.date.toString()}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        <StaticConversation conversation={issue.lastTransactions}/>
                    </CardText>
                </Card>
            );
        });
        return (<div>{issues}</div>);
    }
}
