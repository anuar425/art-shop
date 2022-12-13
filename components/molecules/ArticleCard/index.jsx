import { useRouter } from "next/router";
import { useEffect } from "react";

function ArticleCard({ article }) {
  const router = useRouter();

  const selectArticle = (event, id) => {
    event.preventDefault();
    router.push(`articles/${id}`);
  };

  // const shortenText = (text) => {
  //   if (text === undefined) return;
  //   return text.slice(0, 300) + "...";
  // };

  useEffect(() => {
    console.log(article);
  }, [article]);

  return (
    <>
      <div
        className="article-card col row"
        onClick={(event) => selectArticle(event, "1")}
      >
        <div className="article-card__image col-auto bg-secondary text-light  d-flex align-items-center justify-content-center">
          <p className="m-0 fs-4 fw-semibold">No image</p>
        </div>
        <div className="col">
          <h4 className="article-card__title border-bottom border-dark pb-2">
            {article?.title}
          </h4>
          <p className="article-card__description">{article?.text}</p>
        </div>
      </div>
    </>
  );
}

export default ArticleCard;
