import { TodoState } from "@shared";
import { useTodosStore } from "@store";

interface TodoIconProps {
    index: number;
}

export const TodoIcon = ({ index }: TodoIconProps) => {
    const updateTodoState = useTodosStore((state) => state.updateTodoState);

    return (
        <span
            className="h-5 w-5 ml-2 bg-white border border-black border-solid rounded-full inline-block cursor-default"
            onClick={() => {
                updateTodoState(index, TodoState.DONE);
            }}
        ></span>)
}

