import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import css from "../css/Feed.module.css";
import { fetchTweets } from "../backend/server.js";

const Feed = () => {
  const [hasError, setErrors] = useState(false);
  const [tweets, setTweets] = useState(0);

  useEffect(() => {
    fetchTweets();
  });

  return <div className={css.container}></div>;
};

export default Feed;
