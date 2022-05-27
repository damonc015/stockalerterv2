import NewsItem from "./NewsItem";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import classes from "./index.module.css"

const NewsList = (props) => {
  const { title, data } = props;
  return (
    <div className={classes.container}>
      <h1 style={{paddingTop:"2rem"}}>{title}</h1>
      {data.map((item) => {
        return (
          <Link href={item.url} key={uuidv4()}>
            <a className={classes.item}>
                <NewsItem
                  title={item.title}
                  source={item.source}
                  snippet={item.snippet}
                  image_url={item.image_url}
                />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default NewsList;
