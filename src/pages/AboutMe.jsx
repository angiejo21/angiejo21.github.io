import Bio from "../components/Bio";

function AboutMe() {
  return (
    <div className="h-full flex flex-col justify-center z-10 w-3/4 lg:w-1/2 ">
      <h3 className="text-4xl font-bold text-primary text-center mb-5">
        About me 👩
      </h3>
      <Bio />
    </div>
  );
}

export default AboutMe;
