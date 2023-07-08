import { Logger } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { Log } from "src/modules/log/repository/log.model";
import { Post } from "../repository/post.model";
import { CreatePostCommand } from '../commands/create-post.command';

export class CreatePostDoneEvent {
    constructor(
        public readonly todo: Post,
    ) { }
}


@EventsHandler(CreatePostDoneEvent)
export class CreatePostDoneEventHandler implements IEventHandler<CreatePostDoneEvent> {
    private readonly logger = new Logger(CreatePostDoneEventHandler.name);
    handle(event: CreatePostDoneEvent) {
        this.logger.debug(`CreatePostDoneEvent`);
        return Promise.resolve();
    }
}
