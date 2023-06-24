import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { readPersistedState } from '@shared';
import { TodoList } from './components/TodoList';
import { Welcome } from './components/Welcome';

function App() {
    const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

    useEffect(() => {
        const shouldShowWelcomeScreen = async () => {
            const welcomeScreen = await readPersistedState('welcomeScreen');
            if (welcomeScreen === 'shown') {
                setShowWelcomeScreen(false);
            }
        };
        shouldShowWelcomeScreen();
    }, []);

    return (
        <main className="flex flex-col items-center justify-center mt-8 ">
            <div className="flex flex-row mb-3 items-center justify-center text-center">
                <img className="h-16 w-16" src="/images/icon256.png" alt="Panda Icon Logo" />
                <h1 className="font-virgil text-3xl ml-3">Todos</h1>
            </div>
            {showWelcomeScreen ? (
                <Welcome setShowWelcomeScreen={setShowWelcomeScreen} />
            ) : (
                <DndProvider backend={HTML5Backend}>
                    <TodoList />
                </DndProvider>
            )}
        </main>
    );
}

export default App;
