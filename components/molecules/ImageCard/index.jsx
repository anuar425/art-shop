import { Image } from "@/components/atoms";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

function ImageCard(props) {
  return (
    <>
      <div className="image-card__container" {...props.containerProps}>
        <MouseParallaxContainer
          className="parallax-container"
          globalFactorX={0.3}
          globalFactorY={0.3}
          resetOnLeave
        >
          <div className="container-banner">
            <h4>Image name</h4>
            <p>View</p>
          </div>
          <MouseParallaxChild
            className="parallax-child"
            factorX={0.5}
            factorY={0.5}
          >
            <Image {...props.imageProps} />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </>
  );
}

export default ImageCard;
