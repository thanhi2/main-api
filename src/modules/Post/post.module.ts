    import { Module } from '@nestjs/common';
    import { CqrsModule } from '@nestjs/cqrs';
    import { ConfigModule } from '@nestjs/config';
    import { PostgresModule } from '../../lib/persistent/postgres/postgres.module';
    import { CacheModule } from '../cache/cache.module';

    import { DB } from '../../lib/persistent/connection-name';
    import { AppConfig } from '../../lib/config/app.config';
    import { QueryHandlers } from './queries';
    
    import { AssetsProvider } from '../../lib/shared/assets.provider';
    import { MyHttpModule } from '../../lib/infra/http/my-http.module';
    
import { PostRepository } from './repository/post.repository';
import { Post } from './repository/post.model';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { CommandHandlers } from './commands';
import { PostProxy } from './proxy/post.proxy';
import { EventHandlers } from './events';

    @Module({
    imports: [
        PostgresModule.forFeature(DB),
        ConfigModule.forFeature(AppConfig),
        CacheModule,
        MyHttpModule,
        CqrsModule,
    ],
    controllers: [PostController],
    providers: [
        AssetsProvider,
        PostRepository      ,
        PostService,
        PostProxy,
        ...QueryHandlers,
        ...CommandHandlers,
        ...EventHandlers,
        // PostSagas,
    ],
    exports: [
        PostService,
    ]
    })
    export class PostModule { }
