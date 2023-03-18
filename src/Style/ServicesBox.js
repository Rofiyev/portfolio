import { styled } from "@mui/system";
export const ServicesBox = styled("Box")({
  display: "flex",
  alignItems: "flex-start",

  ".icons:hover": {
    background: "#fff",
    border: "1px solid #149ddd",
  },
  ".icons:hover .icon": {
    color: "#149ddd",
  },

  cursor: "pointer",
  ".icon": {
    color: "#fff",
    fontSize: "1.5rem",
  },
});
