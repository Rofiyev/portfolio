import { Avatar, Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Fade, Slide } from "react-awesome-reveal";
import { ServicesBox } from "../../Style/ServicesBox";
import { servicesData, sliderData } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";
import { SwipperWrapper } from "../../Style/SwipperWrapper";

export default function Services() {
  return (
    <Box id="services" pl={5} py={10} pr={2} sx={{ overflowX: "hidden" }}>
      <Box mt={10}>
        <Typography
          sx={{ fontWeight: "bold", color: "#173b6c", overflowX: "hidden" }}
          component={"h2"}
          variant="h4"
        >
          Services
          <Box width={"70px"} height={"3px"} bgcolor={"#149ddd"}></Box>
        </Typography>
        <Typography mt={2} mb={5} component={"p"} variant="p">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </Typography>

        <Grid container justifyContent={"center"} spacing={2}>
          {servicesData.map((item, index) => (
            <Grid key={index} item display={"flex"} xs={12} sm={6} md={4}>
              <ServicesBox>
                <Slide direction="up" duration={1000} triggerOnce>
                  <Box
                    className="icons"
                    sx={{
                      background: "#149DDD",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box ml={3}>
                    <Typography fontSize={"1.3rem"} component={"b"} variant="b">
                      {item.heading}
                    </Typography>
                    <Typography color={"#122f57"} mt={2}>
                      {item.description}
                    </Typography>
                  </Box>
                </Slide>
              </ServicesBox>
            </Grid>
          ))}
        </Grid>
        {/* Swipper js */}
        <Box width={"100%"} mt={8}>
          <Typography
            sx={{ fontWeight: "bold", color: "#173b6c", overflowX: "hidden" }}
            component={"h2"}
            variant="h4"
          >
            Testimonials
            <Box width={"70px"} height={"3px"} bgcolor={"#149ddd"}></Box>
          </Typography>
          <Typography mt={2} mb={5} component={"p"} variant="p">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </Typography>
          <SwipperWrapper>
            <Swiper
              spaceBetween={15}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 80 },
                480: { slidesPerView: 1, spaceBetween: 150 },
                768: { slidesPerView: 2, spaceBetween: 10 },
                1024: { slidesPerView: 3, spaceBetween: 10 },
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              centeredSlides={true}
              modules={[FreeMode, Pagination, Autoplay, Pagination, Navigation]}
              className="mySwiper"
              style={{
                width: "100%",
                height: "100%",
                marginTop: "50px",
                padding: "0 10px 50px",
              }}
            >
              {sliderData.map((item, index) => (
                <SwiperSlide key={index} className="slideItem">
                  <Fade>
                    <Box
                      className="item"
                      sx={{
                        boxShadow: "2px 2px 15px rgb(0 0 0 / 15%)",
                        p: 3,
                        borderRadius: 2,
                        position: "relative",
                        zIndex: 10,
                        background: "#f5f8fd",
                      }}
                    >
                      <Box>
                        <Typography
                          className="info"
                          component={"i"}
                          variant="i"
                          textAlign={"justify"}
                        >
                          <Typography
                            component={"span"}
                            variant="span"
                            sx={{
                              fontSize: "3rem",
                              color: "#149ddd",
                              float: "left",
                              height: "24px",
                              width: "34px",
                              position: "relative",
                              top: "-15px",
                              right: "8px",
                            }}
                          >
                            ❝
                          </Typography>{" "}
                          {item.description}
                          <Typography
                            component={"span"}
                            variant="span"
                            sx={{
                              fontSize: "3rem",
                              color: "#149ddd",
                              float: "right",
                              height: "24px",
                              width: "34px",
                              position: "relative",
                              bottom: "15px",
                              left: "8px",
                            }}
                          >
                            ❞
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      mt={5}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <Avatar
                        sx={{ width: "90px", height: "90px" }}
                        variant="circular"
                        src={item.image}
                      />
                      <Typography
                        component={"h5"}
                        variant="h6"
                        fontWeight={"bold"}
                      >
                        {item.username}
                      </Typography>
                      <Typography
                        component={"span"}
                        variant="p"
                        sx={{ color: "#aaa" }}
                      >
                        {item.jobs}
                      </Typography>
                    </Box>
                  </Fade>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwipperWrapper>
        </Box>
      </Box>
    </Box>
  );
}
