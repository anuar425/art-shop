import { Image, NextLink } from "@/components/atoms";

function ImageLink(props) {
  return (
    <>
      <NextLink href={props.href}>
        <div className="image-link__container" {...props.containerProps}>
          <div className="container-banner">
            <h4>Image name</h4>
            <p>View</p>
          </div>
          <Image {...props.imageProps} />
        </div>
      </NextLink>
    </>
  );
}

export default ImageLink;
