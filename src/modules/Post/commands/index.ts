import { CreatePostCommandHandler } from "./create-post.command";
import { DeletePostCommandHandler } from "./delete-post.command";
import { UpdatePostCommandHandler } from "./update-post.command";


export const CommandHandlers = [
    CreatePostCommandHandler,
    UpdatePostCommandHandler,
    DeletePostCommandHandler,
];
