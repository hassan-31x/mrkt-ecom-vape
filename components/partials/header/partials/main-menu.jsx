import Link from "next/link";
import { useRouter } from "next/navigation";

function MainMenu() {
  const router = useRouter();
  let path = router?.asPath;
  let query = router?.query;

  function showAllDemos(e) {
    let demoItems = document.querySelectorAll(".demo-item.hidden");

    for (let i = 0; i < demoItems?.length; i++) {
      demoItems[i].classList.toggle("show");
    }

    document
      .querySelector(".view-all-demos")
      .classList.toggle("disabled-hidden");
    e.preventDefault();
  }

  return (
    <nav className="main-nav">
      <ul className="menu sf-arrows">
        <li
          className={`megamenu-container ${path === "/" ? "active" : ""}`}
          id="menu-home"
        >
          <Link href="/" className="sf">
            Home
          </Link>
        </li>
        <li className={path?.indexOf("/ejuice") > -1 ? "active" : ""}>
          <Link href="/ejuice" className="sf" scroll={false}>
            Ejuices
          </Link>

        </li>
        <li className={path?.indexOf("/about") > -1 ? "active" : ""}>
          <Link
            href="/about"
            className="sf"
          >
            About
          </Link>
        </li>
        <li className={path?.indexOf("/about") > -1 ? "active" : ""}>
          <Link href="/about" className="sf">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
