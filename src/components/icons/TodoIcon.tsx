import { TodoState } from '@shared';
import { useTodosStore } from '@store';
import classNames from 'classnames';

interface TodoIconProps {
    index: number;
}

export const TodoIcon = ({ index }: TodoIconProps) => {
    const updateTodoState = useTodosStore((state) => state.updateTodoState);
    const todoState = useTodosStore((state) => state.todos[index].todoState);

    return (
        <span
            className={classNames(
                {
                    'h-5 w-5 ml-2 bg-red-300 border border-black border-solid rounded-full inline-block cursor-default': todoState === TodoState.TODO,
                },
                {
                    'h-5 w-5 ml-2 bg-green-300 border border-black border-solid rounded-full inline-block': todoState === TodoState.DONE,
                }
            )}
            onClick={() => updateTodoState(index, todoState)}
        ></span>
    );
};
