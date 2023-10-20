import { useEffect, useRef, useState } from 'react';
import { useTodosStore } from '@store';

export const AddNewTodo = () => {
    const [todoText, setTodoText] = useState<string>('');
    const inputDiv = useRef<HTMLDivElement>(null);

    const addTodo = useTodosStore((state) => state.addTodo);

    useEffect(() => {
        inputDiv.current?.focus();
    }, []);

    const handleClick = () => {
        if (todoText !== '') {
            addTodo(todoText);
            setTodoText('');
            const div = inputDiv.current;
            if (div) div.textContent = '';
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
        setTodoText(e.target.textContent ?? '');
    };

    return (
        <li id="new-todo" className="flex flex-row items-center justify-start border border-gray-900 rounded-lg bg-white mb-2">
            <button
                onClick={handleClick}
                className="w-5 h-5 ml-3 leading-5 bg-white font-virgil font-thin text-black border border-black rounded-full cursor-default"
            >
                +
            </button>
            <div
                ref={inputDiv}
                data-placeholder="typing..."
                contentEditable={true}
                className="font-virgil mx-4 my-2 pl-2 py-1 w-56 rounded-lg sm:w-64 md:w-72 lg:w-80 resize-y"
                onInput={handleChange}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                    if (e.key === 'Enter') {
                        handleClick();
                        e.preventDefault();
                    }
                }}
                autoFocus
            ></div>
        </li>
    );
};
