import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { ContactBox } from "../../Style/ContactBox";
import { contactIcons } from "../../Data";
import { Slide } from "react-awesome-reveal";

export default function Contact() {
  return (
    <Box
      id="contact"
      py={10}
      sx={{ pl: { xs: 1, md: 5 }, pr: { xs: 1, md: 1 }, overflowX: "hidden" }}
    >
      <Typography
        sx={{ fontWeight: "bold", color: "#173b6c", overflowX: "hidden" }}
        component={"h2"}
        variant="h4"
      >
        Contact
        <Box width={"70px"} height={"3px"} bgcolor={"#149ddd"}></Box>
      </Typography>
      <Typography mt={2} mb={5} component={"p"} variant="p">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </Typography>
      <ContactBox>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={5}>
            <Slide triggerOnce>
              <Box
                sx={{ boxShadow: "0 0 24px 0 rgb(0 0 0 / 12%)" }}
                borderRadius={1}
                p={3}
              >
                {contactIcons.map((item, index) => (
                  <Box mb={2} display={"flex"} alignItems={"flex"} key={index}>
                    <Box
                      sx={{
                        background: "#149DDD",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="icons"
                    >
                      {item.icon}
                    </Box>
                    <Box ml={2}>
                      <Typography component={"h4"} variant="h5">
                        {item.title}
                      </Typography>
                      <Typography
                        component={"p"}
                        variant="p"
                        sx={{ fontSize: "14px" }}
                      >
                        {item.info}
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <Box
                  component={"iframe"}
                  variant="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13012.083221601926!2d66.96169783485037!3d39.65095331412609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2f57!2sSamarqand%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1676560611159!5m2!1suz!2s"
                  width={"100%"}
                  height={"250"}
                  style={{ border: "none", marginTop: "20px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></Box>
              </Box>
            </Slide>
          </Grid>
          <Grid item xs={12} md={8} lg={7}>
            <Slide direction="right" triggerOnce>
              <Box
                borderRadius={1}
                p={3}
                sx={{ boxShadow: "0 0 24px 0 rgb(0 0 0 / 12%)" }}
                textAlign={"center"}
              >
                <Box
                  display={"flex"}
                  width={"100%"}
                  gap={"15px"}
                  sx={{ flexDirection: { xs: "column", sm: "row" } }}
                >
                  <TextField
                    sx={{ width: "100%" }}
                    id="demo-helper-text-aligned-no-helper"
                    label="Your Name"
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    id="demo-helper-text-aligned-no-helper"
                    label="You Email"
                  />
                </Box>
                <TextField
                  fullWidth
                  sx={{ my: 3 }}
                  id="demo-helper-text-aligned-no-helper"
                  label="Subject"
                />
                <TextField fullWidth label="Messege" multiline rows={6} />
                <Button sx={{ mt: 2 }} variant="contained">
                  Send Messege
                </Button>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </ContactBox>
    </Box>
  );
}
