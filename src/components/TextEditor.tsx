import classNames from 'classnames';
import { useTodosStore } from '@store';
import { TodoState } from '@shared';

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

    return (
        <span>
            {showInputEle ? (
                <input
                    className="font-virgil outline-transparent text-lg mx-4 my-2 pl-2 py-1 w-48 sm:w-56 md:w-64 lg:w-72"
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
                        'font-virgil break-words text-lg mx-4 my-2 pl-2 py-1 w-48 sm:w-56 md:w-64 lg:w-72',
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
