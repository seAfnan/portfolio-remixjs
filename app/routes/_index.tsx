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
import { RiRobot2Fill } from "react-icons/ri";
import Typewriter from "typewriter-effect";
import { VscChecklist } from "react-icons/vsc";

export const meta: MetaFunction = () => {
  return [
    { title: "Afnan A." },
    { name: "description", content: "My personal website." },
  ];
};

export default function Index() {
  return (
    <div className="flex pb-5 min-h-screen justify-center bg-gradient-to-b from-indigo-300 via-indigo-200 to-indigo-100 text-black dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-950 dark:to-black dark:text-white">
      <div className="flex flex-col items-center gap-6 xxs:mt-6 md:mt-8">
        <div className="container mx-auto p-4 pt-0">
          <div className="max-w-screen-lg flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            {/* Left Section - Image/Icon */}
            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700">
              <img
                src="/image.jpg"
                alt="Afnan"
                className="w-full h-full object-cover"
              />
              {/* <FaUserCircle className="w-full h-full text-gray-600 dark:text-gray-400" /> */}
            </div>
            {/* Right Section - Details */}
            <div>
              <h1 className="cursor-default text-sm sm:text-base md:text-md font-mono mt-2">
                <div className="items-center">
                  <span
                    className="mr-2 xxs:text-2xl md:text-4xl text-gray-800 dark:text-gray-300"
                    style={{ fontFamily: "verdana" }}
                  >
                    Hi, I'm <span className="font-bold">Afnan👋</span>
                  </span>
                  <hr className="mb-4 md:mr-3" />
                  {/* <span className="flex text-gray-800 dark:text-amber-400">
                    I am a&nbsp;
                    <Typewriter
                      options={{
                        strings: [
                          " software engineer.",
                          " javascript developer.",
                          " freelancer.",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </span> */}
                </div>

                <span className="text-gray-800 dark:text-gray-300">
                  As a software engineer since 2019. I specialize in building
                  web applications using modern technologies to create
                  innovative, efficient, and user-centric solutions. My focus is
                  on delivering high-quality projects that meet user and client
                  needs.
                </span>
                <br />
                <span className="text-gray-600 dark:text-gray-400">
                  See my work below.
                </span>
              </h1>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxs:mt-6 sm:mt-10">
            {resources.map((resource, index) => (
              <a
                href={resource.href}
                target="_blank"
                key={index}
                className="relative flex flex-col items-start p-4 bg-white dark:bg-neutral-900 border-t dark:border-gray-400 border-l border-r dark:border-l-0 dark:border-r-0 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-stone-800 transition-shadow duration-300 w-full max-w-xs h-44 cursor-pointer group rounded-lg"
              >
                <div className="flex justify-between items-center w-full mb-2">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 relative flex items-center">
                    <span className="relative">
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
                    </span>
                    {/* Badge */}
                    <span className="ml-4 px-2 text-xs font-normal text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800 rounded-sm">
                      {resource.type}
                    </span>
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
                        <li key={idx} className="font-mono text-blue-500">
                          {/* <a href={resource.codeLink} target="_blank"> */}
                          {item}
                          {/* </a> */}
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
    textColor: "text-red-600",
    type: "live",
    stack: ["ts", "nextjs", "zustand", "mongodb"],
  },
  {
    href: "https://www.lifediary.me/",
    codeLink: "https://www.lifediary.me/",
    label: "LifeDiary",
    highlightIndices: [],
    details:
      "Turn your adventures into Chain of memories",
    icon: <MdOutlineDraw />,
    iconColor: "hover:text-blue-500 dark:hover:text-blue-500",
    textColor: "text-blue-600",
    type: "live",
    stack: ["ts", "nextjs", "backblaze", "mongodb"],
  },
  {
    href: "https://botshot.elements.red/",
    codeLink: "https://github.com/seAfnan/botshot",
    label: "Botshot",
    highlightIndices: [],
    details:
      "Botshot is a multi-LLM AI assistant that lets you chat with and compare responses from different language models—locally or via APIs—all in one place.",
    icon: <RiRobot2Fill />,
    iconColor: "hover:text-gray-500 dark:hover:text-gray-500",
    textColor: "text-gray-600",
    type: "live",
    stack: ["ts", "nextjs", "oauth", "mongodb"],
  },
  {
    href: "https://github.com/seAfnan/timesheet-pro",
    codeLink: "https://github.com/seAfnan/timesheet-pro",
    label: "Timesheet",
    highlightIndices: [],
    details:
      "This system lets employees log hours, manage overtime, and handle approvals efficiently",
    icon: <CgTimelapse />,
    iconColor: "hover:text-orange-500 dark:hover:text-orange-500",
    textColor: "text-orange-500",
    type: "code",
    stack: ["ts", "react", "zustand", "mongodb"],
  },
  {
    href: "https://weather-app-by-afnan.netlify.app/",
    codeLink: "https://github.com/seAfnan/react-weather-app",
    label: "Temp compare",
    highlightIndices: [],
    details:
      "Compare temperatures across different cities worldwide for quick, real-time weather insights and analysis",
    icon: <TiWeatherPartlySunny />,
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    type: "live",
    stack: ["js", "react", "vite", "chakraui"],
  },
  {
    href: "https://next-preference-reset.vercel.app/",
    codeLink: "https://github.com/seAfnan/next-preference-reset",
    label: "Preference setter",
    highlightIndices: [],
    details: "App visual for muslims to set, reset the preference in life",
    icon: <VscChecklist />,
    iconColor: "hover:text-emerald-500 dark:hover:text-emerald-500",
    textColor: "text-emerald-500",
    type: "live",
    stack: ["ts", "nextjs", "tailwind"],
  },
  {
    href: "https://github.com/seAfnan/taskify-flutter",
    codeLink: "https://github.com/seAfnan/taskify-flutter",
    label: "Taskify",
    highlightIndices: [],
    details:
      "Flutter app to keep track of daily tasks, with a simple and clean UI",
    icon: <MdListAlt />,
    iconColor: "hover:text-amber-500 dark:hover:text-amber-500",
    textColor: "text-amber-500",
    type: "code",
    stack: ["dart", "flutter", "hive"],
  },
  {
    href: "https://react-game-app-by-afnan.vercel.app/",
    codeLink: "https://github.com/seAfnan/react-game-app",
    label: "Gaming site",
    highlightIndices: [],
    details:
      "A gaming website featuring popular video games with search, filtering, and detailed information",
    icon: <PiGameControllerFill />,
    iconColor: "hover:text-emerald-500 dark:hover:text-emerald-500",
    textColor: "text-emerald-500",
    type: "live",
    stack: ["ts", "react", "vite"],
  },
  {
    href: "https://github.com/seAfnan/nextjs-request-ms",
    codeLink: "https://github.com/seAfnan/nextjs-request-ms",
    label: "RMS",
    highlightIndices: [],
    details:
      "A Request Management System for tracking, assigning, editing requests, with charts, OAuth, and theming",
    icon: <SiGoogleforms />,
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    type: "code",
    stack: ["ts", "nextjs", "mysql", "radixui", "oath"],
  },
  {
    href: "https://github.com/seAfnan/goodbye_world_flutter",
    codeLink: "https://github.com/seAfnan/goodbye_world_flutter",
    label: "Goodbye world",
    highlightIndices: [],
    details:
      "Flutter app with dropdowns for people, travel class, and destinations like Mars or Moon.",
    icon: <WiMoonAltWaxingGibbous1 />,
    iconColor: "hover:text-stone-500 dark:hover:text-stone-500",
    textColor: "text-stone-500",
    type: "code",
    stack: ["dart", "flutter"],
  },
  {
    href: "https://react-expense-app-by-afnan.netlify.app/",
    codeLink: "https://github.com/seAfnan/react-expense-app",
    label: "Expense tracker",
    highlightIndices: [],
    details:
      "A functional expense tracker for managing daily expenses, needing a refined and improved layout design",
    icon: <FaListOl />,
    iconColor: "hover:text-cyan-500 dark:hover:text-cyan-500",
    textColor: "text-cyan-500",
    type: "live",
    stack: ["ts", "react", "vite"],
  },
  {
    href: "https://github.com/seAfnan/nextjs-gpt-chatbot",
    codeLink: "https://github.com/seAfnan/nextjs-gpt-chatbot",
    label: "GPT Chatbot",
    highlightIndices: [],
    details:
      "Chatbot component built with OpenAI's GPT-3, for generating human-like text responses",
    icon: <IoChatboxEllipsesSharp />,
    iconColor: "hover:text-orange-500 dark:hover:text-orange-500",
    textColor: "text-orange-500",
    type: "code",
    stack: ["ts", "nextjs", "gpt"],
  },
  {
    href: "https://github.com/seAfnan/animation_basics_flutter",
    codeLink: "https://github.com/seAfnan/animation_basics_flutter",
    label: "Animations",
    highlightIndices: [],
    details:
      "Flutter app to show how animation works, with a simple and clean UI",
    icon: <MdOutlineStar />,
    iconColor: "hover:text-amber-500 dark:hover:text-amber-500",
    textColor: "text-amber-500",
    type: "code",
    stack: ["dart", "flutter"],
  },
  {
    href: "https://github.com/seAfnan/nextjs-trelloboard",
    codeLink: "https://github.com/seAfnan/nextjs-trelloboard",
    label: "Trelloboard",
    highlightIndices: [],
    details:
      "A visual collaboration tool for organizing tasks, projects, and workflows efficiently",
    icon: <GoTasklist />,
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    type: "code",
    stack: ["ts", "nextjs", "tailwind", "mysql"],
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
    type: "code",
    stack: ["ts", "js", "react", "nodejs", "express"],
  },
  {
    href: "https://github.com/seAfnan/react-cli",
    codeLink: "https://github.com/seAfnan/react-cli",
    label: "CLI",
    highlightIndices: [],
    details:
      "Command line app for help, cryptocurrency prices, CSV uploads, charting, file management, and app information",
    icon: <HiCommandLine />,
    iconColor: "hover:text-blue-500 dark:hover:text-blue-500",
    textColor: "text-blue-500",
    type: "code",
    stack: ["ts", "js", "react", "vite", "nodejs", "electron"],
  },
  {
    href: "https://github.com/seAfnan/cricket-scoreboard",
    codeLink: "https://github.com/seAfnan/cricket-scoreboard",
    label: "Cricket scoreboard",
    highlightIndices: [],
    details:
      "Cricket scoreboard application tracks live scores, manages teams, and handles match statistics and player performance",
    icon: <MdSportsCricket />,
    iconColor: "hover:text-sky-500 dark:hover:text-sky-500",
    textColor: "text-sky-500",
    type: "code",
    stack: ["js", "handlebars", "nodejs", "python"],
  },
  {
    href: "https://github.com/seAfnan/javascript-quiz",
    codeLink: "https://github.com/seAfnan/javascript-quiz",
    label: "JavaScript quiz",
    highlightIndices: [],
    details:
      "Simple JavaScript quiz application with multiple-choice questions, timer, and instant scoring feedback for learners",
    icon: <FaQuestion />,
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    type: "code",
    stack: ["html", "css", "js"],
  },
];
