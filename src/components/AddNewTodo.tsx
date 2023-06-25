import { useState } from 'react';
import { useTodosStore } from '@store';

export const AddNewTodo = () => {
    const [todoText, setTodoText] = useState<string>('');

    const addTodo = useTodosStore((state) => state.addTodo);

    const handleClick = () => {
        if (todoText !== '') {
            addTodo(todoText);
            setTodoText('');
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value);

    return (
        <li id="new-todo" className="flex flex-row items-center justify-start border border-gray-900 rounded-lg bg-white mb-2">
            <button
                onClick={handleClick}
                className="w-5 h-5 ml-3 leading-5 bg-white font-virgil font-thin text-black border border-black rounded-full cursor-default"
            >
                +
            </button>
            <input
                className="font-virgil mx-4 my-2 pl-2 py-1 w-56 rounded-lg sm:w-64 md:w-72 lg:w-80"
                type="text"
                value={todoText}
                onChange={handleChange}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleClick()}
                placeholder="typing...."
                autoFocus
            />
        </li>
    );
};
