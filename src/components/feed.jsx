import React, { useEffect, useState } from "react";

import Card from "./card";
import Masonry from "react-masonry-css";
import TitleCard from "./titleCard";
import css from "../css/Feed.module.css";

const Feed = () => {
  const [tweets, setTweets] = useState([{}]);

  function fetchTweets() {
    let sheet =
      "https://spreadsheets.google.com/feeds/cells/1tfGJ6bxmcPcvhJ1n2WYGanxfgw3HAWuZ-r5TdN4KmkI/1/public/full?alt=json";

    fetch(sheet)
      .then(res => {
        return res.json();
      })
      .then(data => {
        let cells = data.feed.entry;
        var dataRows = [];

        for (var i = 0; i < cells.length; i += 9) {
          dataRows.push({
            id: cells[i].content.$t,
            timestamp: cells[i + 1].content.$t,
            likes: cells[i + 2].content.$t,
            retweets: cells[i + 3].content.$t,
            tweet: cells[i + 4].content.$t,
            user_id: cells[i + 5].content.$t,
            name: cells[i + 6].content.$t,
            screen_name: cells[i + 7].content.$t,
            user_image: cells[i + 8].content.$t
          });
        }

        setTweets(dataRows);
      });
  }

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <>
      <TitleCard />
      <Masonry
        breakpointCols={2}
        className={css.container}
        columnClassName={css.column}>
        {tweets.map(tweet => {
          return tweet.id === "ID" ? (
            <></>
          ) : (
            <Card key={tweet.id} obj={tweet} />
          );
        })}
      </Masonry>
    </>
  );
};

export default Feed;
