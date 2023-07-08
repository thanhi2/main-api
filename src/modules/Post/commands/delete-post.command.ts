import { Logger } from "@nestjs/common";
import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { CreateLogEvent } from "../../log/events/create-log.event";
import { Log } from "../../log/repository/log.model";
import { Post } from '../repository/post.model';
import { PostRepository } from "../repository/post.repository";
import { DeletePostDoneEvent } from "../events/delete-post-done.events";

export class DeletePostCommand {
    constructor(
        public readonly id: number,
        public readonly userId: string,
    ) { }

}

@CommandHandler(DeletePostCommand)
export class DeletePostCommandHandler
    implements ICommandHandler<DeletePostCommand> {

    private readonly logger = new Logger(DeletePostCommandHandler.name);

    constructor(
        private readonly eventBus: EventBus,
        private readonly postRepository: PostRepository,
    ) { }

    async execute(command: DeletePostCommand) {
        this.logger.debug(`DeletePostCommandHandler`);
        let post = new Post(command)
        let log = new Log({
            key_unit: "post",
            key_item: command.id,
            message: "delete",
            user: command.userId
        })
        await this.postRepository.delete(post)
        this.eventBus.publish(new DeletePostDoneEvent(post))
        this.eventBus.publish(new CreateLogEvent(log))
        return {}
    }
}
