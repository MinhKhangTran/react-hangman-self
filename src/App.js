import React from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetter from "./components/WrongLetter";
import RightLetter from "./components/RightLetter";
import Modal from "./components/Modal";
import Alert from "./components/Alert";

const woerter = [
  "react",
  "tailwind",
  "styledcomponents",
  "javascript",
  "johnSmilga"
];
const randomZahl = Math.floor(Math.random() * woerter.length);
let randomWort = woerter[randomZahl];

export default function App() {
  const [richtig, setRichtig] = React.useState([]);
  const [falsch, setFalsch] = React.useState([]);
  const [play, setPlay] = React.useState(true);
  const [alert, setAlert] = React.useState({ show: false, msg: "" });

  // console.log(randomWort);
  const showAlert = (show = false, msg = "") => {
    setAlert({ show, msg });
  };

  React.useEffect(() => {
    const tastenEingabe = (e) => {
      //console.log(e.key, e.keyCode);
      const { key, keyCode } = e;
      //console.log(key);

      if (play && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        console.log(letter);

        if (randomWort.includes(letter)) {
          if (!richtig.includes(letter)) {
            console.log(letter);

            setRichtig((oldValue) => {
              return [...oldValue, letter];
            });
          } else {
            showAlert(true, "Dieser Buchstabe wurde schon betätigt");
          }
        } else {
          if (!falsch.includes(letter)) {
            setFalsch((oldValue) => {
              return [...oldValue, letter];
            });
          } else {
            showAlert(true, "Dieser Buchstabe wurde schon betätigt");
          }
        }
      }
    };
    window.addEventListener("keydown", tastenEingabe);
    return () => {
      window.removeEventListener("keydown", tastenEingabe);
    };
  }, [falsch, richtig, play]);
  const playAgain = () => {
    setPlay(true);
    setRichtig([]);
    setFalsch([]);
    const randomZahl = Math.floor(Math.random() * woerter.length);
    randomWort = woerter[randomZahl];
  };
  return (
    <div>
      <Header />
      <article className="flex justify-center mt-8">
        <Figure falsch={falsch} />
        <WrongLetter falsch={falsch} />
      </article>
      <RightLetter randomWort={randomWort} richtig={richtig} />
      <Modal
        randomWort={randomWort}
        richtig={richtig}
        falsch={falsch}
        playAgain={playAgain}
        setPlay={setPlay}
      />
      <Alert alert={alert} showAlert={showAlert} />
    </div>
  );
}
