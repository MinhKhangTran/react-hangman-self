import React from "react";

export default function Modal({
  richtig,
  playAgain,
  falsch,

  setPlay,
  randomWort
}) {
  // console.log(richtig.join(""));

  const checkWin = (richtig, falsch, randomWort) => {
    let status = "win";
    randomWort.split("").forEach((letter) => {
      if (!richtig.includes(letter)) {
        status = "";
      }
    });
    return status;
  };

  if (falsch.length === 6) {
    return (
      <div
        className="fixed top-0 left-0 w-screen h-screen "
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <article
          className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-indigo-100 p-8 rounded-lg"
          style={{ top: "50%", left: "50%" }}
        >
          <h1>Schade du hast verloren :(</h1>
          <button
            className="bg-indigo-200 text-indigo-700 px-3 rounded mt-8"
            onClick={playAgain}
          >
            <h2>Versuche es nochmal</h2>
          </button>
        </article>
      </div>
    );
  }
  if (checkWin(richtig, falsch, randomWort) === "win") {
    return (
      <div
        className="fixed top-0 left-0 w-screen h-screen "
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <article
          className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-indigo-100 p-8 rounded-lg"
          style={{ top: "50%", left: "50%" }}
        >
          <h1>Gut du hast gewonnen :D</h1>
          <button
            className="bg-indigo-200 text-indigo-700 px-3 rounded mt-8"
            onClick={playAgain}
          >
            <h2>Versuche es nochmal</h2>
          </button>
        </article>
      </div>
    );
  }
  return <div></div>;
}
