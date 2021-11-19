import React, { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { Button } from "react-bootstrap";
const userId = process.env.REACT_APP_USER;
export default function BlogLike({ defaultLikes, onChange, postId }) {
  const [likes, setLikes] = useState(defaultLikes);
  const iLikedThisArticle = likes.includes(userId);
  const toggleLike = () => {
    postLikes();
    if (iLikedThisArticle) {
      setLikes(likes.filter((id) => id !== userId));
    } else {
      setLikes([...likes, userId]);
    }
    onChange && onChange(likes);
  };

  const postLikes = async () => {
    try {
      let response = await fetch(
        `https://linkedin-buildweek.herokuapp.com/posts/${postId}/like`,
        {
          method: "POST",
          body: JSON.stringify(userId),
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("post is liked", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onChange && onChange(likes);
  }, [iLikedThisArticle]);

  return (
    <>
      <button
        className="btn btn-primary actuall-feed-h5"
        onClick={toggleLike}
        variant={iLikedThisArticle ? "dark" : "dark-outline"}
      >
        <i className="bi text-muted bi-hand-thumbs-up"></i>&nbsp;{" "}
        <span className="text-muted"> {`${likes.length}  like`}</span>
      </button>{" "}
    </>
  );
}
