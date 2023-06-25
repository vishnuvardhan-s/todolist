import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AppState, readPersistedState } from '@shared';
import { TodoList } from './components/TodoList';
import { Welcome } from './components/Welcome';
import { LoadingState } from './components/states/LoadingState';

function App() {
    const [showWelcomeScreen, setShowWelcomeScreen] = useState<AppState>(AppState.LOADING);

    useEffect(() => {
        const shouldShowWelcomeScreen = async () => {
            const welcomeScreen = await readPersistedState('welcomeScreen');
            if (welcomeScreen === 'shown') {
                setShowWelcomeScreen(AppState.TODOLIST);
            } else {
                setShowWelcomeScreen(AppState.WELCOME);
            }
        };
        shouldShowWelcomeScreen();
    }, []);

    const showScreen = () => {
        switch (showWelcomeScreen) {
            case AppState.WELCOME:
                return <Welcome setShowWelcomeScreen={setShowWelcomeScreen} />;
            case AppState.TODOLIST:
                return (
                    <DndProvider backend={HTML5Backend}>
                        <TodoList />
                    </DndProvider>
                );
            case AppState.LOADING:
            default:
                return <LoadingState />;
        }
    };

    return (
        <main className="flex flex-col items-center justify-center mt-8 ">
            <div className="flex flex-row mb-3 items-center justify-center text-center">
                <img className="h-16 w-16" src="/images/icon256.png" alt="Panda Icon Logo" />
                <h1 className="font-virgil text-3xl ml-3">Todos</h1>
            </div>
            {showScreen()}
        </main>
    );
}

export default App;
