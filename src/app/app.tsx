import * as React from "react";
import * as ReactDom from "react-dom";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {Router, IndexRoute, Route, hashHistory} from "react-router";
import {Dashboard} from "./Dashboard";
import {Player} from "./Player";
import {PlayerPage} from "./page/PlayerPage";
import {ListPage} from "./page/ListPage";
import {SearchPage} from "./page/SearchPage";
import {ClockPage} from "./page/ClockPage";

injectTapEventPlugin();

// <Route path="/" component={Dashboard}>
//     <IndexRoute component={DashboardPage}/>
//     <Route path="issues" component={IssuePage}/>
//     <Route path="users-statistics" component={UsersStatisticsPage}/>
// </Route>

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Player}>
            <IndexRoute component={SearchPage}/>
            <Route path="player" component={PlayerPage}/>
            <Route path="list" component={ListPage}/>
            <Route path="clock" component={ClockPage}/>
        </Route>
    </Router>,
    document.getElementById("app")
);
