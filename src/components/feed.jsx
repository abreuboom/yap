import React, { useEffect, useState } from "react";

import TitleCard from "./titleCard";
import css from "../css/Feed.module.css";
import { fetchTweets } from "../backend/api.js";

const Feed = () => {
  //   const [hasError, setErrors] = useState(false);
  //   const [tweets, setTweets] = useState(0);

  useEffect(() => {
    fetchTweets();
  });

  return (
    <div>
      <TitleCard />
      <div className={css.container}></div>
    </div>
  );
};

export default Feed;
