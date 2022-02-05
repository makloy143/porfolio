import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <Flex justify="center" bg="blue.800" as="nav" px={4} height="72px">
      <NavLink text="Home" to="/" />
      <NavLink text="About me" to="/about-me" />
    </Flex>
  );
};

export default NavBar;
