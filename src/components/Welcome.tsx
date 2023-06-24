import { updatePersistedState } from '@shared';

interface WelcomeProps {
    setShowWelcomeScreen: (showWelcomeScreen: boolean) => void;
}

export const Welcome = ({ setShowWelcomeScreen }: WelcomeProps) => {
    return (
        <div>
            <div className="font-virgil px-10 pt-2 pb-6 text-center tracking-wide leading-7 md:px-24 lg:px-80">
                A bare minimum to-do app which is perfect for people who want to stay focused on their tasks and avoid distractions. With just a few essential
                features, this app helps you to stay organized, prioritize your tasks, track progress, and stay motivated.
            </div>
            <div className="flex items-center justify-center">
                <button
                    onClick={async () => {
                        updatePersistedState("welcomeScreen", "shown");
                        setShowWelcomeScreen(false);
                    }}
                    className="font-virgil h-10 px-3 bg-black text-white rounded-md"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};
