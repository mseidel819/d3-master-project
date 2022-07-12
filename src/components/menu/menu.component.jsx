import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const PositionedMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Projects
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="bar-chart">Bar Chart</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/">Scatter Plot</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/">Heat Map</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/">Choropleth Map</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/">Tree Map</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default PositionedMenu;
