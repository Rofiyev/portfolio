import { Box, Grid, Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import { ResumeBox } from "../../Style/ResumeBox";

export default function ResumeContent(item, index) {
  return (
    <Grid
      sx={{ marginTop: `${item.margin}px` }}
      order={item.order}
      key={index}
      item
      xs={12}
      md={6}
    >
      <Slide triggerOnce direction={"up"}>
        <Typography
          sx={{ fontWeight: "bold" }}
          mb={1}
          component={"h3"}
          variant="h5"
        >
          {item.heading}
        </Typography>
        <ResumeBox>
          <Box className="container">
            <Typography
              component={"h5"}
              variant="h6"
              sx={{ fontWeight: "bold" }}
            >
              {item.title}
            </Typography>
            {item.date && <Box className="date">{item.date}</Box>}
            {item.location && (
              <Typography mt={1} component={"p"} variant="p">
                {item.location}
              </Typography>
            )}
            {item.description && (
              <Typography
                sx={{ display: "block" }}
                mt={1}
                component={"i"}
                variant="i"
              >
                {item.description}
              </Typography>
            )}
            <Box component={"ul"} variant="ul" px={"20px"}>
              {item.lists.map((item, index) => (
                <Box key={index} component={"li"} variant="li">
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        </ResumeBox>
      </Slide>
    </Grid>
  );
}
