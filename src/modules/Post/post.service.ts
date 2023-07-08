import { Injectable } from '@nestjs/common';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { GetListPostQuery } from './queries/get-list-post.query';
import { CreatePostCommand } from './commands/create-post.command';
import { UpdatePostCommand } from './commands/update-post.command';
import { DeletePostCommand } from './commands/delete-post.command';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
    

    @Injectable()
    export class PostService {
    constructor(
        // private readonly httpService: HttpService,
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus,
    ) { }

    getList(userId) {
        return this.queryBus.execute(new GetListPostQuery(userId))
    }

    create(dto:CreatePostDto, userId) {
        return this.commandBus.execute(new CreatePostCommand(dto, userId))
    }

    update(dto:UpdatePostDto, userId) {
        return this.commandBus.execute(new UpdatePostCommand(dto, userId))
    }

    delete(dto, userId) {
        return this.commandBus.execute(new DeletePostCommand(dto.id, userId))
    }
    }
