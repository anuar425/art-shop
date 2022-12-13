import { ArticleCard } from "@/components/molecules";
import { articles } from "@/public/articles";
import React, { useEffect } from "react";
import { useState } from "react";

function ArticlesList() {
  const [articlesList, setArticlesList] = useState(null);

  useEffect(() => {
    setArticlesList(articles);
  }, []);

  return (
    <>
      <div className="articles-list">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h1 className="articles-list-page-title">Articles</h1>
            </div>
          </div>
          <div className="d-flex flex-column gap-5">
            {articlesList ? (
              articlesList.map((article, idx) => (
                <React.Fragment key={idx}>
                  <ArticleCard article={article} />
                </React.Fragment>
              ))
            ) : (
              <>
                <ArticleCard />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticlesList;
