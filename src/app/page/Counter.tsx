import * as React from "react";

const styles = {
    tableStyle: {
        border: "1px solid black",
        borderCollapse: "collapse",
        width: "124px",
    },
    tdstyle: {
        border: "1px solid black",
        borderCollapse: "collapse",
        display: "inline-table",
    }
};
export default class Counter extends React.Component<any, any > {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            value: []
        };
    }


    render() {
        let users: any = this.state.value.map((usert: any) => {
            return (
                <tr key={usert.id}>
                    <td key={usert.id} style={styles.tableStyle}>{usert.user}</td>
                    <td style={styles.tableStyle}>{usert.languages}</td>
                    <td style={styles.tableStyle}>{usert.levels}</td>
                    <td style={styles.tableStyle}>{usert.messages}</td>
                </tr>
            );
        });
        return (
            <table style={styles.tdstyle}>
                <tbody>
                <tr>
                    <th style={styles.tableStyle}>User</th>
                    <th style={styles.tableStyle}>Languages</th>
                    <th style={styles.tableStyle}>Levels</th>
                    <th style={styles.tableStyle}>Messages</th>
                </tr>
                {users}
                </tbody>
            </table>
        );
    }
}
