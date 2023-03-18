import { styled } from "@mui/system";
export const ResumeBox = styled("Box")({
  display: "flex",
  flexDirection: "column",
  borderLeft: "2px solid #1f5297",
  paddingLeft: "20px",
  position: "relative",

  ".date": {
    display: "inline-block",
    padding: "5px 15px",
    background: "#e4edf9",
    fontSize: "14px",
    marginBottom: "10px",
    fontWeight: "600",
    margin: "10px 0",
    borderRadius: "2px",
  },

  "&::before": {
    content: "''",
    position: "absolute",
    left: "-2.2%",
    transform: "translateX(5%)",
    top: "-3%",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "#fff",
    border: "2px solid #1f5297",
  },
});
