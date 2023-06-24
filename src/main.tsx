import React from 'react';
import ReactDOM from 'react-dom/client';
import { isCodeRunningAsExtension } from '@shared';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

if (isCodeRunningAsExtension()) {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error: unknown) => console.error(error));
}
