import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import PositionedMenu from "../../components/menu/menu.component";

const NavBar = () => {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid #333333` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            D3 Master Project
          </Typography>
          <nav>
            <PositionedMenu />
            {/* <Link to="/">Home</Link>
            <Link to="/">Bar Chart</Link>
            <Link to="/">Scatter Plot</Link>
            <Link to="/">Heat Map</Link>
            <Link to="/">Choropleth Map</Link>
            <Link to="/">Tree Map</Link> */}
          </nav>
        </Toolbar>
      </AppBar>
      <div></div>

      <Outlet />
    </>
  );
};

export default NavBar;
