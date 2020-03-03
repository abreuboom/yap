import Dots from "./dots";
import React from "react";
import css from "../css/TitleCard.module.css";

export default function TitleCard() {
  return (
    <div className='card'>
      <div className={css.container}>
        <Dots />
        <div className={css.titleText}>
          <p>YAP</p>
          <h1>Design Twitter Curated.</h1>
        </div>
      </div>
    </div>
  );
}
