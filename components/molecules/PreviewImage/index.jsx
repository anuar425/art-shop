import { Image, ModalContainer, NextImage } from "@/components/atoms";
import { clearImage, getImage } from "@/redux/slice/appSlice";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function PreviewImage(props) {
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  const CloseModal = () => {
    props.onHide();
  };

  useEffect(() => {
    // if (props.imageId != props.image?.id) {
    //   setImage(null);
    console.log(props.imageId - 1, "imageId");
    props.getImage(props.imageId - 1);
    // }
  }, [props.imageId]);

  useEffect(() => {
    console.log(props.image);

    console.log("image");
    setImage(props.image);
  }, [props.image]);

  return (
    <>
      <ModalContainer show={props.show} onHide={CloseModal} centered size="xl">
        {!image ? (
          <div
            className="row justify-content-center align-items-center"
            style={{ height: 800 }}
          >
            <div className="col-auto">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="row text-center mb-3">
              <h2>{image.name}</h2>
            </div>
            <div className="row justify-content-center mb-3">
              <div
                className="col position-relative"
                style={{ height: "580px" }}
              >
                <NextImage src={`/${image.path}`} alt="image" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8">
                <p>{image.description}</p>
              </div>
            </div>
          </>
        )}
      </ModalContainer>
    </>
  );
}

function mapStateToProps(state) {
  return {
    image: state.app.image,
  };
}

const mapDispatchToProps = (disptach) => ({
  clearImage: () => disptach(clearImage()),
  getImage: (id) => disptach(getImage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewImage);
