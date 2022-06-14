import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/RedditSlice";

export const PostCards = () => {
  const redditData = useSelector((state) => state.reddit.data);
  const categorySubreddit = useSelector(state => state.reddit.category)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(categorySubreddit));
  }, [dispatch, categorySubreddit]);

  const styles = {
    fontWeight: "bold",
    fontSize: ".8rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    color: "#125b50",
  };
  return (
    <div className="PostCard">
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
                <div className="upvotes">
                  <i className="fa-solid fa-arrow-up"></i>
                  <p style={{ color: "#333" }}>{x.data.ups}</p>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>

                <div className="column-two">
                  <p style={{ fontSize: "1.3rem" }}>{x.data.title}</p>

                  <img
                    className="thumbnails"
                    src={x.data.thumbnail}
                    alt="thumbnail"
                    style={{}}
                  />
                  <div style={styles} className="row four">
                    <p>{x.data.author}</p>
                    <div className="comments">
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
