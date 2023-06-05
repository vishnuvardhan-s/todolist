import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Todo } from './TodoItem';
import { defaultTodos } from '../assets/defaultTodos.json';

const style = {
    width: 400,
};

export interface Item {
    id: string;
    text: string;
}

export interface ContainerState {
    todos: Item[];
}

export const TodoList: FC = () => {
    {
        const [todos, setTodos] = useState<Item[]>([]);

        const [todosLoading, setTodosLoading] = useState<boolean>(true);

        const moveTodo = useCallback((dragIndex: number, hoverIndex: number) => {
            setTodos((prevTodos) => {
                [prevTodos[dragIndex], prevTodos[hoverIndex]] = [prevTodos[hoverIndex], prevTodos[dragIndex]];
                return [...prevTodos];
            });
        }, []);

        const renderTodo = useCallback(
            (todo: Item, index: number) => {
                return <Todo key={todo.id} index={index} id={todo.id} text={todo.text} moveTodo={moveTodo} />;
            },
            [moveTodo]
        );

        useEffect(() => {
            setTimeout(() => {
                setTodos(defaultTodos);
                setTodosLoading(false);
            }, 1000);
        });

        return todosLoading ? <div>Loading...</div> : <div style={style}>{todos.map((todo, i) => renderTodo(todo, i))}</div>;
    }
};
