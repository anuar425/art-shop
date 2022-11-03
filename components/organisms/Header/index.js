import Link from "next/link";

function Header() {
  return (
    <>
      <section className="header">
        <nav className="navbar navbar-expand-lg px-lg-3 py-lg-4 ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href={"/"}>
                    <a className="nav-link active" aria-current="page" href="#">
                      Work
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/about"}>
                    <a className="nav-link">About</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href={"/shop"}>
                    <a className="nav-link" href="#">
                      Shop
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/contact"}>
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
