import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Grid,
  Typography,
} from "@mui/material";
import { PortfolioCard } from "../../Style/PortfolioCard";
import { buttonGroup, portfolioData } from "../../Data";
import { useState } from "react";
import { Zoom } from "react-awesome-reveal";

export default function Portfolio() {
  const [arr, setArr] = useState(portfolioData);

  const filterFunc = (arr, filter) => {
    switch (filter) {
      case "htmlCss":
        return setArr(arr.filter((item) => item.filt === filter));
      case "javascript":
        return setArr(arr.filter((item) => item.filt === filter));
      case "react":
        return setArr(arr.filter((item) => item.filt === filter));
      default:
        return setArr(arr);
    }
  };

  return (
    <Box
      id="portfolio"
      pt={10}
      sx={{ pl: { xs: 1, md: 5 }, pr: { xs: 1, md: 1 } }}
    >
      <Typography
        sx={{ fontWeight: "bold", color: "#173b6c", overflowX: "hidden" }}
        component={"h2"}
        variant="h4"
      >
        Portfolio
        <Box width={"70px"} height={"3px"} bgcolor={"#149ddd"}></Box>
      </Typography>
      <Typography my={2} component={"p"} variant="p">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </Typography>

      <Box
        my={5}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {buttonGroup.map((item, i) => (
            <Button
              key={i}
              sx={{ textTransform: "capitalize" }}
              onClick={() => filterFunc(portfolioData, item.data)}
            >
              {item.text}
            </Button>
          ))}
        </ButtonGroup>

        <Grid mt={2} container spacing={2}>
          {arr.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
              <Zoom triggerOnce>
                <PortfolioCard>
                  <Avatar
                    sx={{
                      width: "100%",
                      height: "170px",
                      objectFit: "cover",
                      marginBottom: "20px",
                    }}
                    variant="rounded"
                    src={item.image}
                    className="image"
                  />
                  <Box className="text">
                    <Typography
                      sx={{
                        cursor: "pointer",
                        color: "#fff",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                      component={"a"}
                      variant="a"
                      href={item.url}
                      target={"_blank"}
                    >
                      Read More ➜
                    </Typography>
                  </Box>
                </PortfolioCard>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
