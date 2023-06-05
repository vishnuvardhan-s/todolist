import type { Identifier, XYCoord } from 'dnd-core';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import classNames from 'classnames';
import { useTodosStore } from '@store';
import { TodoState } from '@shared';
import { TodoIcon } from './icons/TodoIcon';
import { DeleteIcon } from './icons/DeleteIcon';
import { TextEditor } from './TextEditor';

const ItemTypes = {
    TODO: 'todo',
};

export interface TodoProps {
    id: string;
    text: string;
    index: number;
}

interface DragItem {
    index: number;
    id: string;
    type: string;
}

export const Todo: FC<TodoProps> = ({ id, text, index }) => {
    const ref = useRef<HTMLLIElement>(null);

    const [showInputEle, setShowInputEle] = useState<boolean>(false);

    const updateTodo = useTodosStore((state) => state.updateTodo);
    const todoState = useTodosStore((state) => state.todos[index].todoState);
    const updateTodosOrder = useTodosStore((state) => state.updateTodosOrder);

    const moveTodo = (dragIndex: number, hoverIndex: number) => {
        updateTodosOrder(dragIndex, hoverIndex);
    };

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

            // [todo] see if this dropping can be stopped in some other way
            // ps: already tried canDrop, did not work somehow
            if (useTodosStore.getState().todos[hoverIndex].todoState === TodoState.DONE) {
                return;
            }

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
        canDrag: () => todoState === TodoState.TODO,
    });

    drag(drop(ref));

    const handleBlur = () => setShowInputEle(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => updateTodo(index, e.target.value);
    const handleDoubleClick = () => todoState === TodoState.TODO && setShowInputEle(true);
    const handleEnterClick = (e: React.KeyboardEvent<HTMLElement>) => e.key === 'Enter' && setShowInputEle(!showInputEle);

    return (
        <li
            id={id}
            ref={ref}
            tabIndex={0}
            className={classNames('flex flex-row items-center justify-center border border-dashed border-gray-700 rounded-lg bg-white mb-2', {
                'opacity-100': isDragging ? 0 : 1,
            })}
            data-handler-id={handlerId}
            onKeyDown={handleEnterClick}
        >
            <TodoIcon index={index} />
            <TextEditor
                index={index}
                value={text}
                showInputEle={showInputEle}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleDoubleClick={handleDoubleClick}
                handleEnterClick={handleEnterClick}
            />
            <DeleteIcon index={index} />
        </li>
    );
};
