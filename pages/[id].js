import { getImage } from "@/redux/slice/appSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Image } from "@/components/atoms";

function SelectedImage(props) {
  const router = useRouter();

  const [image, setImage] = useState(null);

  useEffect(() => {
    props.getImage(router.query.id);
  }, []);

  useEffect(() => {
    if (props.app.image) {
      console.log(props.app.image);
      setImage(props.app.image);
    }
  }, [props.app.image]);

  return (
    <>
      <div className="container">
        {image && (
          <div className="row">
            <div className="col">
              <Image
                src={props.app.image.path}
                alt="image-preview"
                className="w-100"
              />
            </div>
            <div className="col">
              <h1>{props.app.image.name}</h1>
              <p>{props.app.image.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getImage: (id) => dispatch(getImage(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedImage);
