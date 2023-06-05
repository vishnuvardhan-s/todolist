import type { Identifier, XYCoord } from 'dnd-core';
import type { FC } from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DeleteIcon, TodoIcon } from './Icons';

const ItemTypes = {
    TODO: 'todo',
};

export interface TodoProps {
    id: string;
    text: string;
    index: number;
    moveTodo: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
    index: number;
    id: string;
    type: string;
}

export const Todo: FC<TodoProps> = ({ id, text, index, moveTodo }) => {
    const ref = useRef<HTMLLIElement>(null);
    const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
        accept: ItemTypes.TODO,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveTodo(dragIndex, hoverIndex);

            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.TODO,
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;

    drag(drop(ref));

    return (
        <li ref={ref} style={{opacity}} className="flex flex-row items-center justify-center border border-dashed border-gray-700 rounded-lg mb-2 bg-white">
            <TodoIcon />
            <p
                className="font-virgil px-4 py-2 w-60 cursor-move"
                data-handler-id={handlerId}
            >
                {text}
            </p>
            <DeleteIcon />
        </li>
    );
};
