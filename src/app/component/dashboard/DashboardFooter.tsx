import * as React from "react";

interface IDashboardFooterProps {
}

interface IDashboardFooterState {
    open: boolean;
}

const STATE_DEFAULT_VALUE: IDashboardFooterState = {
    open: false,
};

export class DashboardFooter extends React.Component<IDashboardFooterProps, IDashboardFooterState> {

    constructor(props: IDashboardFooterProps, context: any) {
        super(props, context);
        this.state = STATE_DEFAULT_VALUE;
    }

    render() {
        return (
            <div>
                Footer
            </div>
        );
    }
}
