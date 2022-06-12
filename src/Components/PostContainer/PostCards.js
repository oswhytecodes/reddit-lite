import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/RedditSlice";

export const PostCards = () => {
  const redditData = useSelector((state) => state.reddit.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const styles = {
    fontWeight: "bold",
    fontSize: ".8rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    color: "#125b50",
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
                    gap: "8px",
                    fontSize: "1.2em",
                  }}
                >
                  <i className="fa-solid fa-arrow-up"></i>
                  <p style={{ color: "#333" }}>{x.data.ups}</p>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>

                <div
                  className="column two"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "3.5em",
                    gap: "1em",
                  }}
                >
                  <p style={{ fontSize: "1.3rem" }}>{x.data.title}</p>

                  <img
                    className="thumbnails"
                    src={x.data.thumbnail}
                    alt="thumbnail"
                    style={{}}
                  />
                  <div style={styles} className="row four">
                    <p>{x.data.author}</p>
                    <div
                      style={{ display: "flex", gap: "5px", padding: "0 5px" }}
                    >
                      <i className="fa-solid fa-comment"></i>
                      <p>{x.data.num_comments}</p>
                    </div>
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
