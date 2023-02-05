import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import CloseSharpIcon from "@mui/icons-material/CloseSharp"

const NavBarMobile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="primary"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon className="close" />
      </IconButton>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          className="box"
          p={2}
          display="flex"
          flexDirection="column"
          justifyContent="right"
          width="250px"
          textAlign="center"
          role="presentation"
        >

        <div className="links">
            <IconButton className="button" onClick={() => setIsDrawerOpen(false)}>

            <CloseSharpIcon />
            </IconButton>
        </div>

        </Box>
      </Drawer>
    </>
  );
};

export default NavBarMobile;
