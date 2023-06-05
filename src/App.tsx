import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TodoList } from './components/TodoList';

function App() {
    return (
        <main className="flex items-center justify-center mt-8">
            <DndProvider backend={HTML5Backend}>
                <TodoList />
            </DndProvider>
        </main>
    );
}

export default App;
