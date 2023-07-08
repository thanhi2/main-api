import { CreateTodoDoneEventHandler } from "src/modules/todo/events/create-todo-done.event";
import { DeleteTodoDoneEventHandler } from "src/modules/todo/events/delete-todo-done.event";
import { UpdateTodoDoneEventHandler } from "src/modules/todo/events/update-todo-done.event";

export const EventHandlers = [
    CreateTodoDoneEventHandler,
    UpdateTodoDoneEventHandler,
    DeleteTodoDoneEventHandler,
];
