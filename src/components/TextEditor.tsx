import classNames from 'classnames';
import { useTodosStore } from '@store';
import { TodoState } from '@shared';
import { useEffect } from 'react';

interface TextEditorProps {
    index: number;
    value: string;
    showInputEle: boolean;
    handleBlur: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDoubleClick: () => void;
    handleEnterClick: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const TextEditor: React.FC<TextEditorProps> = ({ index, value, showInputEle, handleChange, handleBlur, handleDoubleClick, handleEnterClick }) => {
    const todoState = useTodosStore((state) => state.todos[index].todoState);
    const removeTodo = useTodosStore((state) => state.removeTodo);

    useEffect(() => {
        if (showInputEle === false && value === '') {
            removeTodo(index);
        }
    }, [showInputEle, removeTodo, value, index]);

    return (
        <span>
            {showInputEle ? (
                <input
                    className="font-virgil rounded-lg mx-4 my-2 pl-2 py-1 w-48 sm:w-56 md:w-64 lg:w-72"
                    type="text"
                    value={value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={handleEnterClick}
                    autoFocus
                />
            ) : (
                <p
                    tabIndex={0}
                    className={classNames(
                        'font-virgil break-words mx-4 my-2 pl-2 py-1 w-48 sm:w-56 md:w-64 lg:w-72',
                        { 'line-through': todoState === TodoState.DONE },
                        { 'no-underline': todoState === TodoState.TODO }
                    )}
                    onDoubleClick={handleDoubleClick}
                    onKeyDown={handleEnterClick}
                >
                    {value}
                </p>
            )}
        </span>
    );
};
