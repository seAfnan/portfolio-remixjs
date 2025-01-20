import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, json } from "@remix-run/node";
import { RemixServer, Link, Outlet, Meta, Links, ScrollRestoration, Scripts, useNavigation, useActionData, Form } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createContext, useState, useEffect, useContext } from "react";
import { IoSunny, IoChatboxEllipsesSharp } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { FaHandshake, FaLinkedin, FaGithub, FaFile, FaListOl, FaQuestion } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowUpward, MdListAlt, MdOutlineStar, MdSportsCricket } from "react-icons/md";
import nodemailer from "nodemailer";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { CgTimelapse } from "react-icons/cg";
import { GoTasklist } from "react-icons/go";
import { RiResetLeftFill, RiLoginBoxFill } from "react-icons/ri";
import { HiCommandLine } from "react-icons/hi2";
import { SiGoogleforms } from "react-icons/si";
import { WiMoonAltWaxingGibbous1 } from "react-icons/wi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiGameControllerFill } from "react-icons/pi";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const ThemeContext = createContext(void 0);
const ThemeProvider = ({
  children
}) => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  const toggleTheme = () => setTheme((prev) => prev === "light" ? "dark" : "light");
  if (theme === null) {
    return null;
  }
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children });
};
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsxs("nav", { className: "flex justify-between items-center pl-4 pr-4 pt-3 pb-3 bg-white dark:bg-gray-950", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("h1", { className: "cursor-default xxs:text-sm md:text-xl font-bold font-mono text-gray-900 dark:text-gray-100", children: "hashtag tech." }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/hire-me",
          className: "flex items-center gap-2 cursor-default xxs:p-1 md:p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors duration-100 text-xs",
          children: [
            /* @__PURE__ */ jsx(FaHandshake, { className: "text-md xxs:hidden xs:block" }),
            "hire me"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://x.com/afnan_a_x",
          className: "cursor-default xxs:p-1 md:p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors duration-100",
          target: "_blank",
          children: /* @__PURE__ */ jsx(FaXTwitter, {})
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://linkedin.com/in/afnan-se",
          className: "cursor-default xxs:p-1 md:p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors duration-100",
          target: "_blank",
          children: /* @__PURE__ */ jsx(FaLinkedin, {})
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://github.com/seAfnan",
          className: "cursor-default xxs:p-1 md:p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors duration-100",
          target: "_blank",
          children: /* @__PURE__ */ jsx(FaGithub, {})
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: toggleTheme,
          className: "cursor-default xxs:p-1 md:p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-colors duration-100",
          "aria-label": "Toggle Theme",
          children: theme === "light" ? /* @__PURE__ */ jsx(IoMdMoon, { className: "text-gray-800" }) : /* @__PURE__ */ jsx(IoSunny, { className: "text-yellow-300" })
        }
      )
    ] })
  ] });
}
const Scrolltotop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: isVisible && /* @__PURE__ */ jsx(
    "button",
    {
      onClick: scrollToTop,
      className: "cursor-default fixed bottom-6 left-6 xxs:p-1 md:p-2 bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 rounded hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-400 dark:hover:text-gray-900 transition-colors duration-200",
      "aria-label": "Scroll to Top",
      children: /* @__PURE__ */ jsx(MdArrowUpward, {})
    }
  ) });
};
const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { children: [
        /* @__PURE__ */ jsx(Navbar, {}),
        children,
        /* @__PURE__ */ jsx(Scrolltotop, {})
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
const HireMe = () => {
  const navigation = useNavigation();
  const actionData = useActionData();
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [quote, setQuote] = useState("");
  const isSubmitting = navigation.state === "submitting";
  useEffect(() => {
    if (actionData == null ? void 0 : actionData.success) {
      setSubmitStatus("success");
      setEmail("");
      setQuote("");
      const timer = setTimeout(() => setSubmitStatus("idle"), 3e3);
      return () => clearTimeout(timer);
    } else if (actionData == null ? void 0 : actionData.error) {
      setSubmitStatus("error");
      const timer = setTimeout(() => setSubmitStatus("idle"), 3e3);
      return () => clearTimeout(timer);
    }
  }, [actionData]);
  const validateEmail = (email2) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email2) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(email2)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail) validateEmail(newEmail);
  };
  const handleSubmit = (e) => {
    if (!validateEmail(email)) {
      e.preventDefault();
      return;
    }
  };
  const handleQuoteChange = (e) => {
    setQuote(e.target.value);
  };
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center min-h-screen bg-white dark:bg-gray-950 p-1", children: /* @__PURE__ */ jsxs(
    Form,
    {
      method: "post",
      onSubmit: handleSubmit,
      className: "bg-gray-100 dark:bg-[#101623] p-6 w-full max-w-lg relative xxs:top-[5vh] lg:top-[-5vh] border-t border-gray-400 dark:border-gray-400 border-l border-r dark:border-l-0 dark:border-r-0 shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-900 transition-shadow duration-300",
      children: [
        /* @__PURE__ */ jsx("h2", { className: "xxs:text-lg md:text-2xl font-bold text-gray-800 dark:text-white mb-4", children: "Hire Me" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
              children: "Email"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              name: "email",
              value: email,
              onChange: handleEmailChange,
              onBlur: () => validateEmail(email),
              className: `w-full px-2 py-1 border ${emailError ? "border-red-500" : "border-gray-300 dark:border-gray-700"} rounded-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none`,
              placeholder: "Enter your email",
              required: true
            }
          ),
          emailError && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-500", children: emailError })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "quote",
              className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
              children: "Quote / Details"
            }
          ),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "quote",
              name: "quote",
              value: quote,
              onChange: handleQuoteChange,
              className: "w-full px-2 py-2 border border-gray-300 dark:border-gray-700 rounded-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none",
              rows: 6,
              placeholder: "Message",
              required: true
            }
          )
        ] }),
        submitStatus === "success" && /* @__PURE__ */ jsx("div", { className: "mb-4 p-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded", children: "Message sent successfully!" }),
        submitStatus === "error" && /* @__PURE__ */ jsx("div", { className: "mb-4 p-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded", children: (actionData == null ? void 0 : actionData.error) || "Failed to send message. Please try again." }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: isSubmitting || !!emailError,
            className: `w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition-colors duration-300 ${isSubmitting || !!emailError ? "opacity-50 cursor-not-allowed" : ""}`,
            children: isSubmitting ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center", children: [
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ jsx(
                      "circle",
                      {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "path",
                      {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      }
                    )
                  ]
                }
              ),
              "Sending..."
            ] }) : "Send Quote"
          }
        )
      ]
    }
  ) });
};
const sendEmail = async ({ from, subject, text, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      // host: process.env.EMAIL_HOST, // Use SMTP host
      // port: Number(process.env.EMAIL_PORT), // SMTP port
      service: "Gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        // SMTP username
        pass: process.env.SMTP_PASSWORD
        // SMTP password
      }
    });
    const mailOptions = {
      from,
      // Sender address
      to: process.env.SMTP_EMAIL,
      // Receiver
      subject,
      // Subject line
      text,
      // Plain text body
      html
      // HTML body
    };
    const info = await transporter.sendMail(mailOptions);
    console.log(`Message sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const quote = formData.get("quote");
  if (typeof email !== "string" || typeof quote !== "string") {
    return json(
      { error: "Email and Quote are required" },
      { status: 400 }
    );
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return json(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }
  try {
    await sendEmail({
      from: email,
      subject: "New Contact Request from Portfolio",
      text: `Message from: ${email}

Details:
${quote}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>
          ${quote.replace(/\n/g, "<br>")}
        </p>
      `
    });
    return json({ success: true });
  } catch (error) {
    console.error(error);
    return json({ error: "Failed to send email" }, { status: 500 });
  }
};
function HireMePage() {
  return /* @__PURE__ */ jsx(HireMe, {});
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: HireMePage
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [
    { title: "hashtag tech." },
    { name: "description", content: "Ideas with a new look." }
  ];
};
function Index() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen justify-center xxs:mt-10 md:mt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-16", children: [
    /* @__PURE__ */ jsx("header", { className: "flex flex-col items-center gap-9", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h1", { className: "cursor-default text-3xl font-bold text-gray-800 dark:text-gray-100 font-verdana", children: [
        "# ",
        /* @__PURE__ */ jsx("span", { className: "underline ml-2", children: "everything" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "cursor-default xxs:text-sm md:text-md font-mono text-gray-800 dark:text-gray-100 mt-6 ml-2", children: [
        "A space built by ",
        /* @__PURE__ */ jsx("span", { className: "underline", children: "Afnan" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto p-4 pt-0", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3", children: resources.map((resource, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative flex flex-col items-start p-4 bg-white dark:bg-[#101623] border-t border-gray-400 dark:border-gray-400 border-l border-r dark:border-l-0 dark:border-r-0 shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-900 transition-shadow duration-300 w-full max-w-xs h-44 cursor-default",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center w-full mb-2", children: [
            /* @__PURE__ */ jsx("a", { href: resource.href, target: "_blank", children: /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-800 dark:text-gray-100 hover:underline", children: resource.label.split("").map(
              (char, charIndex) => resource.highlightIndices.includes(charIndex) ? /* @__PURE__ */ jsx("span", { className: resource.textColor, children: char }, charIndex) : char
            ) }) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `text-xl text-gray-800 dark:text-white ${resource.iconColor}`,
                children: resource.icon
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-light text-sm text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-gray-200 overflow-hidden text-ellipsis", children: resource.details }),
          resource.stack && /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-0 flex justify-between items-center w-full px-4", children: /* @__PURE__ */ jsx("ul", { className: "flex space-x-1 text-xs text-gray-700 dark:text-gray-300 overflow-x-auto", children: resource.stack.map((item, idx) => /* @__PURE__ */ jsxs(
            "li",
            {
              className: "font-mono text-blue-500 hover:underline",
              children: [
                /* @__PURE__ */ jsx("a", { href: resource.codeLink, target: "_blank", children: item }),
                idx < resource.stack.length - 1 && ","
              ]
            },
            idx
          )) }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 right-4 text-xl text-blue-500 dark:text-white hover:dark:text-blue-500", children: /* @__PURE__ */ jsx("a", { href: resource.href, target: "_blank", children: /* @__PURE__ */ jsx(BsFillArrowUpRightCircleFill, {}) }) })
        ]
      },
      index
    )) }) })
  ] }) });
}
const resources = [
  {
    href: "https://www.elements.red/",
    codeLink: "https://www.elements.red/",
    label: "elements",
    highlightIndices: [2],
    details: "A super intuitive SaaS space for drawing, sketches, notes, brainstorming, and sharing ideas visually🔥",
    icon: /* @__PURE__ */ jsx(FaFile, {}),
    iconColor: "hover:text-red-500 dark:hover:text-red-500",
    textColor: "text-red-500",
    stack: ["ts", "nextjs", "zustand", "mongodb"]
  },
  {
    href: "https://github.com/seAfnan/timesheet-pro",
    codeLink: "https://github.com/seAfnan/timesheet-pro",
    label: "Timesheet",
    highlightIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    details: "This system lets employees log hours, manage overtime, and handle approvals efficiently",
    icon: /* @__PURE__ */ jsx(CgTimelapse, {}),
    iconColor: "hover:text-orange-500 dark:hover:text-orange-500",
    textColor: "text-orange-500",
    stack: ["ts", "react", "zustand", "mongodb"]
  },
  {
    href: "https://github.com/seAfnan/nextjs-trelloboard",
    codeLink: "https://github.com/seAfnan/nextjs-trelloboard",
    label: "Trelloboard",
    highlightIndices: [6, 7, 8, 9, 10],
    details: "A visual collaboration tool for organizing tasks, projects, and workflows efficiently",
    icon: /* @__PURE__ */ jsx(GoTasklist, {}),
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    stack: ["ts", "nextjs", "tailwind", "mysql"]
  },
  {
    href: "https://next-preference-reset.vercel.app/",
    codeLink: "https://github.com/seAfnan/next-preference-reset",
    label: "Preference setter",
    highlightIndices: [2],
    details: "App visual for muslims to set, reset the preference in life",
    icon: /* @__PURE__ */ jsx(RiResetLeftFill, {}),
    iconColor: "hover:text-emerald-500 dark:hover:text-emerald-500",
    textColor: "text-emerald-500",
    stack: ["ts", "nextjs", "tailwind"]
  },
  {
    href: "https://github.com/seAfnan/taskify-flutter",
    codeLink: "https://github.com/seAfnan/taskify-flutter",
    label: "Taskify",
    highlightIndices: [0, 1, 2, 3, 4],
    details: "Flutter app to keep track of daily tasks, with a simple and clean UI",
    icon: /* @__PURE__ */ jsx(MdListAlt, {}),
    iconColor: "hover:text-amber-500 dark:hover:text-amber-500",
    textColor: "text-amber-500",
    stack: ["dart", "flutter", "hive"]
  },
  {
    href: "https://github.com/seAfnan/react-cli",
    codeLink: "https://github.com/seAfnan/react-cli",
    label: "CLI",
    highlightIndices: [0, 1, 2],
    details: "Command line app for help, cryptocurrency prices, CSV uploads, charting, file management, and app information",
    icon: /* @__PURE__ */ jsx(HiCommandLine, {}),
    iconColor: "hover:text-blue-500 dark:hover:text-blue-500",
    textColor: "text-blue-500",
    stack: ["ts", "js", "react", "vite", "nodejs", "electron"]
  },
  {
    href: "https://github.com/seAfnan/nextjs-request-ms",
    codeLink: "https://github.com/seAfnan/nextjs-request-ms",
    label: "RMS",
    highlightIndices: [0, 1, 2],
    details: "A Request Management System for tracking, assigning, editing requests, with charts, OAuth, and theming",
    icon: /* @__PURE__ */ jsx(SiGoogleforms, {}),
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    stack: ["ts", "nextjs", "mysql", "radixui", "oath"]
  },
  {
    href: "https://github.com/seAfnan/goodbye_world_flutter",
    codeLink: "https://github.com/seAfnan/goodbye_world_flutter",
    label: "Goodbye world",
    highlightIndices: [8, 9, 10, 11, 12],
    details: "Flutter app with dropdowns for people, travel class, and destinations like Mars or Moon.",
    icon: /* @__PURE__ */ jsx(WiMoonAltWaxingGibbous1, {}),
    iconColor: "hover:text-stone-500 dark:hover:text-stone-500",
    textColor: "text-stone-500",
    stack: ["dart", "flutter"]
  },
  {
    href: "https://react-expense-app-by-afnan.netlify.app/",
    codeLink: "https://github.com/seAfnan/react-expense-app",
    label: "Expense tracker",
    highlightIndices: [0, 1, 2, 3, 4, 5, 6],
    details: "A functional expense tracker for managing daily expenses, needing a refined and improved layout design",
    icon: /* @__PURE__ */ jsx(FaListOl, {}),
    iconColor: "hover:text-cyan-500 dark:hover:text-cyan-500",
    textColor: "text-cyan-500",
    stack: ["ts", "react", "vite"]
  },
  {
    href: "https://github.com/seAfnan/nextjs-gpt-chatbot",
    codeLink: "https://github.com/seAfnan/nextjs-gpt-chatbot",
    label: "GPT Chatbot",
    highlightIndices: [4, 5, 6, 7, 8, 9, 10, 11],
    details: "Chatbot component built with OpenAI's GPT-3, for generating human-like text responses",
    icon: /* @__PURE__ */ jsx(IoChatboxEllipsesSharp, {}),
    iconColor: "hover:text-orange-500 dark:hover:text-orange-500",
    textColor: "text-orange-500",
    stack: ["ts", "nextjs", "gpt"]
  },
  {
    href: "https://github.com/seAfnan/animation_basics_flutter",
    codeLink: "https://github.com/seAfnan/animation_basics_flutter",
    label: "Animations",
    highlightIndices: [9],
    details: "Flutter app to show how animation works, with a simple and clean UI",
    icon: /* @__PURE__ */ jsx(MdOutlineStar, {}),
    iconColor: "hover:text-amber-500 dark:hover:text-amber-500",
    textColor: "text-amber-500",
    stack: ["dart", "flutter"]
  },
  {
    href: "https://weather-app-by-afnan.netlify.app/",
    codeLink: "https://github.com/seAfnan/react-weather-app",
    label: "Temp Compare",
    highlightIndices: [4, 5, 6, 7, 8, 9, 10, 11],
    details: "Compare temperatures across different cities worldwide for quick, real-time weather insights and analysis",
    icon: /* @__PURE__ */ jsx(TiWeatherPartlySunny, {}),
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    stack: ["js", "react", "vite", "chakraui"]
  },
  {
    href: "https://github.com/seAfnan/react-node-login",
    codeLink: "https://github.com/seAfnan/react-node-login",
    label: "Login",
    highlightIndices: [],
    details: "Simple login/register system for users with a clean and minimalistic UI",
    icon: /* @__PURE__ */ jsx(RiLoginBoxFill, {}),
    iconColor: "hover:text-neutral-500 dark:hover:text-neutral-500",
    textColor: "text-neutral-500",
    stack: ["ts", "js", "react", "nodejs", "express"]
  },
  {
    href: "https://react-game-app-by-afnan.vercel.app/",
    codeLink: "https://github.com/seAfnan/react-game-app",
    label: "Gaming site",
    highlightIndices: [7, 8, 9, 10],
    details: "A gaming website featuring popular video games with search, filtering, and detailed information",
    icon: /* @__PURE__ */ jsx(PiGameControllerFill, {}),
    iconColor: "hover:text-emerald-500 dark:hover:text-emerald-500",
    textColor: "text-emerald-500",
    stack: ["ts", "react", "vite"]
  },
  {
    href: "https://github.com/seAfnan/cricket-scoreboard",
    codeLink: "https://github.com/seAfnan/cricket-scoreboard",
    label: "Cricket scoreboard",
    highlightIndices: [0, 1, 2, 3, 4, 5, 6],
    details: "Cricket scoreboard application tracks live scores, manages teams, and handles match statistics and player performance",
    icon: /* @__PURE__ */ jsx(MdSportsCricket, {}),
    iconColor: "hover:text-sky-500 dark:hover:text-sky-500",
    textColor: "text-sky-500",
    stack: ["js", "handlebars", "nodejs", "python"]
  },
  {
    href: "https://github.com/seAfnan/javascript-quiz",
    codeLink: "https://github.com/seAfnan/javascript-quiz",
    label: "JavaScript quiz",
    highlightIndices: [11, 12, 13, 14],
    details: "Simple JavaScript quiz application with multiple-choice questions, timer, and instant scoring feedback for learners",
    icon: /* @__PURE__ */ jsx(FaQuestion, {}),
    iconColor: "hover:text-lime-500 dark:hover:text-lime-500",
    textColor: "text-lime-500",
    stack: ["html", "css", "js"]
  }
];
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DGXrTWcT.js", "imports": ["/assets/jsx-runtime-CSwQo8vN.js", "/assets/components-CPiEImzh.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-CE9A8_aP.js", "imports": ["/assets/jsx-runtime-CSwQo8vN.js", "/assets/components-CPiEImzh.js", "/assets/index-lWY3HJ9c.js"], "css": ["/assets/root-m21s2Hj2.css"] }, "routes/hire-me": { "id": "routes/hire-me", "parentId": "root", "path": "hire-me", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/hire-me-BTLeChlM.js", "imports": ["/assets/jsx-runtime-CSwQo8vN.js", "/assets/components-CPiEImzh.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-DGDq3jg0.js", "imports": ["/assets/jsx-runtime-CSwQo8vN.js", "/assets/index-lWY3HJ9c.js"], "css": [] } }, "url": "/assets/manifest-05419efc.js", "version": "05419efc" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": true, "v3_lazyRouteDiscovery": true, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/hire-me": {
    id: "routes/hire-me",
    parentId: "root",
    path: "hire-me",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
