import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

// 提供一个自定义钩子来访问 context
export const useThemeContext = () => useContext(ThemeContext);
