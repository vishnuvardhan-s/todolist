import { Item } from '@shared';

export interface AppState {
    todos: Item[];
    setTodos: (newTodos: Item[]) => void;
    updateTodosOrder: (dragIndex: number, hoverIndex: number) => void;
    removeTodo: (index: number) => void;
    updateTodo: (index: number, updatedTodo: string) => void;
}
