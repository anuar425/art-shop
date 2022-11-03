import { ImageCard } from "@/components/molecules";
import Link from "next/link";
import { useEffect } from "react";
import Masonry from "react-masonry-css";
import { connect } from "react-redux";

function ShopGallery(props) {
  useEffect(() => {
    console.log(props.app.images);
  }, []);
  return (
    <>
      <div className="row">
        <Masonry
          breakpointCols={4}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {props.app.images.map((image, idx) => (
            <>
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
            </>
          ))}
        </Masonry>
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
