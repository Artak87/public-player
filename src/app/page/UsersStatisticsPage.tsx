import * as React from "react";
import {UsersStatisticsService} from "../service/UsersStatisticsService";
import LinearProgress from "material-ui/LinearProgress";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";


const style = {
    loading: {
        position: "absolute",
    }
};

interface IUsersStatisticsProps {

}

interface IUsersStatisticsState {
    loading: boolean;
    statistics: any[];
}

const STATE_DEFAULT_VALUE: IUsersStatisticsState = {
    loading: true,
    statistics: [],
};


export class UsersStatisticsPage extends React.Component<IUsersStatisticsProps, IUsersStatisticsState> {

    private usersStatisticsService: UsersStatisticsService;

    constructor(props: IUsersStatisticsState, context: any) {
        super(props, context);
        this.state = STATE_DEFAULT_VALUE;
        this.usersStatisticsService = new UsersStatisticsService();
        this.loadStatistics();
    }

    private loadStatistics() {
        this.usersStatisticsService.getUsersStatistics()
            .then((data: {totalCount: number, list: any[]}) => {
                this.setState({
                    loading: false,
                    statistics: data.list,
                });
            });
    }

    render() {
        if (this.state.loading) {
            return (<LinearProgress/>);
        }
        return (
            <Table
                fixedHeader={false}
                selectable={false}
            >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={false}
                >
                    <TableRow>
                        <TableHeaderColumn>User</TableHeaderColumn>
                        <TableHeaderColumn>Dictionary</TableHeaderColumn>
                        <TableHeaderColumn>Lang</TableHeaderColumn>
                        <TableHeaderColumn>Section</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                >
                    {this.state.statistics.map((statistic, i) => {
                        return (
                            <TableRow key={i}>
                                <TableRowColumn>{`${statistic.firstname} ${statistic.lastname}`.trim()}</TableRowColumn>
                                <TableRowColumn>{statistic.currentDictionary}</TableRowColumn>
                                <TableRowColumn>{statistic.currentLang}</TableRowColumn>
                                <TableRowColumn>{statistic.currentSection}</TableRowColumn>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        );
    }
}
