interface TextEditorProps {
    value: string;
    showInputEle: boolean;
    handleBlur: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDoubleClick: () => void;
    handleEnterClick: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const TextEditor: React.FC<TextEditorProps> = ({ value, showInputEle, handleChange, handleBlur, handleDoubleClick, handleEnterClick }) => {
    return (
        <span>
            {showInputEle ? (
                <input
                    className="font-virgil mx-4 my-2 pl-2 py-1 w-56"
                    type="text"
                    value={value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={handleEnterClick}
                    autoFocus
                />
            ) : (
                <p className="font-virgil break-words mx-4 my-2 pl-2 py-1 w-56" onDoubleClick={handleDoubleClick}>
                    {value}
                </p>
            )}
        </span>
    );
};
