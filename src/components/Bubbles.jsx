import { useRef } from "react";

function Bubbles() {
  // const mouseBubble = useRef(null);
  // let curX = 0;
  // let curY = 0;
  // let tgX = 0;
  // let tgY = 0;

  // function handleMouse(e) {
  //   tgX = e.clientX;
  //   tgY = e.clientY;
  //   move();
  // }

  // function move() {
  //   curX += tgX - curX / 20;
  //   curY += tgY - curY / 20;
  //   mouseBubble.current.style.transform = `translate(${Math.round(
  //     curX
  //   )}px, ${Math.round(curY)}px)`;
  //   requestAnimationFrame(() => {
  //     move();
  //   });
  // }

  return (
    <div
      className="w-screen h-screen absolute overflow-hidden top-0 left-0"
      // onMouseMove={(e) => handleMouse(e)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="svgBubbles">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="bubble-container w-full h-full">
        <div className="bubble b1"></div>
        <div className="bubble b2"></div>
        <div className="bubble b3"></div>
        <div className="bubble b4"></div>
        <div className="bubble b5"></div>
        {/* <div className="bubble interactive" ref={mouseBubble}></div> */}
      </div>
    </div>
  );
}

export default Bubbles;
