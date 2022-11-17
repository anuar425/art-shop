import { Image } from "@/components/atoms";
import { getImage } from "@/redux/slice/appSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function ShopImage(props) {
  const router = useRouter();

  const [image, setImage] = useState(null);
  const [fullImage, setFullImage] = useState(false);

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
      <section className="container shop-image__container py-5 ">
        {image && (
          <>
            <div className="row">
              <div className="col-8 d-flex justify-content-center mb-4 shop-image__picture ">
                <Image
                  src={props.app.image.path}
                  alt="image-preview"
                  className="w-100"
                />
              </div>
              <div className="col mb-4 ps-5">
                <h1 className="mb-4">{props.app.image.name}</h1>
                <h5 className="mb-4">$700.00</h5>
                <p className="mb-4">{props.app.image.description}</p>
                <p className="mb-1">- Watch the Painting Process</p>
                <p className="mb-1">- 20" x 20" Acrylic on Canvas</p>
                <p className="mb-1">- Signed by The Artist</p>
                <p className="mb-5">- Free International Shipping</p>
                <form>
                  <div className="w-25 mb-4">
                    <label for="quantity" className="form-label fw-semibold">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      defaultValue="1"
                    />
                  </div>
                  <button className="btn btn-primary w-100">
                    {" "}
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopImage);
