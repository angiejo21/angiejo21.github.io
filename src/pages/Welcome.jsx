import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router";

function Welcome() {
  return (
    <div className="h-full z-10 flex flex-col items-center justify-center w-3/4 lg:w-1/2">
      <p className="text-4xl font font-bold text-primary mb-4 text-center">
        Welcome to my portfolio 👋
      </p>
      <p className="text-xl text-center">
        I&apos;m specializing in{" "}
        <span className="text-secondary">full-stack development</span> using the{" "}
        <span className="text-secondary">MERN</span> stack, but I love learning
        new stuff every other day and find the best solutions for all.
      </p>
      <div className="flex gap-4 mt-10">
        <Link to="/contact-me">
          <Button variant="primary">
            <Mail />
            Get in touch
          </Button>
        </Link>
        <Button variant="secondary" type="resume">
          <FileUser /> Download Resume
        </Button>
      </div>
      <div className="mt-16 flex gap-5">
        <a href="https://github.com/angiejo21" target="_blank">
          <Button variant="icon">
            <Github />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/angelabello/" target="_blank">
          <Button variant="icon">
            <Linkedin />
          </Button>
        </a>
        <Link to="/contact-me">
          <Button variant="icon">
            <Mail />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
