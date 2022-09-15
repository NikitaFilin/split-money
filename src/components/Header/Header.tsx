import { Drawer, Toolbar } from "@mui/material";

import PostAddIcon from "@mui/icons-material/PostAdd";

import { Container, AppBar, Button } from "./styles";
import { useState } from "react";
import { SettingsMenu } from "../SettingsMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Drawer anchor="right" open={isMenuOpen} onClose={handleCloseMenu}>
        <SettingsMenu handleCloseMenu={handleCloseMenu} />
      </Drawer>
      <Container>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Button
              size="large"
              edge="end"
              color="inherit"
              aria-label="settings"
              onClick={handleOpenMenu}
            >
              <PostAddIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};
