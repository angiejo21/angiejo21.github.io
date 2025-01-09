import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import Button from "./Button";
import { sendContactEmail } from "../services/emailjs";
import { useState } from "react";

function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const inputClass =
    "z-10 w-full rounded-md py-3 px-5 bg-background text-foreground border border-mutedForeground sm:border-0 focus:ring focus:ring-4 focus:ring-primary ";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    sendContactEmail(data);
    reset();
    setIsSent(true);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`relative p-6 flex flex-col gap-y-6 items-end w-full ${
          isSent ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="grid grid-cols-1 grid-rows-[1fr_1fr_1fr_2fr] sm:grid-cols-2 sm:grid-rows-[1fr_1fr_2fr] gap-4 w-full">
          <input
            {...register("firstName", { required: true })}
            placeholder="First name"
            className={`row-start-1 ${inputClass}`}
          />
          <input
            {...register("lastName", { required: true })}
            placeholder="Last name"
            className={`row-start-2 sm:row-start-1 ${inputClass}`}
          />
          <div className="row-start-3 sm:row-start-2 sm:col-span-2 relative">
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "I need a valid email to answer 😁.",
                },
              })}
              placeholder="Email"
              className={` ${inputClass} ${errors.email ? "bg-red-500" : ""}`}
              aria-invalid={errors.email ? true : false}
            />
          </div>
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className={`row-start-4 sm:row-start-3 sm:col-span-2 ${inputClass}`}
          />
        </div>
        <div className="w-full flex justify-between items-center gap-1">
          <div className="text-red-200">
            {errors.email && errors.email.message}
          </div>
          <Button variant="primary" type="submit">
            <Send />
            Send
          </Button>
        </div>
      </form>
      <div
        className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-xl ${
          isSent ? "scale-100" : "scale-0"
        } `}
      >
        <p>❤️ Thanks!</p>
      </div>
    </>
  );
}

export default ContactForm;
