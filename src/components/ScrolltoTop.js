import { useEffect, useRef } from "react";
import { Button } from "reactstrap";

const ScrolltoTop = () => {
  const buttonRef = useRef(null);

  const scrollFunction = () => {
    if (buttonRef.current) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        buttonRef.current.style.display = "block";
      } else {
        buttonRef.current.style.display = "none";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      id="back-to-top"
      className="p-0"
      onClick={scrollTop}
      ref={buttonRef}
      style={{ display: "none" }}
    >
      <i className="mdi mdi-arrow-up"></i>
    </Button>
  );
};

export default ScrolltoTop;
