import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "junior full-stack developer at Polyconseil",
          "JS/TS and JAVA/SpringBoot Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
