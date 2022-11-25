import { ImageCard } from "@/components/molecules";
import Link from "next/link";
import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { connect } from "react-redux";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 2,
};

function ShopGallery(props) {
  useEffect(() => {
    // console.log(props.app.images);
  }, []);
  return (
    <>
      <div className="container py-3">
        <div className="row">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {props.app.images.map((image, idx) => (
              <>
                <React.Fragment key={`shop-image-${idx}`}>
                  <Link href={`/${idx}`}>
                    <a className=" text-black">
                      <ImageCard
                        imageProps={{
                          className: "w-100 h-50",
                          src: image.path,
                          alt: `image-alt-${idx}`,
                        }}
                      />
                    </a>
                  </Link>
                </React.Fragment>
              </>
            ))}
          </Masonry>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

export default connect(mapStateToProps)(ShopGallery);
