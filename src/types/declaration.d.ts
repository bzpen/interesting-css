declare module '*.less' {
    const content: { [className: string]: string };
    export default content;
}

declare global {
    interface Window {
        changeTheme?: () => void;
    }
}

export {};
