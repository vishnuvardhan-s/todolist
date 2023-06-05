import { draggableList } from '@shared';
import { useTodosStore } from '@store';

interface WarningDialogProps {
    index: number;
    setShowWarningDialog: (showWarningDialog: boolean) => void;
}

export const WarningDialog = ({ index, setShowWarningDialog }: WarningDialogProps) => {
    const removeTodo = useTodosStore((state) => state.removeTodo);

    const onYes = () => {
        draggableList('true');
        removeTodo(index);
        setShowWarningDialog(false);
    };

    const onNo = () => {
        draggableList('true');
        setShowWarningDialog(false);
    };

    return (
        <dialog
            onKeyDown={(e: React.KeyboardEvent<HTMLDialogElement>) => e.key === 'Escape' && onNo()}
            draggable={false}
            className="h-screen w-screen absolute top-0 left-0 flex justify-center bg-gray-600 bg-opacity-25 align-top select-text"
        >
            <div className="w-full flex justify-center h-auto">
                <div className="bg-white rounded-lg border border-dashed border-gray-700 shadow-md p-4 m-8 w-80 h-28">
                    <div>
                        <p className="font-virgil text-base">Are you sure you want to delete this Todo?</p>
                    </div>
                    <div className="flex flex-row">
                        <button
                            tabIndex={0}
                            className="font-virgil ml-6 mt-1 bg-gradient-red-button border border-solid border-black rounded-lg w-12 h-7 cursor-default"
                            onClick={onYes}
                            onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => e.key === 'Enter' && onYes()}
                        >
                            Yes
                        </button>
                        <button
                            tabIndex={0}
                            className="font-virgil ml-auto mr-6 mt-1 bg-gradient-green-button border border-solid border-black rounded-lg w-12 h-7 cursor-default"
                            onClick={onNo}
                            onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => e.key === 'Enter' && onNo()}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    );
};
