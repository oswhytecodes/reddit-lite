import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/RedditSlice";

export const PostCards = () => {
  const redditData = useSelector((state) => state.reddit.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const styles = {
    fontWeight: "bold",
    fontSize: ".8rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };
  return (
    <div>
      {redditData.map((x) => {
        return (
          <div className="post-card" key={x.data.id}>
            <div className="row one" style={styles}>
              <p>{x.data.subreddit_name_prefixed}</p>
              <p>join {x.data.subreddit_name_prefixed}</p>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="row two"
            >
              <div style={{ display: "flex" }} className="column one">
                <div
                  className="upvotes"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <i class="fa-solid fa-arrow-up"></i>
                  <p>{x.data.ups}</p>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>

                <div
                  className="column two"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "2em",
                    gap: "1.4em"
                  }}
                >
                  <p >{x.data.title}</p>

                  <img
                    className="thumbnails"
                    src={x.data.thumbnail}
                    alt="thumbnail"
                  />
                  <div style={styles} className="row four">
                    <p>{x.data.author}</p>
                    <p>{x.data.num_comments}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
