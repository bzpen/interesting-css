import { createContext, useContext } from 'react';

// 创建一个 context 对象
export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

// 提供一个自定义钩子来访问 context
export const useThemeContext = () => useContext(ThemeContext);
