import React, { useContext, useState } from "react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import backgrounImage from "../../Image/oboi.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowUp, FaBars } from "react-icons/fa";
import { ButtonWrapper } from "../../Style/toTopButtonStyle";
import NavbarContext from "../../Context/NavbarContext";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer", "Design", "Frelancer"],
      startDelay: 100,
      typeSpeed: 140,
      backSpeed: 140,
      backDelay: 140,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  // const { isOpen, setIsOpen } = useContext(NavbarContext);
  // console.log(isOpen);

  return (
    <Box
      id="home"
      height={"100%"}
      width={"100%"}
      sx={{
        background: `linear-gradient(to top, rgba(5, 13, 24, 0.4), rgba(5, 13, 24, 0.4)), url(${backgrounImage}) center center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <IconButton
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1%",
          top: "1%",
          zIndex: 100,
          color: "#149ddd",
        }}
        // onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </IconButton>
      <ButtonWrapper>
        <Button
          variant="contained"
          onClick={scrollToTop}
          className="btn"
          sx={{ display: visible ? "inline" : "none" }}
        >
          <FaArrowUp className="icon" />
        </Button>
      </ButtonWrapper>
      <Fade triggerOnce duration={2000}>
        <Container
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            marginLeft: "3%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              letterSpacing: "1px",
              fontFamily: "Poppins, sans-serif",
            }}
            color={"white"}
            component={"h1"}
            variant="h3"
          >
            Rofiyev Dilshod
          </Typography>
          <Typography
            component={"h3"}
            sx={{
              cursor: "pointer",
              color: "#f5f7fa",
              fontFamily: "Poppins, sans-serif",
            }}
            variant="h5"
          >
            I'm{" "}
            <Typography
              sx={{
                borderBottom: 3,
                borderColor: "#149ddd",
                paddingBottom: 0.8,
                letterSpacing: "1px",
              }}
              component={"span"}
              variant="span"
              ref={el}
            ></Typography>
          </Typography>
        </Container>
      </Fade>
    </Box>
  );
}
