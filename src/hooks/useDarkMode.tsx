import { useState, useEffect } from 'react';

const useDarkMode = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check if we're on the client side (in the browser)
    if (typeof window !== 'undefined') {
      // Check for saved theme preference or use media query as default
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      } else {
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    }
  }, []);

  useEffect(() => {
    // Update the document class when dark mode changes
    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
