import Link from "next/link";

function Header() {
  return (
    <>
      <section className="header shadow-sm sticky-top navbar-light ">
        <nav className="navbar navbar-expand-lg  bg-light px-lg-3 py-lg-4 fw-semibold ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Armat Bektas
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav gap-4">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link" aria-current="page" href="#">
                      Work
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/events">
                    <a className="nav-link">Events</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/shop">
                    <a className="nav-link">Shop</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link">Contact</a>
                  </Link>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
