import {url} from "../helper";
import {ajax} from "jquery";

export class UsersStatisticsService {

    getUsersStatistics(): Promise<any> {
        return new Promise((resolve, reject) => {
            ajax({
                method: "GET",
                url: url("statistics"),
                type: "jsonp",
                contentType: "application/json; charset=utf-8",
            })
                .done(resolve)
                .fail(reject);
        });
    }
}
