import type { FC } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { TodoItem } from '@shared';
import { useTodosStore } from '@store';
import { defaultTodos } from '@assets';
import { LoadingIndicator } from './LoadingIndicator';
import { EmptyTodoState } from './EmptyTodoState';
import { Todo } from './TodoItem';

export const TodoList: FC = () => {
    const [todosLoading, setTodosLoading] = useState(true);
    const todos = useTodosStore((state) => state.todos);
    const setTodos = useTodosStore((state) => state.setTodos);

    const renderTodo = useCallback((todo: TodoItem, index: number) => {
        return <Todo key={todo.id} index={index} id={todo.id} text={todo.text} />;
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setTodos(defaultTodos);
            setTodosLoading(false);
        }, 1000);
    }, [setTodos]);

    return useMemo(
        () => (todosLoading ? <LoadingIndicator /> : todos.length === 0 ? <EmptyTodoState /> : <ul>{todos.map((todo, i) => renderTodo(todo, i))}</ul>),
        [renderTodo, todos, todosLoading]
    );
};
