import { useState, useEffect } from "react";
import { Button } from "reactstrap";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra o botão quando a página é rolada para baixo
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Configura o listener do scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <Button
          color="primary"
          onClick={scrollToTop}
          className="btn-icon"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 99,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <i className="mdi mdi-arrow-up" style={{ fontSize: "1.25rem" }}></i>
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
