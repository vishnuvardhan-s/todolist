import { TodoItem, TodoState } from '@shared';

export interface AppState {
    todos: TodoItem[];
    setTodos: (newTodos: TodoItem[]) => void;
    updateTodosOrder: (dragIndex: number, hoverIndex: number) => void;
    removeTodo: (index: number) => void;
    updateTodo: (index: number, updatedTodo: string) => void;
    updateTodoState: (index: number, newState: TodoState) => void;
    addTodo: (text: string) => void;
}
