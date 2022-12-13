import { MobileMenu, NavigationMenu } from "@/components/molecules";
import useModal from "@/Hooks/useModal";
import Link from "next/link";

function Header() {
  const { show, toggle } = useModal();

  const handleShowOffCanvas = () => {
    toggle();
  };

  return (
    <>
      <section className="header shadow-sm sticky-top navbar-light">
        <nav className="navbar navbar-expand-lg  bg-light px-lg-3 fw-semibold h-100 ">
          <div className="container-fluid flex-row-reverse flex-lg-row">
            <Link href="/">
              <a className="navbar-brand fs-3">Armat Bektas</a>
            </Link>

            <button className="navbar-toggler" onClick={handleShowOffCanvas}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <MobileMenu showMenu={show} closeMenu={toggle} />

            <div className="collapse navbar-collapse justify-content-md-end">
              <NavigationMenu />
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
