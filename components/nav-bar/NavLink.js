import { Text } from "@chakra-ui/react";
import Link from "next/link";

const NavLink = ({ text, to }) => {
  return (
    <Link href={to} passHref>
      <Text as="a" fontFamily="Inter" fontSize={18} fontWeight={500} mx={4}>
        {text}
      </Text>
    </Link>
  );
};

export default NavLink;
