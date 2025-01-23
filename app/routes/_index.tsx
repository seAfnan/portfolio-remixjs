import type { MetaFunction } from "@remix-run/node";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { CgTimelapse } from "react-icons/cg";
import { GoTasklist } from "react-icons/go";
import { RiResetLeftFill } from "react-icons/ri";
import { HiCommandLine } from "react-icons/hi2";
import { SiGoogleforms } from "react-icons/si";
import { FaListOl } from "react-icons/fa";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { WiMoonAltWaxingGibbous1 } from "react-icons/wi";
import { MdListAlt } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiLoginBoxFill } from "react-icons/ri";
import { PiGameControllerFill } from "react-icons/pi";
import { MdSportsCricket } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { MdOutlineDraw } from "react-icons/md";
import Typewriter from "typewriter-effect";

export const meta: MetaFunction = () => {
  return [
    { title: "Hashtag tech." },
    { name: "description", content: "Ideas with a new look." },
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen justify-center xxs:mt-10 md:mt-6">
      <div className="flex flex-col items-center gap-6">
        {/* <header className="flex flex-col items-center gap-6 px-4 sm:px-2 lg:px-4">
        </header> */}

        <div className="container mx-auto p-4 pt-0">
          <div className="max-w-screen-lg">
            {/* <h2 className="text-xl font-bold text-gray-800 font-mono dark:text-gray-100">
              Greetings👋
            </h2> */}
            {/* <hr /> */}
            <h1 className="cursor-default text-sm sm:text-base md:text-md font-mono mt-2">
              <span>
                <div className="items-center">
                  <span className="mr-2 text-2xl text-gray-800 dark:text-gray-300">
                    <span className="">Hi,</span> I'm{" "}
                    <span className="font-bold">Afnan</span>
                  </span>
                  <hr className="mb-4 md:mr-3" />
                  <span className="flex text-amber-400">
                    I am a&nbsp;
                    <Typewriter
                      options={{
                        strings: [
                          " software engineer.",
                          " javascript developer.",
                          " freelancer.",
                          // " full stack developer.",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                      }}
                    />
                  </span>
                </div>
                {/* <hr className="mb-4" /> */}
                <span className="text-gray-800 dark:text-gray-300">
                  I have an extensive experience in building modern web
                  applications. I specialize in using cutting-edge technologies
                  to create innovative and efficient solutions. My focus is on
                  delivering high-quality projects that meet user and client
                  needs.
                </span>{" "}
                <span className="hover:underline text-blue-400">
                  See my work below
                </span>
              </span>
            </h1>
          </div>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxs:mt-6 sm:mt-10">
            {resources.map((resource, index) => (
              <a
                href={resource.href}
                target="_blank"
                key={index}
                className="relative flex flex-col items-start p-4 bg-white dark:bg-neutral-900 border-t border-gray-400 dark:border-gray-400 border-l border-r dark:border-l-0 dark:border-r-0 shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-stone-800 transition-shadow duration-300 w-full max-w-xs h-44 cursor-pointer group"
              >
                <div className="flex justify-between items-center w-full mb-2">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 relative">
                    {resource.label.split("").map((char, charIndex) =>
                      resource.highlightIndices.includes(charIndex) ? (
                        <span key={charIndex} className={resource.textColor}>
                          {char}
                        </span>
                      ) : (
                        char
                      )
                    )}
                    {/* Underline animation */}
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-800 dark:bg-gray-100 scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"></span>
                  </h3>
                  <div
                    className={`text-xl text-gray-800 dark:text-white ${resource.iconColor}`}
                  >
                    {resource.icon}
                  </div>
                </div>
                <p className="font-light text-sm text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-gray-200 overflow-hidden text-ellipsis">
                  {resource.details}
                </p>
                {/* Stack always on the left */}
                {resource.stack && (
                  <div className="absolute bottom-4 left-0 flex justify-between items-center w-full px-4">
                    <ul className="flex space-x-1 text-xs text-gray-700 dark:text-gray-300 overflow-x-auto">
                      {resource.stack.map((item, idx) => (
                        <li
                          key={idx}
                          className="font-mono text-blue-500 hover:underline"
                        >
                          <a href={resource.codeLink} target="_blank">
                            {item}
                          </a>
                          {idx < resource.stack.length - 1 && ","}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Icon, always on the right */}
                {/* <div className="absolute bottom-4 right-4 text-xl text-blue-500 dark:text-white hover:dark:text-blue-500">
                  <BsFillArrowUpRightCircleFill />
                </div> */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const resources = [
  {
    href: "https://www.elements.red/",
    codeLink: "https://www.elements.red/",
    label: "elements",
    highlightIndices: [2],
    details:
      "A super intuitive SaaS space for drawing, sketches, notes, brainstorming, and sharing ideas visually🔥",
    icon: <MdOutlineDraw />,
    iconColor: "hover:text-red-500 dark:hover:text-red-500",
    textColor: "text-red-500",
    stack: ["ts", "nextjs", "zustand", "mongodb"],
  },
  {
    href: "https://github.com/seAfnan/timesheet-pro",
    codeLink: "https://github.com/seAfnan/timesheet-pro",
    label: "Timesheet",
    highlightIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    details:
      "This system lets employees log hours, manage overtime, and handle approvals efficiently",
    icon: <CgTimelapse />,
    iconColor: "hover:text-orange-500 dark:hover:text-orange-500",
    textColor: "text-orange-500",
    stack: ["ts", "react", "zustand", "mongodb"],
  },
  {
    href: "https://github.com/seAfnan/nextjs-trelloboard",
    codeLink: "https://github.com/seAfnan/nextjs-trelloboard",
    label: "Trelloboard",
    highlightIndices: [6, 7, 8, 9, 10],
    details:
      "A visual collaboration tool for organizing tasks, projects, and workflows efficiently",
    icon: <GoTasklist />,
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    stack: ["ts", "nextjs", "tailwind", "mysql"],
  },
  {
    href: "https://next-preference-reset.vercel.app/",
    codeLink: "https://github.com/seAfnan/next-preference-reset",
    label: "Preference setter",
    highlightIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    details: "App visual for muslims to set, reset the preference in life",
    icon: <RiResetLeftFill />,
    iconColor: "hover:text-emerald-500 dark:hover:text-emerald-500",
    textColor: "text-emerald-500",
    stack: ["ts", "nextjs", "tailwind"],
  },
  {
    href: "https://github.com/seAfnan/taskify-flutter",
    codeLink: "https://github.com/seAfnan/taskify-flutter",
    label: "Taskify",
    highlightIndices: [0, 1, 2, 3, 4],
    details:
      "Flutter app to keep track of daily tasks, with a simple and clean UI",
    icon: <MdListAlt />,
    iconColor: "hover:text-amber-500 dark:hover:text-amber-500",
    textColor: "text-amber-500",
    stack: ["dart", "flutter", "hive"],
  },
  {
    href: "https://github.com/seAfnan/react-cli",
    codeLink: "https://github.com/seAfnan/react-cli",
    label: "CLI",
    highlightIndices: [0, 1, 2],
    details:
      "Command line app for help, cryptocurrency prices, CSV uploads, charting, file management, and app information",
    icon: <HiCommandLine />,
    iconColor: "hover:text-blue-500 dark:hover:text-blue-500",
    textColor: "text-blue-500",
    stack: ["ts", "js", "react", "vite", "nodejs", "electron"],
  },
  {
    href: "https://github.com/seAfnan/nextjs-request-ms",
    codeLink: "https://github.com/seAfnan/nextjs-request-ms",
    label: "RMS",
    highlightIndices: [0, 1, 2],
    details:
      "A Request Management System for tracking, assigning, editing requests, with charts, OAuth, and theming",
    icon: <SiGoogleforms />,
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    stack: ["ts", "nextjs", "mysql", "radixui", "oath"],
  },
  {
    href: "https://github.com/seAfnan/goodbye_world_flutter",
    codeLink: "https://github.com/seAfnan/goodbye_world_flutter",
    label: "Goodbye world",
    highlightIndices: [8, 9, 10, 11, 12],
    details:
      "Flutter app with dropdowns for people, travel class, and destinations like Mars or Moon.",
    icon: <WiMoonAltWaxingGibbous1 />,
    iconColor: "hover:text-stone-500 dark:hover:text-stone-500",
    textColor: "text-stone-500",
    stack: ["dart", "flutter"],
  },
  {
    href: "https://react-expense-app-by-afnan.netlify.app/",
    codeLink: "https://github.com/seAfnan/react-expense-app",
    label: "Expense tracker",
    highlightIndices: [0, 1, 2, 3, 4, 5, 6],
    details:
      "A functional expense tracker for managing daily expenses, needing a refined and improved layout design",
    icon: <FaListOl />,
    iconColor: "hover:text-cyan-500 dark:hover:text-cyan-500",
    textColor: "text-cyan-500",
    stack: ["ts", "react", "vite"],
  },
  {
    href: "https://github.com/seAfnan/nextjs-gpt-chatbot",
    codeLink: "https://github.com/seAfnan/nextjs-gpt-chatbot",
    label: "GPT Chatbot",
    highlightIndices: [4, 5, 6, 7, 8, 9, 10, 11],
    details:
      "Chatbot component built with OpenAI's GPT-3, for generating human-like text responses",
    icon: <IoChatboxEllipsesSharp />,
    iconColor: "hover:text-orange-500 dark:hover:text-orange-500",
    textColor: "text-orange-500",
    stack: ["ts", "nextjs", "gpt"],
  },
  {
    href: "https://github.com/seAfnan/animation_basics_flutter",
    codeLink: "https://github.com/seAfnan/animation_basics_flutter",
    label: "Animations",
    highlightIndices: [9],
    details:
      "Flutter app to show how animation works, with a simple and clean UI",
    icon: <MdOutlineStar />,
    iconColor: "hover:text-amber-500 dark:hover:text-amber-500",
    textColor: "text-amber-500",
    stack: ["dart", "flutter"],
  },
  {
    href: "https://weather-app-by-afnan.netlify.app/",
    codeLink: "https://github.com/seAfnan/react-weather-app",
    label: "Temp Compare",
    highlightIndices: [4, 5, 6, 7, 8, 9, 10, 11],
    details:
      "Compare temperatures across different cities worldwide for quick, real-time weather insights and analysis",
    icon: <TiWeatherPartlySunny />,
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    stack: ["js", "react", "vite", "chakraui"],
  },
  {
    href: "https://github.com/seAfnan/react-node-login",
    codeLink: "https://github.com/seAfnan/react-node-login",
    label: "Login",
    highlightIndices: [],
    details:
      "Simple login/register system for users with a clean and minimalistic UI",
    icon: <RiLoginBoxFill />,
    iconColor: "hover:text-neutral-500 dark:hover:text-neutral-500",
    textColor: "text-neutral-500",
    stack: ["ts", "js", "react", "nodejs", "express"],
  },
  {
    href: "https://react-game-app-by-afnan.vercel.app/",
    codeLink: "https://github.com/seAfnan/react-game-app",
    label: "Gaming site",
    highlightIndices: [7, 8, 9, 10],
    details:
      "A gaming website featuring popular video games with search, filtering, and detailed information",
    icon: <PiGameControllerFill />,
    iconColor: "hover:text-emerald-500 dark:hover:text-emerald-500",
    textColor: "text-emerald-500",
    stack: ["ts", "react", "vite"],
  },
  {
    href: "https://github.com/seAfnan/cricket-scoreboard",
    codeLink: "https://github.com/seAfnan/cricket-scoreboard",
    label: "Cricket scoreboard",
    highlightIndices: [0, 1, 2, 3, 4, 5, 6],
    details:
      "Cricket scoreboard application tracks live scores, manages teams, and handles match statistics and player performance",
    icon: <MdSportsCricket />,
    iconColor: "hover:text-sky-500 dark:hover:text-sky-500",
    textColor: "text-sky-500",
    stack: ["js", "handlebars", "nodejs", "python"],
  },
  {
    href: "https://github.com/seAfnan/javascript-quiz",
    codeLink: "https://github.com/seAfnan/javascript-quiz",
    label: "JavaScript quiz",
    highlightIndices: [11, 12, 13, 14],
    details:
      "Simple JavaScript quiz application with multiple-choice questions, timer, and instant scoring feedback for learners",
    icon: <FaQuestion />,
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    stack: ["html", "css", "js"],
  },
];
