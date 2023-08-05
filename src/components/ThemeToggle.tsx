import { Svg } from '@/components/Svg';

import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';

const ThemeToggle: FC = () => {
  const { setTheme, theme } = useTheme();

  const [sysMode, setSysMode] = useState('');
  useEffect(() => {
    const matchDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setSysMode(matchDarkMode ? 'dark' : 'light');
  }, []);

  return (
    <div
      className="fixed left-0 bottom-14 z-50 rounded-r-full border p-1 pl-3 supports-[backdrop-filter:blur(0px)]:backdrop-blur 
      border-gray-900/50 bg-gray-900 supports-[backdrop-filter:blur(0px)]:bg-gray-900/40
          dark:border-gray-50/30 dark:bg-gray-50 dark:supports-[backdrop-filter:blur(0px)]:bg-gray-50/40
      "
    >
      <button
        className="flex aspect-square w-10 items-center justify-center rounded-full border border-gray-900/30 bg-gray-900 p-2 text-gray-50 dark:border-gray-50/30 dark:bg-gray-50 dark:text-gray-900"
        onClick={() =>
          setTheme(
            theme === 'light'
              ? 'dark'
              : sysMode === 'light' && theme === 'system'
              ? 'dark'
              : 'light'
          )
        }
      >
        <Svg.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Svg.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Dark and Light Mode</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
