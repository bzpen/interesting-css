import { createContext } from 'react';

// 创建一个 context 对象
export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });
