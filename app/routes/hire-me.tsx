import { ActionFunction, json } from "@remix-run/node";
import HireMe from "~/components/HireMe";
import { sendEmail } from "~/lib/email";

export type ActionData = {
  success?: boolean;
  error?: string;
};

// Action function for handling form submissions
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const quote = formData.get("quote");

  // Type checking for form data
  if (typeof email !== "string" || typeof quote !== "string") {
    return json<ActionData>(
      { error: "Email and Quote are required" },
      { status: 400 }
    );
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return json<ActionData>(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  try {
    await sendEmail({
      from: email,
      subject: "New Contact Request from Portfolio",
      text: `Message from: ${email}\n\nDetails:\n${quote}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>
          ${quote.replace(/\n/g, "<br>")}
        </p>
      `,
    });

    return json<ActionData>({ success: true });
  } catch (error) {
    console.error(error);
    return json<ActionData>({ error: "Failed to send email" }, { status: 500 });
  }
};

export default function HireMePage() {
  return <HireMe />;
}
