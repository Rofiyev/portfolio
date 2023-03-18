import { Box, CssBaseline, GlobalStyles } from "@mui/material";
import { Header } from "./Components";
import { About, Contact, Home, Portfolio, Resume, Services } from "./Containers";
import NavbarContext from "./Context/NavbarContext";

export default function App() {
  return (
    <NavbarContext.Provider>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "*": {
            fontFamily: "Poppins, sans-serif",
          },
          "*::-webkit-scrollbar": {
            width: "0.4em",
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px #ccc",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#040b14",
            borderRadius: 4,
          },
        }}
      />
      <Box display={"flex"}>
        <Header />
        <Box
          height={"100vh"}
          sx={{ width: { xs: '100vw', md: '77vw' }, position: "absolute", right: "0", top: "0" }}
        >
          <Home />
          <About />
          <Resume />
          <Portfolio />
          <Services />
          <Contact />
        </Box>
      </Box>
    </NavbarContext.Provider>
  );
}
