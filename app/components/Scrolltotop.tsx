import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { MdArrowUpward } from "react-icons/md";
import { useTheme } from "~/context/theme";

const Scrolltotop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll event to toggle visibility of the button
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <>
          <button
            onClick={scrollToTop}
            title="Go to Top"
            className="fixed bottom-6 right-6 xxs:p-1 md:p-2 bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 rounded hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-400 dark:hover:text-gray-900 transition-colors duration-200"
            aria-label="Scroll to Top"
          >
            <MdArrowUpward />
          </button>
          <button
            onClick={toggleTheme}
            // className="text-2xl text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            title={theme === "light" ? "Dark Mode" : "Light Mode"}
            className="fixed xxs:right-6 md:right-7 text-2xl text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            aria-label="Toggle Theme"
            style={{ bottom: "4.4rem" }}
          >
            {theme === "light" ? (
              <IoMdMoon className="text-md" />
            ) : (
              <IoSunny className="text-md text-yellow-500" />
            )}
          </button>
        </>
      )}
    </>
  );
};

export default Scrolltotop;
