import React from "react";

const style = {
  fill: "transparent",
  stroke: "#fff",
  strokeWidth: "4px",
  strokeLinecap: "round"
};
export default function Figure({ falsch }) {
  const fehler = falsch.length;
  return (
    <div className="flex justify-center" style={style}>
      <svg height="250" width="200" className="">
        {/* <!-- Rod --> */}

        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* <!-- Head --> */}
        {fehler > 0 && <circle cx="140" cy="70" r="20" className="" />}
        {/* <!-- Body --> */}
        {fehler > 1 && <line x1="140" y1="90" x2="140" y2="150" className="" />}
        {/* <!-- Arms --> */}
        {fehler > 2 && (
          <line x1="140" y1="120" x2="120" y2="100" className="" />
        )}
        {fehler > 3 && (
          <line x1="140" y1="120" x2="160" y2="100" className="" />
        )}
        {/* <!-- Legs --> */}
        {fehler > 4 && (
          <line x1="140" y1="150" x2="120" y2="180" className="" />
        )}
        {fehler > 5 && (
          <line x1="140" y1="150" x2="160" y2="180" className="" />
        )}
      </svg>
    </div>
  );
}
