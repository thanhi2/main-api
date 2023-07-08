import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { Log } from "src/modules/log/repository/log.model";
import { Post } from "../repository/post.model";

export class UpdatePostDoneEvent {
    constructor(
        public readonly todo: Post,
    ) { }
}


@EventsHandler(UpdatePostDoneEvent)
export class UpdatePostDoneEventHandler implements IEventHandler<UpdatePostDoneEvent> {
    handle(event: UpdatePostDoneEvent) {
        return Promise.resolve();
    }
}
