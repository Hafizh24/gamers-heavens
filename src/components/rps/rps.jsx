"use client";

import { useState } from "react";
import styles from "./rps.module.css";
import rock from "../../../public/img/rps/batu.png";
import paper from "../../../public/img/rps/kertas.png";
import scissors from "../../../public/img/rps/gunting.png";
import refresh from "../../../public/img/rps/refresh.png";
import Image from "next/image";

const RPS = () => {
  const [result, setResult] = useState("vs");
  const [computerChoice, setComputerChoice] = useState("");
  const [chosenButton, setChosenButton] = useState("");
  const [chosenComputerButton, setChosenComputerButton] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const handleOptionsClick = (playerChoice) => {
    const newComputerChoice = getComputerChoice();
    setComputerChoice(newComputerChoice);
    setChosenButton(playerChoice);
    setChosenComputerButton(newComputerChoice);

    const newResult = getResult(playerChoice, newComputerChoice);
    setResult(newResult);

    setIsClicked(true);
  };

  // Generate computer's choice
  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // Determine game result
  function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "DRAW";
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      return "PLAYER 1 WIN";
    }
    return "COM WIN";
  }

  return (
    <>
      <div className={styles.main}>
        <div className={`${styles["area__player"]} col-4`}>
          <h1 className={styles.area__player_h1}>player 1</h1>
          <div className={styles.rps}>
            <button
              className={`${styles.rock} ${
                chosenButton === "rock" ? styles.buttonChosen : ""
              }`}
              onClick={() => handleOptionsClick("rock")}
              id={styles.button}>
              <Image src={rock} alt="Rock" id={styles.rock} />
            </button>
            <button
              className={`${styles.paper} ${
                chosenButton === "paper" ? styles.buttonChosen : ""
              }`}
              onClick={() => handleOptionsClick("paper")}
              id={styles.button}>
              <Image src={paper} alt="Paper" id={styles.paper} />
            </button>
            <button
              className={`${styles.scissors} ${
                chosenButton === "scissors" ? styles.buttonChosen : ""
              }`}
              onClick={() => handleOptionsClick("scissors")}
              id={styles.button}>
              <Image src={scissors} alt="Scissors" id={styles.scissors} />
            </button>
          </div>
        </div>
        <div className={`${styles["area__versus"]} col-4`}>
          <div className={`${styles.result} ${isClicked ? styles["draw__box"] : ""}`}>
            <h1 id={styles.versus} style={{ fontSize: isClicked ? "50px" : "144px" }}>
              {result}
            </h1>
          </div>
          <div className={styles.refresh}>
            <button type="button" onClick={() => window.location.reload()} id={styles.button}>
              <Image src={refresh} className={styles.img} />
            </button>
          </div>
        </div>
        <div className={`${styles["area__com"]} col-4`}>
          <h1>com</h1>
          <div className={styles.rps}>
            <button
              className={`${styles.comp__rock} ${
                chosenComputerButton === "rock" ? styles.buttonChosen : ""
              }`}
              id={styles.button}>
              <Image src={rock} alt="Scissors" id={styles.rock} />
            </button>
            <button
              className={`${styles.comp__paper} ${
                chosenComputerButton === "paper" ? styles.buttonChosen : ""
              }`}
              id={styles.button}>
              <Image src={paper} alt="Paper" id={styles.paper} />
            </button>
            <button
              className={`${styles.comp__scissors} ${
                chosenComputerButton === "scissors" ? styles.buttonChosen : ""
              }`}
              id={styles.button}>
              <Image src={scissors} alt="Scissors" id={styles.scissors} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RPS;
