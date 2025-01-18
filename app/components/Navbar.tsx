import { useTheme } from "~/context/theme";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center pl-4 pr-4 pt-3 pb-3 bg-white dark:bg-gray-950">
      <h1 className="xxs:text-sm md:text-xl font-bold font-mono text-gray-900 dark:text-gray-100">
        hashtag tech.
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? (
          <IoMdMoon className="text-gray-800" />
        ) : (
          <IoSunny className="text-yellow-300" />
        )}
      </button>
    </nav>
  );
}
