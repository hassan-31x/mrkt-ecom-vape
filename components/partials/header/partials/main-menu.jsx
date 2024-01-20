import Link from "next/link";
import { usePathname } from "next/navigation";

function MainMenu() {
  let path = usePathname()

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
        <li className={path?.includes("/ejuice") ? "active" : ""}>
          <Link href="/ejuice" className="sf" scroll={false}>
            Ejuices
          </Link>

        </li>
        <li className={path?.includes("/blog") ? "active" : ""}>
          <Link
            href="/blog"
            className="sf"
          >
            Benefits
          </Link>
        </li>
        <li className={path?.includes("/about") ? "active" : ""}>
          <Link
            href="/about"
            className="sf"
          >
            About
          </Link>
        </li>
        <li className={path?.includes("/faq") ? "active" : ""}>
          <Link href="/faq" className="sf">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
