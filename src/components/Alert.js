import React from "react";

export default function Alert({ alert, showAlert }) {
  React.useEffect(() => {
    let timer = setTimeout(() => {
      showAlert();
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);
  return (
    <div
      className={`${
        alert.show
          ? "fixed top-0 bg-indigo-100 transform -translate-x-1/2 p-4 rounded-xl translate-y-0 transition transition-all duration-700 ease-in-out"
          : "fixed top-0 bg-indigo-100 transform -translate-x-1/2 p-4 rounded-xl -translate-y-full transition transition-all duration-700 ease-in-out"
      }`}
      style={{ left: "50%" }}
    >
      <h1>{alert.msg}</h1>
    </div>
  );
}
