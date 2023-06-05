import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TodoList } from './components/TodoList';

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <TodoList />
        </DndProvider>
    );
}

export default App;
