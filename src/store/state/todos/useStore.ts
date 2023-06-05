import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AppState } from '../../types/AppState';
import { Item } from '@shared';

export const useTodosStore = create<AppState>()(
    devtools(
        persist(
            (set) => ({
                // state
                todos: [],

                // actions
                setTodos: (newTodos: Item[]) => {
                    set({ todos: newTodos });
                },
                updateTodosOrder: (dragIndex: number, hoverIndex: number) =>
                    set((state) => {
                        const newTodos = [...state.todos];
                        [newTodos[dragIndex], newTodos[hoverIndex]] = [newTodos[hoverIndex], newTodos[dragIndex]];
                        return { todos: newTodos };
                    }),
            }),
            {
                name: 'todolist',
            }
        )
    )
);
