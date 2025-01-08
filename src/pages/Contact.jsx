import { Toaster } from "react-hot-toast";
import ContactForm from "../components/ContactForm.jsx";

function Contact() {
  return (
    <div className="z-10 flex flex-col justify-center w-5/6 sm:w-3/4 lg:w-1/2 space-y-5 h-full">
      <h3 className="text-4xl font font-bold text-primary my-4 text-center">
        I&apos;d love to hear from you ✉️
      </h3>
      <ContactForm />
      <Toaster
        position="top-center"
        containerStyle={{ top: "4rem" }}
        toastOptions={{
          style: { background: "var(--secondary)" },
        }}
      />
    </div>
  );
}

export default Contact;
