import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

function StickyHeader(props) {
  const { top = 210 } = props;
  const router = useRouter(null);
  const ref = useRef(null);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    router?.events?.on("hashChangeComplete", initSticky);
    scrollHandler();
    window.addEventListener("scroll", scrollHandler, {
      passive: true,
    });

    window.addEventListener("resize", resizeHandler, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  function initSticky() {
    let stickyContent = ref.current.children[0];
    setHeight(stickyContent.offsetHeight + "px");
  }

  function scrollHandler() {
    let stickyContent = ref.current.children[0];
    if (window.pageYOffset > top) {
      if ( !stickyContent.classList.contains( 'lg-fixed' ) ) {
          stickyContent.classList.add( 'lg-fixed' );
      }
    } else if (stickyContent.classList.contains("lg-fixed")) {
      stickyContent.classList.remove("lg-fixed");
    } else {
      setHeight(stickyContent.offsetHeight + "px");
    }
  }

  function resizeHandler() {
    let stickyContent = ref.current.children[0];
    setHeight(stickyContent.offsetHeight + "px");
    scrollHandler();
  }

  return (
    <div ref={ref} className="sticky-wrapper" style={{ height: height }}>
      {props.children}
    </div>
  );
}

export default StickyHeader;
