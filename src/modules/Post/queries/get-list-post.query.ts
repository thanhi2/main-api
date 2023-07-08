    import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
    import * as _ from 'lodash';
    import { Logger } from '@nestjs/common';
    import { PostController } from '../post.controller';
    import { PostRepository } from '../repository/post.repository';

    export class GetListPostQuery implements IQuery {
    public readonly userId: string;

    constructor(userId) {
        this.userId = userId;
    }
    }

    @QueryHandler(GetListPostQuery)
    export class GetListPostQueryHandler
    implements IQueryHandler<GetListPostQuery> {

    private readonly logger = new Logger(GetListPostQueryHandler.name);
    constructor(
        private readonly postRepository: PostRepository,
        // private readonly cacheService: CacheTodoService,
    ) { }

    async execute(
        query: GetListPostQuery,
    ): Promise<any> {
        this.logger.debug(`GetListPostQueryHandler`);
        let posts: PostController[];
        // let cache = await this.cacheService.getAll("todo")
        // if (!_.isEmpty(cache)) {
        //   return cache;
        // }
        posts = await this.postRepository.getList()
        // todos = result.map(elem => new Todo(elem))
        // await this.cacheService.create('todo', todos.map(elem => {
        //   return {
        //     key: elem.id,
        //     value: elem
        //   }
        // }))
        return posts
    }
    }
