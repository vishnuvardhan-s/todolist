import { TodoState } from '../enums/Todo';

export interface TodoItem {
    id: string;
    text: string;
    todoState: TodoState;
}
