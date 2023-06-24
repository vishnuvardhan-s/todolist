import type { FC } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { TodoItem } from '@shared';
import { useTodosStore } from '@store';
import { LoadingState } from './states/LoadingState';
import { Todo } from './TodoItem';
import { AddNewTodo } from './AddNewTodo';

export const TodoList: FC = () => {
    const [todosLoading, setTodosLoading] = useState(true);
    const todos = useTodosStore((state) => state.todos);
    const setTodos = useTodosStore((state) => state.setTodos);

    const renderTodo = useCallback((todo: TodoItem, index: number) => {
        return <Todo key={todo.id} index={index} id={todo.id} text={todo.text} />;
    }, []);

    useEffect(() => {
        const loadTodos = async () => {
            // this is just to give user a feedback that something is loading
            await new Promise((resolve) => setTimeout(resolve, 200));
            setTodosLoading(false);
        };
        loadTodos();
    }, [setTodos]);

    return useMemo(() => {
        if (todosLoading) {
            return <LoadingState />;
        }
        return (
            <div className="flex flex-col">
                <AddNewTodo />
                <ul>{todos.map((todo, i) => renderTodo(todo, i))}</ul>
            </div>
        );
    }, [renderTodo, todos, todosLoading]);
};
