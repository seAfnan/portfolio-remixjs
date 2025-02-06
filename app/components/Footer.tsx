import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    { href: "https://twitter.com/afnan_a_x", icon: <FaTwitter /> },
    { href: "https://github.com/seAfnan", icon: <FaGithub /> },
    { href: "https://linkedin.com/in/afnan-se", icon: <FaLinkedin /> },
    { href: "https://bsky.app/profile/elements.red", icon: <SiBluesky /> },
  ];

  return (
    <footer className="bg-indigo-200 dark:bg-black text-gray-400 py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Social Media Icons */}
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="xxs:text-lg md:text-2xl text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-800 dark:text-gray-300 text-center xxs:block md:inline">
          Afnan Ahmad <span className="xxs:hidden md:inline">•</span>{" "}
          <span className="xxs:block md:inline">
            &copy; {new Date().getFullYear()} • All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
