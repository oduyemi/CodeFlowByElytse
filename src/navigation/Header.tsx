import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "react-bootstrap";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="sticky" color="default" elevation={2} className="py-2">
      <Container>
        <Toolbar className="d-flex justify-content-between align-items-center" style={{ backgroundColor: "transparent"}}>
          {/* Left Navigation */}
          <nav className="d-none d-lg-flex gap-3">
            <a href="#home-section" className="nav-link">Home</a>
            <a href="#portfolio-section" className="nav-link">Portfolio</a>
            <a href="#about-section" className="nav-link">About</a>
          </nav>

          {/* Logo */}
          <Typography variant="h6" component="a" href="/" className="text-decoration-none text-dark fw-bold">
            CodeFlowByElytse<span className="text-danger">.</span>
          </Typography>

          {/* Right Navigation */}
          <nav className="d-none d-lg-flex gap-3">
            <a href="#services-section" className="nav-link">Services</a>
            <a href="#skills-section" className="nav-link">Skills</a>
            <a href="#contact-section" className="nav-link">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <IconButton edge="end" color="inherit" aria-label="menu" className="d-lg-none" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <div className="p-3 d-flex justify-content-end">
          <IconButton onClick={toggleMenu}>
            <CloseIcon />
          </IconButton>
        </div>
        <List className="px-3">
          {["Home", "Portfolio", "About", "Services", "Skills", "Contact"].map((text, index) => (
            <ListItem component="button" key={index} onClick={toggleMenu}>
            <ListItemText primary={text} />
          </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
