    import {
        Controller,
        Post,
        Request,
        HttpCode,
        Body,
        Query,
        Get,
        Put,
    } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, DeletePostDto, UpdatePostDto } from './dto/post.dto';
    
    
    @Controller('post')
    export class PostController {
        constructor(
        private readonly service: PostService,
        ) { }
    
        @HttpCode(200)
        @Get('get-list')
        async getList(@Query() query, @Request() req: any) {
        return this.service.getList(req.user.id);
        }
    
        @HttpCode(200)
        @Post('create')
        async create(@Body() body: CreatePostDto, @Request() req: any) {
        return this.service.create(body, req.user.id);
        }
    
        @HttpCode(200)
        @Put('update')
        async update(@Body() body: UpdatePostDto, @Request() req: any) {
        return this.service.update(body, req.user.id);
        }
    
        @HttpCode(200)
        @Post('delete')
        async delete(@Body() body: DeletePostDto, @Request() req: any) {
        return this.service.delete(body, req.user.id);
        }
    }
    