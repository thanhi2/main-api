import { Logger } from "@nestjs/common";
import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { CreateLogEvent } from "../../log/events/create-log.event";
import { Log } from "../../log/repository/log.model";
import { Post } from '../repository/post.model';
import { PostRepository } from "../repository/post.repository";
import { UpdatePostDoneEvent } from "../events/update-post-done.events";
import { UpdatePostDto } from "../dto/post.dto";

export class UpdatePostCommand {
    constructor(
        public readonly dto: UpdatePostDto,
        public readonly userId: string,
    ) { }

}

@CommandHandler(UpdatePostCommand)
export class UpdatePostCommandHandler
    implements ICommandHandler<UpdatePostCommand> {

    private readonly logger = new Logger(UpdatePostCommandHandler.name);

    constructor(
        private readonly eventBus: EventBus,
        private readonly postRepository: PostRepository,
    ) { }

    async execute(command: UpdatePostCommand) {
        this.logger.debug(`UpdatePostCommandHandler`);
        let post = command.dto
    
        await this.postRepository.update(post)
        return {}
    }
}
