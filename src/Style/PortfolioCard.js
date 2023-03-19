import { styled } from "@mui/system";
export const PortfolioCard = styled("Box")({
  position: "relative",
  overflow: "hidden",
  transition: "0.8s ease-in-out",

  ":hover .image": {
    filter: "brightness(0.4)  blur(1.5px) blur(1.5px)",
  },
  ":hover .text": {
    opacity: "1",
    letterSpacing: "2px",
    textDecaration: "underline",
  },
  ".text": {
    overflow: "hidden",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: "0",
    transition: "0.8s ease-in-out",
  },
});
