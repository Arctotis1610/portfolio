import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggle = () => {
    setIsDarkMode((prev) => !prev);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center">
      <span className="mr-3 text-sm font-medium text-yellow-300 dark:text-white">
        <MdLightMode />
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDarkMode}
          onChange={() => toggle()}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-yellow-300">
          <MdDarkMode />
        </span>
      </label>
    </div>
  );
};

export default DarkMode;
