import { sendForm } from "@emailjs/browser";

const EmailJS = {
  serviceID: "service_nqufy2e",
  templateID: "template_jmo1rxe",
  publicKey: "M6EQqEF47_57zi8fM",
} as const;

export async function sendContactUsMessage(
  htmlElement: string | HTMLFormElement,
): Promise<void> {
  await sendForm(EmailJS.serviceID, EmailJS.templateID, htmlElement, {
    publicKey: EmailJS.publicKey,
  });
}
