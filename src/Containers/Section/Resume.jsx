import { Box, Typography, Grid } from "@mui/material";
import ResumeContent from "../../Components/Resume/Resume";
import { ResumeData } from "../../Data";

export default function Resume() {
  return (
    <Box
      id="resume"
      py={10}
      sx={{ pl: { xs: 1, md: 5 }, pr: { xs: 1, md: 1 } }}
    >
      <Typography
        sx={{ fontWeight: "bold", color: "#173b6c", overflowX: "hidden" }}
        component={"h2"}
        variant="h4"
      >
        Resume
        <Box width={"70px"} height={"3px"} bgcolor={"#149ddd"}></Box>
      </Typography>
      <Typography my={2} component={"p"} variant="p">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </Typography>
      <Grid container>
        {ResumeData.map((item, index) => ResumeContent(item, index))}
      </Grid>
    </Box>
  );
}
