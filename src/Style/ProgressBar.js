import { styled } from "@mui/system";
export const ProgressWrapper = styled("Box")({
  display: "flex",
  flexDirection: "column",
  ".titleWrapper": {
    display: "flex",
    justifyContent: "space-between",
  },
  ".title": {
    fontSize: "18px",
    color: "#000",
  },
  ".progress": {
    width: "100%",
    height: "10px",
    borderRadius: 2,
    position: "relative",
    background: "#dce8f8",
    overflow: "hidden",
  },
  ".progressValue": {
    position: "absolute",
    left: "0",
    top: "0",
    height: "100%",
    backgroundColor: "#149ddd",
  },
});
