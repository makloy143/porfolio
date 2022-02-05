import { Center, Text } from "@chakra-ui/react";
import NavLink from './NavLink'

const NavBar = () => {
  return (
    <Center as="nav" px={4} height="72px">
      <NavLink text="Home" to="/" />
      <NavLink text="About me" to="/about-me" />
    </Center>
  );
};

export default NavBar;
