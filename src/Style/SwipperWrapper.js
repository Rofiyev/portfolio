import { styled } from "@mui/system";
export const SwipperWrapper = styled("Box")({
  ".slideItem": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px 0",
  },
  ".item::after": {
    content: "''",
    position: "absolute",
    bottom: "-15px",
    left: "50%",
    width: "30px",
    height: "30px",
    background: "#f5f8fd",
    transform: "translateX(-50%) rotate(45deg)",
  },
  ".swiper-pagination-bullet": {
    width:
      "var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,15px))",
    height:
      "var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,15px))",
    opacity: "0.8",
    background: "none",
    border: "2px solid #149ddd",
  },
  ".swiper-pagination-bullet-active": {
    background: "#149ddd",
  },
  ".swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction":
    {
      bottom: "0px",
    },
});
