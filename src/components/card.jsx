import React from "react";
import css from "../css/Card.module.css";

const Card = ({ obj }) => {
  return (
    <div className={"card " + css.card}>
      <div className={css.container}>
        <div className={css.header}>
          <img src={obj.user_image} alt='' className={css.profileImg} />
          <div className={css.userInfo}>
            <p className={css.name}>{obj.name}</p>
            <p className={css.screenName}>{"@" + obj.screen_name}</p>
          </div>
        </div>
        <div className={css.tweet}>
          <p>{obj.tweet}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
