import { Item } from '@shared';

export interface AppState {
    todos: Item[];
    setTodos: (newTodos: Item[]) => void;
    updateTodosOrder: (dragIndex: number, hoverIndex: number) => void;
}
