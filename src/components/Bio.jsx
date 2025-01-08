import { useState } from "react";
import { Link } from "react-router";

function Bio() {
  const linkStyle = `relative cursor-pointer hover:text-accent after:content-[''] after:w-full after:h-0.5 after:bg-accent after:z-30 after:absolute after:-bottom-[0.15rem] after:left-0 after:opacity-100`;

  const backButton = (
    <span
      onClick={() => setBioText(beginning)}
      className={`${linkStyle} inline-block ml-3`}
    >
      &larr; back
    </span>
  );

  const beginning = (
    <p>
      Hi, I&apos;m Angela Bellò, a{" "}
      <span onClick={() => setBioText(curious)} className={linkStyle}>
        curious
      </span>{" "}
      and{" "}
      <span onClick={() => setBioText(enthusiastic)} className={linkStyle}>
        enthusiastic
      </span>{" "}
      apprentice{" "}
      <Link to="/coding" className={linkStyle}>
        coder
      </Link>
      . I&apos;m a multifaceted{" "}
      <span onClick={() => setBioText(professional)} className={linkStyle}>
        professional
      </span>{" "}
      with a lot of{" "}
      <span onClick={() => setBioText(interests)} className={linkStyle}>
        interests
      </span>{" "}
      and I live in{" "}
      <a
        href="https://youtu.be/6fRIsOo6Jqk?feature=shared"
        className={linkStyle}
      >
        Italy
      </a>{" "}
      with my dog.
    </p>
  );

  const curious = (
    <p>
      I&apos;m always learning to something. I love{" "}
      <a
        href="https://youtu.be/RKK7wGAYP6k?feature=shared"
        target="_blank"
        className={linkStyle}
      >
        languages
      </a>
      , I&apos;m fascinated by{" "}
      <a
        href="https://youtu.be/7AZrskHLKl4?feature=shared"
        target="_blank"
        className={linkStyle}
      ></a>
      space and I&apos;m passionate about discussing{" "}
      <a href="https://www.ilpost.it/" target="_blank" className={linkStyle}>
        policies and politics
      </a>
      . I&apos;ve studied Linguistic and cultural mediation at{" "}
      <a
        href="https://www.unive.it/web/en/5134/home"
        target="_blank"
        className={linkStyle}
      >
        university
      </a>{" "}
      and Art in high school.
      {backButton}
    </p>
  );

  const enthusiastic = (
    <p>
      I like to think that starting to learn computer languages was a natural
      extension to learning human languages. I&apos;m mainly working with{" "}
      <a href="https://flow.bello.codes" target="_blank" className={linkStyle}>
        React
      </a>{" "}
      and{" "}
      <a
        href="https://github.com/angiejo21/REACH17"
        target="_blank"
        className={linkStyle}
      >
        Node
      </a>{" "}
      but I&apos;m dipping my feet in Python, PHP and SQL as well. I just love
      the idea of building things through language 🧱.
      {backButton}
    </p>
  );

  const professional = (
    <p>
      I&apos;ve worked as an executive assistant for 4 years in a small company
      that produces custom{" "}
      <a
        href="https://www.instagram.com/p/C8ck-hYqWNS/?img_index=1"
        target="_blank"
        className={linkStyle}
      >
        furniture
      </a>
      . There, I followed orders from concept to delivery, dealing with clients
      and suppliers alike, as well as making sure that operations run smoothly
      within our team.
      {backButton}
    </p>
  );

  const interests = (
    <p>
      Music is a constant in my life,{" "}
      <a
        href="https://www.youtube.com/watch?v=4xDzrJKXOOY&ab_channel=LofiGirl"
        target="_blank"
        className={linkStyle}
      >
        quiet
      </a>{" "}
      while I&apos;m working and{" "}
      <a
        href="https://youtu.be/GR3Liudev18?feature=shared"
        target="_blank"
        className={linkStyle}
      >
        loud
      </a>{" "}
      when I&apos;m not. I love stories, so theatre and cinema are my jam.
      I&apos;ve been{" "}
      <a
        href="https://www.youtube.com/@angelabello90"
        target="_blank"
        className={linkStyle}
      >
        playing
      </a>{" "}
      and singing in{" "}
      <a
        href="https://youtu.be/n3Uv1yhEaBI?feature=shared"
        target="_blank"
        className={linkStyle}
      >
        musicals
      </a>{" "}
      for now five years.
      {backButton}
    </p>
  );

  const [bioText, setBioText] = useState(beginning);

  return <div className="text-xl text-center">{bioText}</div>;
}

export default Bio;
