import React from "react";

export default function WrongLetter({ falsch }) {
  return (
    <div className="text-indigo-100 font-bold">
      {falsch.length > 0 && <h1>Wrong</h1>}
      <div className="flex">
        {falsch
          .map((letter, index) => {
            return (
              <p key={index} className="font-semibold">
                {letter}
              </p>
            );
          })
          .reduce((total, curr) => {
            return total === null ? [curr] : [total, ", ", curr];
          }, null)}
      </div>
    </div>
  );
}
