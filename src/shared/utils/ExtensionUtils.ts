export const isCodeRunningAsExtension = () => {
    return window.chrome && chrome.runtime && chrome.runtime.id;
};
