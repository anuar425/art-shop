import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="bg-brown py-5 text-light">
          <div className="container">
            <div className="row justify-content-md-between">
              <div className="col-12 col-lg-auto mb-5 mb-lg-0 footer__author-action fw-semibold">
                <p>
                  I'm always happy to <br />
                  discuss new projects.
                </p>
                <Link href="/contact">
                  <a className=" link-light">Contact me.</a>
                </Link>
              </div>
              <div className="col-12 col-lg-auto col text-lg-end align-self-lg-center fs-5">
                <p className="mb-1">armat-bektas@mail.ru</p>
                <p className="mb-1">armatbektas.gallery@gmail.com</p>
                <p className="mb-1">8 701 711 90 91</p>
                <div className="d-flex justify-content-lg-end gap-2">
                  <i className="bi bi-instagram fs-4"></i>
                  <i className="bi bi-facebook fs-4"></i>
                  <i className="bi bi-twitter fs-4"></i>
                  <i className="bi bi-youtube fs-4"></i>
                  <i className="bi bi-telegram fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue text-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-auto">
                <h1>Join The Discount Club.</h1>
                <p>
                  Instantly receive a discount, and be the first to find out
                  about
                  <br />
                  new events, projects, and product drops.
                </p>
                <div>
                  <form className="row">
                    <div className="col-md col-12 mb-3 mb-md-0">
                      <div className=" input-group border-bottom ">
                        <span
                          className="input-group-text bg-transparent border-0 text-light"
                          id="basic-addon1"
                        >
                          <i className="bi bi-envelope"></i>{" "}
                        </span>
                        <input
                          type="text"
                          className="form-control bg-transparent border-0 text-light text-bg-dark"
                          placeholder="Email Address"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-12">
                      <button className="btn bg-light text-bg-light fw-bolder rounded-0 w-100">
                        Join
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
