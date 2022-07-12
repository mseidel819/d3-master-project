import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <h1>D3 Master Project</h1>
      <Outlet />
    </>
  );
};

export default NavBar;
