import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { Log } from "src/modules/log/repository/log.model";
import { Post } from "../repository/post.model";

export class DeletePostDoneEvent {
    constructor(
        public readonly todo: Post,
    ) { }
}


@EventsHandler(DeletePostDoneEvent)
export class DeletePostDoneEventHandler implements IEventHandler<DeletePostDoneEvent> {
    handle(event: DeletePostDoneEvent) {
        return Promise.resolve();
    }
}
