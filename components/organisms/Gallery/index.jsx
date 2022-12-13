import { getImage, getImages } from "@/redux/slice/appSlice";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Masonry from "react-masonry-css";
import { ImageLink, PreviewImage, ImageCard } from "@/components/molecules";
import useModal from "@/Hooks/useModal";
import data from "@/testData";
import { motion } from "framer-motion";
import { galleryCardMotion } from "@/components/motion";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 2,
};

function Gallery(props) {
  const { show, toggle } = useModal();
  const [imageId, setImageId] = useState(null);

  const openPreview = (id, event) => {
    setImageId(id + 1);
    toggle();
  };

  useEffect(() => {
    // console.log(data);
    // props.getImages();
  }, []);

  return (
    <>
      <motion.section
        initial={"hidden"}
        whileInView={"animated"}
        viewport={{ amount: 0.1, once: true }}
        className="gallery bg-light py-5"
      >
        <div className="gallery__container">
          <h1 className="text-center mb-5">Gallery</h1>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {props.app?.images.map((image, key) => (
              <React.Fragment key={key}>
                <motion.div variants={galleryCardMotion} custom={key}>
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
                </motion.div>
              </React.Fragment>
            ))}
          </Masonry>
        </div>
      </motion.section>
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
