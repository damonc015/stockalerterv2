import { Fragment } from "react";
import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  const { title, source, snippet, image_url } = props;
  const handleImgError = (e) => {
    e.target.src = "/images/noImage.jpg";
  };
  let formattedTitle;
  if (title.length > 80) {
    formattedTitle = title.slice(0, 80) + "...";
  } else {
    formattedTitle = title;
  }
  return (
    <Fragment>
      <div className={classes.imageContainer}>
        <img
          src={image_url}
          alt="Article Image"
          width="210px"
          height="150px"
          onError={handleImgError}
        ></img>
      </div>
      <div className={classes.textContainer}>
        <h2>{formattedTitle}</h2>
        <p style={{ fontSize: ".8rem" }}>{source}</p>
        <p className={classes.snippet}>{snippet}</p>
      </div>
    </Fragment>
  );
};

export default NewsItem;
