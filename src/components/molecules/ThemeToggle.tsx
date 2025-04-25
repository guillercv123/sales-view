// ThemeToggle.tsx
import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full shadow"
            aria-label="Toggle Theme"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};
