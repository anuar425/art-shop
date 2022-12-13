import { articles } from "@/public/articles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Article() {
  const router = useRouter();
  const [articleContent, setArticleContent] = useState(null);

  const goBack = (event) => {
    router.back();
    event.preventDefault();
  };

  useEffect(() => {
    setArticleContent(articles[router.query.id - 1]);
  }, [router]);
  return (
    <>
      <section className="article py-5">
        <div className="container">
          <div className="row">
            <div className="col-auto position-relative">
              <div
                className="bi bi-arrow-left fs-2 px-4 position-sticky"
                style={{
                  top: "13%",
                  cursor: "pointer",
                }}
                onClick={(event) => goBack(event)}
              ></div>
            </div>
            <div className="col">
              {articleContent && (
                <>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <h1>{articleContent.title}</h1>
                    </div>
                    <div
                      className="col-12 fs-5"
                      style={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      <p className="mb-4">
                        Author:{" "}
                        <span className=" fw-bolder">
                          {articleContent.author}
                        </span>{" "}
                      </p>
                      <p>{articleContent.text}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Article;
