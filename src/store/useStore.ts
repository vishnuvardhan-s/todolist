import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AppState } from './types/AppState';
import { TodoItem, TodoState } from '@shared';

export const useTodosStore = create<AppState>()(
    devtools(
        persist(
            (set) => ({
                // state
                todos: [],

                // actions
                setTodos: (newTodos: TodoItem[]) => {
                    set({ todos: newTodos });
                },
                updateTodosOrder: (dragIndex: number, hoverIndex: number) =>
                    set((state) => {
                        const newTodos = [...state.todos];
                        [newTodos[dragIndex], newTodos[hoverIndex]] = [newTodos[hoverIndex], newTodos[dragIndex]];
                        return { todos: newTodos };
                    }),
                removeTodo: (index: number) =>
                    set((state) => {
                        const newTodos = [...state.todos];
                        newTodos.splice(index, 1);
                        return {
                            todos: newTodos,
                        };
                    }),
                updateTodo: (index: number, updatedText: string) =>
                    set((state) => {
                        const newTodos = [...state.todos];
                        newTodos[index].text = updatedText;
                        return {
                            todos: newTodos,
                        };
                    }),
                updateTodoState: (index: number, todoState: TodoState) =>
                    set((state) => {
                        const newTodos = [...state.todos];
                        switch (todoState) {
                            case TodoState.TODO:
                                newTodos[index].todoState = TodoState.DONE;
                                newTodos.push(newTodos.splice(index, 1)[0]);
                                return {
                                    todos: newTodos,
                                };
                            case TodoState.DONE:
                                newTodos[index].todoState = TodoState.TODO;
                                newTodos.unshift(newTodos.splice(index, 1)[0]);
                                return {
                                    todos: newTodos,
                                };
                            default:
                                return {
                                    todos: newTodos,
                                };
                        }
                    }),
            }),
            {
                name: 'todolist',
            }
        )
    )
);
