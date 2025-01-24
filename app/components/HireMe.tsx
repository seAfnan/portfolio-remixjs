import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useState, useEffect } from "react";
import type { ActionData } from "~/routes/hire-me";
import { FaUpwork } from "react-icons/fa6";

const HireMe = () => {
  const navigation = useNavigation();
  const actionData = useActionData<ActionData>();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [quote, setQuote] = useState("");

  const isSubmitting = navigation.state === "submitting";

  // Reset status when new data comes in
  useEffect(() => {
    if (actionData?.success) {
      setSubmitStatus("success");
      setEmail("");
      setQuote("");
      const timer = setTimeout(() => setSubmitStatus("idle"), 3000);
      return () => clearTimeout(timer);
    } else if (actionData?.error) {
      setSubmitStatus("error");
      const timer = setTimeout(() => setSubmitStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [actionData]);

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail) validateEmail(newEmail);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateEmail(email)) {
      e.preventDefault();
      return;
    }
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuote(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-[#121212] p-1">
      <Form
        method="post"
        onSubmit={handleSubmit}
        className="bg-gray-100 dark:bg-neutral-900 p-6 w-full max-w-lg relative xxs:top-[2vh] lg:top-[-5vh] border-t border-gray-400 dark:border-gray-400 border-l border-r dark:border-l-0 dark:border-r-0 shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-stone-800 transition-shadow duration-300"
      >
        <h2 className="xxs:text-lg md:text-xl text-gray-800 dark:text-white mb-4 flex items-center gap-2">
          <a
            href="https://www.upwork.com/freelancers/~018db7b9a500344b2a?mp_source=share"
            className="flex items-center gap-2 xxs:p-1 md:p-2 bg-gray-200 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-zinc-700 dark:hover:text-gray-100 transition-colors duration-100 xs:text-xs"
            target="_blank"
          >
            <FaUpwork />
            <span className="xxs:text-xs md:text-sm">connect on upwork</span>
          </a>
          <small>or</small>
          <span>here</span>
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => validateEmail(email)}
            className={`w-full px-2 py-1 border ${
              emailError
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-700"
            } rounded-sm bg-gray-50 dark:bg-neutral-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none`}
            placeholder="Enter your email"
            required
          />
          {emailError && (
            <p className="mt-1 text-sm text-red-500">{emailError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="quote"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Quote / Details
          </label>
          <textarea
            id="quote"
            name="quote"
            value={quote}
            onChange={handleQuoteChange}
            className="w-full px-2 py-2 border border-gray-300 dark:border-gray-700 rounded-sm bg-gray-50 dark:bg-neutral-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            rows={6}
            placeholder="Message"
            required
          ></textarea>
        </div>

        {/* Status messages */}
        {submitStatus === "success" && (
          <div className="mb-4 p-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded">
            Message sent successfully!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mb-4 p-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded">
            {actionData?.error || "Failed to send message. Please try again."}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !!emailError}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition-colors duration-300 ${
            isSubmitting || !!emailError ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Quote"
          )}
        </button>
      </Form>
    </div>
  );
};

export default HireMe;
