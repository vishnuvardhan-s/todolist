import { isCodeRunningAsExtension } from './ExtensionUtils';

export const readPersistedState = async (key: string) => {
    if (isCodeRunningAsExtension()) {
        const result = await chrome.storage.sync.get([key]);
        return result[key];
    } else {
        return localStorage.getItem(key);
    }
};

export const updatePersistedState = async (key: string, value: string) => {
    if (isCodeRunningAsExtension()) {
        await chrome.storage.sync.set({ [key]: value });
    } else {
        localStorage.setItem(key, value);
    }
};
