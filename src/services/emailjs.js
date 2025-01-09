import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export function startEmailJs() {
  emailjs.init({
    publicKey: "wNYLO_AraMPVIam0V",
    blockHeadless: true,
    limitRate: {
      throttle: 10000,
    },
  });
}

export async function sendContactEmail(info) {
  if (Object.values(info).includes("")) return;
  const res = await emailjs.send("contact_service", "contact_form", info);
  if (res.status === 200) {
    toast.success("Message sent! I'll get back to you soon.");
  } else {
    toast.error("Sorry there was a problem try again later.");
  }
}
