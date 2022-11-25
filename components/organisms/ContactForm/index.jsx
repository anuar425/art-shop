function ContactForm() {
  return (
    <>
      <section className="contact-form py-5">
        <div className="container">
          <form>
            <div className="row justify-content-center">
              <div className="col-lg-8 col fw-semibold fs-5">
                <h1 className="fw-bold mb-5">Contact me</h1>
                <div className="row mb-3">
                  <div className="col-lg col-md-12 mb-lg-0 mb-3">
                    <label htmlFor="firstname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-lg col-md-12">
                    <label htmlFor="lastname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Your message
                  </label>
                  <textarea className="form-control" id="message" rows="3" />
                </div>
                <div className="row">
                  <div className="col col-lg-4">
                    <button className="btn btn-primary fw-semibold fs-5 py-2 w-100">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
