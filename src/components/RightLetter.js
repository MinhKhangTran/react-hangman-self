import React from "react";

export default function RightLetter({ randomWort, richtig }) {
  return (
    <div className="text-center text-indigo-100 mt-8">
      {randomWort.split("").map((letter, i) => {
        return (
          <span
            key={i}
            className="border-b-4 w-8 inline-block border-indigo-900 text-4xl mx-1 pb-2 h-8 inline-flex justify-center items-center"
          >
            {richtig.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
}
