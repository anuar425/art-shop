import { clearImage, getImage } from "@/redux/slice/appSlice";
import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import { Image } from "@/components/atoms";

function PreviewImage(props) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [fullscreenHover, setFullscreenHover] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const modalOverflowRef = useRef();
  const closeButtonRef = useRef();
  const closeRef = useRef();

  const closeModal = (event) => {
    if (
      modalOverflowRef.current === event.target ||
      closeButtonRef.current === event.target ||
      closeRef.current === event.target
    ) {
      props.onHide();
    }
  };

  useEffect(() => {
    props.getImage(props.imageId - 1);
  }, [props.imageId]);

  useEffect(() => {
    setImage(props.image);
  }, [props.image]);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    console.log("close");
    if (props.show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [props.show]);

  if (isBrowser) {
    return (
      <>
        {ReactDOM.createPortal(
          <>
            <LazyMotion features={domAnimation}>
              <AnimatePresence initial={false} exitBeforeEnter={true}>
                {props.show ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    // transition={{
                    //   duration: 0.2,
                    // }}
                    className="preview-modal-overlay"
                  >
                    <div
                      className="preview-modal"
                      ref={modalOverflowRef}
                      onClick={closeModal}
                    >
                      <div className="preview-modal-container container-fluid">
                        <div className="preview-modal-content row justify-content-center">
                          <div className="col-12 mb-3 fs-4 d-md-none d-block">
                            <div
                              className=" bi bi-x-lg"
                              ref={closeRef}
                              onClick={closeModal}
                            ></div>
                          </div>
                          <div
                            className={`${
                              fullscreen
                                ? "preview-modal-image-container-full"
                                : "preview-modal-image-container"
                            } col-12`}
                          >
                            {!image ? null : (
                              <>
                                <div className="preview-modal-image-button">
                                  <Image
                                    src={`/${image.path}`}
                                    alt="image"
                                    className="preview-modal-image"
                                    onMouseEnter={() =>
                                      setFullscreenHover(true)
                                    }
                                    onMouseLeave={() =>
                                      setFullscreenHover(false)
                                    }
                                    onClick={() => setFullscreen(!fullscreen)}
                                  />
                                  <div
                                    className={`preview-modal-image-fullscreen bi bi-arrows-fullscreen ${
                                      fullscreenHover ? "d-block" : "d-none"
                                    }`}
                                    onMouseEnter={() =>
                                      setFullscreenHover(true)
                                    }
                                    onMouseLeave={() =>
                                      setFullscreenHover(false)
                                    }
                                    onClick={() => setFullscreen(!fullscreen)}
                                  ></div>
                                </div>
                              </>
                            )}
                          </div>

                          <div className="preview-modal-description col-12 col-lg-8 fs-4">
                            {!image ? null : (
                              <>
                                <h2>{image.name}</h2>
                                <p>{image.description}</p>
                              </>
                            )}
                          </div>
                          {/* <div className="preview-modal-text-container offset-4 col-6">
                        {!image ? null : (
                          <>
                            <p>Description</p>
                            <p>{image.description}</p>
                          </>
                        )}
                      </div> */}
                        </div>
                      </div>
                      <div
                        className="preview-modal-close bi bi-x-lg"
                        ref={closeButtonRef}
                        onClick={closeModal}
                      ></div>
                      <div className="preview-modal-left bi bi-chevron-left"></div>
                      <div className="preview-modal-right bi bi-chevron-right"></div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </LazyMotion>
          </>,
          document.body
        )}

        {/* <ModalContainer show={props.show} onHide={CloseModal} centered size="xl">
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
        </ModalContainer> */}
      </>
    );
  } else {
    return null;
  }
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
