import { useTheme } from "~/context/theme";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { Link, useLocation } from "@remix-run/react";
import { IoIosGitMerge } from "react-icons/io";
import { GrProjects } from "react-icons/gr";

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
    <nav className="flex justify-between items-center px-6 py-3 bg-indigo-400 dark:bg-gray-950 shadow">
      {/* Centered Links */}
      <div className="flex-1 flex justify-center space-x-2">
        {links.map(({ href, label, icon }) => {
          const isActive = location.pathname === href;

          return (
            <Link
              key={href}
              to={href}
              className={`flex items-center gap-2 px-3 py-1 rounded-sm border transition-colors duration-150 xxs:text-sm md:text-base
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
      </div>
      {/* Right Section (Contribute & Theme Toggle) */}
      <div className="flex items-center space-x-1">
        <a
          href="https://github.com/seAfnan/portfolio-remixjs"
          target="_blank"
          title="Contribute"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-sm text-gray-800 bg-gray-300 hover:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-200 transition-colors duration-150 xxs:text-sm md:text-base"
        >
          <IoIosGitMerge />
        </a>

        <button
          onClick={toggleTheme}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          className="flex items-center gap-2 px-3 py-2 rounded-sm text-gray-800 bg-gray-300 hover:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-200 transition-colors duration-150 xxs:text-sm md:text-base"
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
