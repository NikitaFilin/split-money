import { Toolbar } from "@mui/material";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MenuIcon from "@mui/icons-material/Menu";

import { Container, AppBar, Button } from "./styles";

export const Header = () => {
  return (
    <Container>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Button size="large" edge="end" color="inherit" aria-label="add user">
            <PersonAddIcon />
          </Button>
          <Button size="large" edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
