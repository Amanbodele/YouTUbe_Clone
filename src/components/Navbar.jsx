import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "../utils/constants";

const Navbar = () => (
  <Stack
    direction="row"
    alignitems="center"
    p={2}
    sx={{
      position: "sticky",
      zIndex:'11',
      background: "#000",
      top: "0",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>

      <img src={logo} alt="Navbar" height={45}/>

    </Link>

    <SearchBar/>

  </Stack>
);

export default Navbar;
