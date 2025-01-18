import { useTheme } from "~/context/theme";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center pl-4 pr-4 pt-3 pb-3 bg-white dark:bg-gray-950">
      <h1 className="cursor-default xxs:text-sm md:text-xl font-bold font-mono text-gray-900 dark:text-gray-100">
        hashtag tech.
      </h1>
      <div className="flex items-center space-x-2">
        <a
          href="https://x.com/afnan_a_x"
          className="cursor-default xxs:p-1 md:p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors duration-100"
          target="_blank"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://linkedin.com/in/afnan-se"
          className="cursor-default xxs:p-1 md:p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors duration-100"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/seAfnan"
          className="cursor-default xxs:p-1 md:p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors duration-100"
          target="_blank"
        >
          <FaGithub />
        </a>
        <button
          onClick={toggleTheme}
          className="cursor-default xxs:p-1 md:p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors duration-100"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <IoMdMoon className="text-gray-800" />
          ) : (
            <IoSunny className="text-yellow-300" />
          )}
        </button>
      </div>
    </nav>
  );
}
