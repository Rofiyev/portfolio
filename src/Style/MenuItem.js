import { styled } from "@mui/system";
export const MenuList = styled("li")({
  display: "flex",
  alignItems: "flex-end",
  cursor: "pointer",
  margin: "10px 0",
  ":hover .icon, .iconWrapper.active .icon": {
    color: "#129ddd",
  },
  ":hover .title, .title.active": {
    color: "#fff",
  },
  ".icon": {
    fontSize: "25px",
    color: "#a8a9b4",
  },
  ".title": {
    color: "#a8a9b4",
    marginLeft: "10px",
  },
});
