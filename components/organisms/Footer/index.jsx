import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="bg-brown py-5 text-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="d-flex justify-content-between">
                <div className="footer__author-action fw-semibold">
                  <p>
                    I'm always happy to <br /> discuss new projects.{" "}
                  </p>
                  <Link href="\contact">
                    <a className=" link-light">Contact me.</a>
                  </Link>
                </div>
                <div className="text-end align-self-center fs-5 ">
                  <p className="mb-1">armat-bektas@mail.ru</p>
                  <p className="mb-1">armatbektas.gallery@gmail.com</p>
                  <p className="mb-1">8 701 711 90 91</p>
                  <div className="d-flex justify-content-end gap-2">
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
        </div>
        <div className="bg-blue text-light">
          <div className="container">
            <div className="row">
              <div className="col-auto py-4">
                <h1>Join The Discount Club.</h1>
                <p>
                  Instantly receive a discount, and be the first to find out
                  about
                  <br />
                  new events, projects, and product drops.
                </p>
                <div>
                  <form className="d-flex h-auto gap-3">
                    <div className="input-group border-bottom ">
                      <span
                        className="input-group-text bg-transparent border-0 text-light"
                        id="basic-addon1"
                      >
                        <i class="bi bi-envelope"></i>{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control bg-transparent border-0 text-light text-bg-dark"
                        placeholder="Email Address"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <button className="btn bg-light text-bg-light fw-bolder rounded-0">
                      Join
                    </button>
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
