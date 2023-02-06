import "../../../style/_colors.scss";
import React, { useState } from "react";
import { colors, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { Link } from "react-router-dom";
import "./_NavBarMobile.scss"
import Backdrop from "@mui/material/Backdrop";
import { Filter3 } from "@mui/icons-material";

const NavBarMobile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon
          className="close"
          sx={{ marginRight: 1, fontSize: 40, color: "white" }}
        />
      </IconButton>

      <Drawer
        PaperProps={{
            sx:{
                backgroundColor: "transparent",
                color:'red',
                backdropFilter: "blur(10px)"
            }
        }}
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          className="box"
          p={2}
          display="flex"
          flexDirection="row"
          justifyContent="right"
          width="250px"
          textAlign="center"
          role="presentation"
        >
          <div className="links">
            <IconButton
              className="button"
              sx={{ color:'white' }} 
              onClick={() => setIsDrawerOpen(false)}
            >
              <CloseSharpIcon fontWeight="bold" />
            </IconButton>
            <Link to="/">Home</Link>
            <Link to="/Destination/Moon">Destination</Link>
            <Link to="/Crew/Commander">Crew</Link>
            <Link to="/Technology/">Technology</Link>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBarMobile;
