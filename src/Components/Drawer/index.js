import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "../Header/Header";

export default function DrawerMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Header
          width={50}
          setOpenDrawer={setOpenDrawer}
          openDrawer={openDrawer}
        />
      </Drawer>
      <IconButton
        sx={{
          position: "fixed",
          zIndex: "10000000",
          top: "2%",
          right: "2%",
          width: "40px",
          height: "40px",
          background: "#149ddd",
          "&:hover": {
            background: "#149ddd",
          },
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
}
