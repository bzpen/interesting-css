import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../../context/themeContext';

const useTheme = () => {
    // 初始主题设为系统偏好
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState<'light' | 'dark'>(systemPrefersDark ? 'dark' : 'light');

    // 处理主题改变
    const handleThemeChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? 'dark' : 'light');
    };

    // 用来手动切换主题
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleThemeChange);

        // 清理
        return () => mediaQuery.removeEventListener('change', handleThemeChange);
    }, []);

    // 监听 theme 变化，更新 body 类
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return { theme, toggleTheme };
};

const Theme: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { theme, toggleTheme } = useTheme();

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default Theme;
