import { useState, useEffect } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import PaymentIcon from "@mui/icons-material/Payment";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import CartButton from "./CartButton";

import logo from "../assets/logo/shopLogo2.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "Products", path: "/all-products", icon: <ShoppingBasketIcon /> },
    { label: "Cart", path: "/cart", icon: <ShoppingCartIcon /> },
    { label: "Checkout", path: "/checkout", icon: <PaymentIcon /> },
    { label: "Admin", path: "/add-products", icon: <PersonIcon /> },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar position="fixed" className={`navbar ${sticky ? "sticky" : ""}`}>
        <Toolbar className="navbar-toolbar">
          <Box className="navbar-logo-container" onClick={() => navigate("/")}>
            <Box
              component="img"
              src={logo}
              alt="NGshop"
              className="navbar-logo"
            />
          </Box>

          <Box className="navbar-actions">
            <ThemeToggle />
            <CartButton />
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              sx={{ cursor: "pointer" }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
