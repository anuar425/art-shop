import Link from "next/link";
function NavigationMenu({ navbarClassName = "navbar-nav gap-5" }) {
  return (
    <>
      <ul className={navbarClassName}>
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Work</a>
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
      </ul>
    </>
  );
}

export default NavigationMenu;
