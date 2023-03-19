import { Avatar, Box, Typography } from "@mui/material";
import person from "../../Image/person.jpg";
import { AiFillSkype } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { navbarData } from "../../Data";
import { MenuList } from "../../Style/MenuItem";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { useState } from "react";

const socials = [
  <FaTwitter color="white" />,
  <FaFacebookF color="white" />,
  <FaInstagram color="white" />,
  <AiFillSkype color="white" />,
  <FaLinkedinIn color="white" />,
];

const Header = ({ width, setOpenDrawer, openDrawer }) => {
  const [isActive, setActive] = useState("Home");

  const scroll = (item) => {
    const section = document.querySelector(`#${item}`);
    section.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      setOpenDrawer(!openDrawer);
    }, 1000);
  };

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      py={2}
      sx={{
        width: { xs: `${width + 20}%`, sm: `${width}%` },
        background: "#040b14",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 999999,
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Zoom duration={1000} triggerOnce>
          <Box
            sx={{
              width: "140px",
              height: "140px",
              border: "8px solid #2c2f3c",
              borderRadius: "50%",
            }}
          >
            <Avatar
              variant="circular"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={person}
              alt="Afthor"
            />
          </Box>
        </Zoom>
        <Slide direction={"up"}>
          <Typography
            component={"h3"}
            variant="h4"
            sx={{ fontWeight: "bold", fontSize: "25px", cursor: "pointer" }}
            color={"white"}
            mt={1.5}
          >
            Rofiyev Dilshod
          </Typography>
        </Slide>
        <Box mt={2} display={"flex"} gap={1}>
          {socials.map((item, index) => (
            <Slide
              key={index}
              direction="up"
              delay={index * 100}
              duration={"1500"}
            >
              <Box
                width={"35px"}
                height={"35px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  background: "#212431",
                  borderRadius: "50%",
                  cursor: "pointer",
                  ":hover": {
                    background: "#149ddd",
                  },
                }}
              >
                {item}
              </Box>
            </Slide>
          ))}
        </Box>
      </Box>
      <Box marginX={"auto"} sx={{ width: { lg: "60%", xl: "50%" } }}>
        <Fade cascade damping={0.2}>
          {navbarData.map((item, index) => (
            <MenuList
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => {
                scroll(item.text.toLowerCase());
                setActive(item.text);
              }}
              key={index}
            >
              <Typography
                className={`iconWrapper ${isActive === item.text && "active"}`}
              >
                {item.icon}
              </Typography>
              <Typography
                component={"a"}
                className={`title ${isActive === item.text && "active"}`}
              >
                {item.text}
              </Typography>
            </MenuList>
          ))}
        </Fade>
      </Box>
      <Fade duration={"1500"}>
        <Box component={"footer"} textAlign={"center"} variant="footer">
          <Typography
            sx={{ fontWeight: "200", fontSize: "14px" }}
            component={"span"}
            color={"white"}
          >
            © Copyright
          </Typography>
          <Typography
            ml={1}
            sx={{ fontWeight: "bold", fontSize: "15px" }}
            component={"span"}
            color={"white"}
          >
            Portfolio
          </Typography>
          <br />
          <Typography
            sx={{ fontSize: "13px" }}
            component={"span"}
            color={"white"}
          >
            Designed by
          </Typography>
          <Typography
            ml={1}
            sx={{
              fontSize: "13px",
              color: "#149ddd",
              ":hover": {
                textDecoration: "underline",
              },
            }}
            component={"span"}
            color={"white"}
          >
            BootstrapMade
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};
export default Header;
