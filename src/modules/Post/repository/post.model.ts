import * as _ from "lodash";
import moment from "moment";
import { DATE } from "../../../lib/utils/date";

export class Post {
    public id: number;
    public title: string;
    public body: string;


    constructor(args?) {
        const {
            id = 0,
            title = "",
            body = "",

            
        } = args || {};
        this.id = id;
        this.title = title;
        this.body = body;

    }
}