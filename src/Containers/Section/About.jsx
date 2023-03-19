import { Avatar, Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import person from "../../Image/person.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { aboutData, factsData, progressBarData } from "../../Data";
import { ProgressWrapper } from "../../Style/ProgressBar";

export default function About() {
  return (
    <Box id="about" py={5} sx={{ pl: { xs: 1, md: 5 }, pr: { xs: 1, md: 1 } }}>
      <Typography
        sx={{ fontWeight: "bold", color: "#173b6c", overflowX: "hidden" }}
        component={"h2"}
        variant="h4"
      >
        About
        <Box width={"70px"} height={"3px"} bgcolor={"#149ddd"}></Box>
      </Typography>
      <Typography my={2} component={"p"} variant="p">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={10} md={4}>
          <Slide triggerOnce direction="left">
            <Avatar
              sx={{ width: "100%", height: "350px", objectFit: "cover" }}
              variant="rounded"
              src={person}
            />
          </Slide>
        </Grid>
        <Grid item sm={10} md={8}>
          <Slide triggerOnce direction="right">
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#173b6c",
                fontFamily: "Poppins, sans-serif",
              }}
              component={"h2"}
              variant="h5"
            >
              Web Developer & Frelancer
            </Typography>
            <Typography width={"90%"} my={2} component={"i"} variant="i">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidit labore et dolore magna aliqua.
            </Typography>
            <Grid
              my={2}
              container
              justifyContent={"center"}
              rowSpacing={1}
              flexWrap={"wrap"}
            >
              {aboutData.map((item, i) => (
                <Grid
                  key={i}
                  item
                  xs={12}
                  md={6}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <ChevronRightIcon
                    sx={{ color: "#149ddd", fontSize: "28px" }}
                  />
                  <Typography component={"b"} variant="b" mr={1}>
                    {item.text}:
                  </Typography>
                  <Typography component={"span"} variant="span">
                    {item.value}
                  </Typography>
                </Grid>
              ))}
              <Typography mt={3} component={"p"} variant="p">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </Typography>
            </Grid>
          </Slide>
        </Grid>
      </Grid>
      <Box mt={10}>
        <Typography
          sx={{ fontWeight: "bold", color: "#173b6c", overflowX: "hidden" }}
          component={"h2"}
          variant="h4"
        >
          Facts
          <Box width={"70px"} height={"3px"} bgcolor={"#149ddd"}></Box>
        </Typography>
        <Typography my={2} component={"p"} variant="p">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </Typography>

        <Grid container justifyContent={"center"} spacing={6}>
          {factsData.map((item, index) => (
            <Grid
              key={index}
              item
              display={"flex"}
              xs={12}
              sm={6}
              md={3}
              gap={"10px"}
            >
              <Bounce duration={1000} triggerOnce>
                {item.icon}
                <Box>
                  <Typography fontSize={"3rem"} component={"b"} variant="b">
                    {item.number}
                  </Typography>
                  <Typography color={"#122f57"}>
                    <Typography component={"b"} variant="b">
                      {item.heading}
                    </Typography>{" "}
                    {item.description}
                  </Typography>
                </Box>
              </Bounce>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box mt={10}>
        <Typography
          sx={{ fontWeight: "bold", color: "#173b6c", overflowX: "hidden" }}
          component={"h2"}
          variant="h4"
        >
          Skills
          <Box width={"70px"} height={"3px"} bgcolor={"#149ddd"}></Box>
        </Typography>
        <Typography my={2} component={"p"} variant="p">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </Typography>
        <Grid container spacing={3} justifyContent={"center"} pr={1}>
          {progressBarData.map((item, index) => (
            <Grid key={index} item xs={12} md={6}>
              <ProgressWrapper>
                <Box className="titleWrapper">
                  <Typography className="title">{item.title}</Typography>
                  <Typography className="title">{item.number}</Typography>
                </Box>

                <Box className="progress">
                  <Fade>
                    <Box
                      className="progressValue"
                      width={`${item.number}`}
                    ></Box>
                  </Fade>
                </Box>
              </ProgressWrapper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
