import { useEffect, useState } from 'react';

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

    useEffect(() => {
        setRandomPlaceholder(sarcasticAddNewTodoMessage[Math.floor(Math.random() * sarcasticAddNewTodoMessage.length)]);
    }, []);

    const handleClick = () => console.log('should add todo');

    return (
        <li id="new-todo" className="flex flex-row items-center justify-start border border-gray-900 rounded-lg bg-white mb-2">
            <button className="w-5 h-5 ml-2 leading-5 bg-cyan-300 font-virgil font-thin text-gray-600 border border-black rounded-full cursor-default">
                +
            </button>
            <input
                type="text"
                className="font-virgil mx-4 my-2 pl-2 py-1 w-56 sm:w-64 md:w-72 lg:w-80"
                onClick={handleClick}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key==='Enter' && handleClick()}
                placeholder={randomPlaceholder}
                autoFocus
            />
        </li>
    );
};
