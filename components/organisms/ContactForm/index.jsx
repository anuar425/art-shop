function ContactForm() {
  return (
    <section className="contact-form vh-100 py-5">
      <div className="container">
        <form>
          <div className="row justify-content-center">
            <div className="col-8 fw-semibold fs-5">
              <h1 className="fw-bold mb-5">Contact me</h1>
              <div className="d-flex mb-3 gap-3">
                <div className="w-50">
                  <label for="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="First name"
                  />
                </div>
                <div className="w-50">
                  <label for="lastname" className="form-label">
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
                <label for="email" className="form-label">
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
                <label for="message" className="form-label">
                  Your message
                </label>
                <textarea className="form-control" id="message" rows="3" />
              </div>
              <button className="btn btn-primary fw-semibold w-25 fs-5 py-2">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
