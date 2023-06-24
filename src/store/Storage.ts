import { isCodeRunningAsExtension } from '@shared';
import { StateStorage } from 'zustand/middleware';

export const useCustomStorage = (): StateStorage => {
    if (isCodeRunningAsExtension()) {
        return {
            getItem: async (name: string) => {
                const result = await chrome.storage.sync.get([name]);
                return result[name];
            },
            setItem: async (name: string, value: string) => {
                await chrome.storage.sync.set({ [name]: value });
            },
            removeItem: async (name: string) => {
                await chrome.storage.sync.remove([name]);
            },
        };
    }
    return localStorage;
};
