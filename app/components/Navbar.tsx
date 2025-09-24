import { useTheme } from "~/context/theme";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { Link, useLocation } from "@remix-run/react";
import { IoIosGitMerge } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { RiRobot2Fill } from "react-icons/ri"; // Add this import at the top

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const links = [
    {
      href: "/",
      icon: <GrProjects className="text-md xxs:hidden xs:block" />,
      label: "Projects",
      isInternal: true,
      title: "Projects",
    },
    {
      href: "/hire-me",
      icon: <FaHandshake className="text-md xxs:hidden xs:block" />,
      label: "Hire me",
      isInternal: true,
      title: "Hire me",
    },
    /* {
      href: "/about",
      icon: <FaUser className="text-md xxs:hidden xs:block" />,
      label: "About",
      isInternal: true,
      title: "About me",
    },
    {
      href: "https://x.com/afnan_a_x",
      icon: <FaXTwitter />,
      isInternal: false,
      title: "Twitter",
    },
    {
      href: "https://bsky.app/profile/elements.red",
      icon: <SiBluesky />,
      isInternal: false,
      title: "Bluesky",
    },
    {
      href: "https://linkedin.com/in/afnan-se",
      icon: <FaLinkedin />,
      isInternal: false,
      title: "LinkedIn",
    },
    {
      href: "https://github.com/seAfnan",
      icon: <FaGithub />,
      isInternal: false,
      title: "GitHub",
    }, */
  ];

  return (
    <nav className="flex justify-between items-center xxs:px-2 md:px-6 py-3 bg-indigo-300 dark:bg-gray-950 shadow">
      {/* Centered Links */}
      <div className="flex-1 flex justify-center xxs:space-x-1 md:space-x-3">
        {links.map(({ href, label, icon }) => {
          const isActive = location.pathname === href;

          return (
            <Link
              key={href}
              to={href}
              className={`flex items-center gap-2 px-3 xxs:py-1.5 md:py-1 rounded-sm border transition-colors duration-150 xxs:text-xs md:text-base
                ${
                  isActive
                    ? "bg-gray-300 hover:bg-gray-200 text-gray-900 dark:bg-gray-300 dark:hover:bg-gray-200 dark:text-gray-900"
                    : "text-gray-900 dark:text-gray-200 hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-300 dark:hover:text-gray-900"
                }
              `}
            >
              {icon}
              <span>{label}</span>
            </Link>
          );
        })}
        <a
          href="https://elements.red/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-3 xxs:py-1.5 md:py-1 xxs:text-xs md:text-sm font-bold bg-white text-gray-900 rounded-sm overflow-hidden group inline-flex items-center justify-center"
        >
          <span className="relative z-10">
            <span className="xxs:hidden md:inline">
              el
              <span className="text-red-600">
                e<span className="xxs:inline md:hidden">.</span>
              </span>
              ments.
            </span>
            <span className="xxs:inline md:hidden text-red-600">e.</span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          <span className="absolute -top-1 left-1/2 w-6 h-6 bg-red-500 rounded-full opacity-75 animate-wave"></span>
          <span className="absolute -bottom-1 right-1/2 w-6 h-6 bg-blue-500 rounded-full opacity-75 animate-wave"></span>
        </a>
        <a
          href="https://www.lifediary.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-3 xxs:py-1.5 md:py-1 xxs:text-xs md:text-sm font-bold bg-white text-gray-900 rounded-sm overflow-hidden group inline-flex items-center justify-center gap-1"
        >
          <RiRobot2Fill className="text-red-400 text-base md:text-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />

          <span className="relative z-10" style={{marginTop: "2px"}}>
            <span className="xxs:hidden md:inline">LifeDiary</span>
          </span>

          <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        </a>
      </div>
      {/* Right Section (Contribute & Theme Toggle) */}
      <div className="flex items-center space-x-1">
        <a
          href="https://github.com/seAfnan/portfolio-remixjs"
          target="_blank"
          title="Contribute"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-sm text-gray-800 bg-gray-300 hover:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-200 transition-colors duration-150 xxs:text-xs md:text-base"
        >
          <IoIosGitMerge />
        </a>

        <button
          onClick={toggleTheme}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          className="flex items-center gap-2 px-3 py-2 rounded-sm text-gray-800 bg-gray-300 hover:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-200 transition-colors duration-150 xxs:text-xs md:text-base"
        >
          {theme === "light" ? (
            <IoMdMoon className="text-md" />
          ) : (
            <IoSunny className="text-md text-yellow-500" />
          )}
        </button>
      </div>
    </nav>
  );
}
