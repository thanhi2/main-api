import { Logger } from "@nestjs/common";
import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { CreateLogEvent } from "../../log/events/create-log.event";
import { Log } from "../../log/repository/log.model";
import { Post } from '../repository/post.model';
import { PostRepository } from "../repository/post.repository";
import { CreatePostDoneEvent } from "../events/create-post-done.events";
import { CreatePostDto } from "../dto/post.dto";

export class CreatePostCommand {

    constructor(
        public readonly content: CreatePostDto,
        public readonly userId: string,
    ) { }

}

@CommandHandler(CreatePostCommand)
export class CreatePostCommandHandler
    implements ICommandHandler<CreatePostCommand> {

    private readonly logger = new Logger(CreatePostCommand.name);

    constructor(
        private readonly eventBus: EventBus,
        private readonly PostRepository: PostRepository,
    ) { }

    async execute(command: CreatePostCommand) {
    
        this.logger.debug(`CreatePostCommandHandler`);
        let post = command.content
        let result = await this.PostRepository.create(post)
        return result
    }
}
