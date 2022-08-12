import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/RedditSlice";

export const PostCards = () => {
  const redditData = useSelector((state) => state.reddit.data);
  const redditLoading = useSelector((state) => state.reddit.loading);
  const redditError = useSelector((state) => state.reddit.error);

  // const { redditData, redditLoading, redditError } = useSelector(
  //   (state) => state.reddit
  // );

  const categorySubreddit = useSelector((state) => state.reddit.category);
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
    color: "#402839",
  };
  return (
    <div className="PostCard">
      {/* data that is currently loading */}

      {redditLoading && <p className="loading">Loading...</p>}
      {/* error handling */}
      {!redditLoading && redditError ? <p>Error: {redditError} </p> : null}
      {/*  data that is loaded */}
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

                  {/* {console.log((/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(x.data.thumbnail))} */}
                  <img
                    className="thumbnails"
                    loading="lazy"
                    // src={x.data.thumbnail}
                    src={
                      // regex to handle the thumbnails that are empty
                      /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(
                        x.data.thumbnail
                      )
                        ? x.data.thumbnail
                        : Logo 
                    }
                    alt="thumbnail"
                    style={{}}
                  />
                  <div style={styles} className="row four">
                    <p>
                      <span
                      style={{fontWeight: "200", fontSize: ""}}
                      >Posted by</span> {x.data.author}
                    </p>
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
      {/* <i className="fa-solid fa-spinner"></i> */}
    </div>
  );
};
