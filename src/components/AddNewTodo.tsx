import { useEffect, useState } from 'react';
import { useTodosStore } from '@store';

const sarcasticAddNewTodoMessage = [
    'Oh sure, add more...',
    'Ah, Just what I needed...',
    "As if I'm not busy enough...",
    'Because I have nothing else to do...',
    'Great, more work...',
    "Can't wait to add to the list...",
    'Oh joy, more tasks...',
    'Just when I thought we were done...',
    'Because I love being overwhelmed...',
    'Like I have time...',
];

export const AddNewTodo = () => {
    const [randomPlaceholder, setRandomPlaceholder] = useState<string>('');
    const [todoText, setTodoText] = useState<string>('');

    const addTodo = useTodosStore((state) => state.addTodo);

    useEffect(() => {
        setRandomPlaceholder(sarcasticAddNewTodoMessage[Math.floor(Math.random() * sarcasticAddNewTodoMessage.length)]);
    }, []);

    const handleClick = () => {
        addTodo(todoText);
        setTodoText("");
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value);

    return (
        <li id="new-todo" className="flex flex-row items-center justify-start border border-gray-900 rounded-lg bg-white mb-2">
            <button onClick={handleClick} className="w-5 h-5 ml-2 leading-5 bg-yellow-200 font-virgil font-thin text-gray-600 border border-black rounded-full cursor-default">
                +
            </button>
            <input
                className="font-virgil outline-transparent mx-4 my-2 pl-2 py-1 w-56 sm:w-64 md:w-72 lg:w-80"
                type="text"
                value={todoText}
                onChange={handleChange}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleClick()}
                placeholder={randomPlaceholder}
                autoFocus
            />
        </li>
    );
};
