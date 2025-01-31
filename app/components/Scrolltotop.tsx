import { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

const Scrolltotop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 xxs:p-1 md:p-2 bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 rounded hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-400 dark:hover:text-gray-900 transition-colors duration-200"
          aria-label="Scroll to Top"
        >
          <MdArrowUpward />
        </button>
      )}
    </>
  );
};

export default Scrolltotop;
