import { getImage, getImages } from "@/redux/slice/appSlice";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Masonry from "react-masonry-css";
import { ImageLink, PreviewImage, ImageCard } from "@/components/molecules";
import useModal from "@/Hooks/useModal";
import data from "@/testData";

function Gallery(props) {
  const { show, toggle } = useModal();
  const [imageId, setImageId] = useState(null);

  const openPreview = (id, event) => {
    setImageId(id + 1);
    toggle();
  };

  useEffect(() => {
    console.log(data);
    // props.getImages();
  }, []);

  return (
    <>
      <section className="gallery">
        <div className="gallery__container">
          <Masonry
            breakpointCols={4}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {props.app?.images.map((image, key) => (
              <React.Fragment key={key}>
                <ImageCard
                  containerProps={{
                    onClick: (event) => openPreview(key, event),
                  }}
                  imageProps={{
                    src: image.path,
                    alt: `image-alt-${key}`,
                    className: "w-100",
                  }}
                />
              </React.Fragment>
            ))}
          </Masonry>
        </div>
      </section>
      {imageId && (
        <PreviewImage show={show} onHide={toggle} imageId={imageId} />
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

const mapDispatchToProps = (disptach) => ({
  getImages: () => disptach(getImages()),
  getImage: (id) => disptach(getImage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);