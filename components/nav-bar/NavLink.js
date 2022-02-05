import { Text, Box, Center } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ text, to }) => {
  const router = useRouter();
  const isActive = router.asPath === to;

  return (
    <Center
      onClick={() => router.push(to)}
      cursor="pointer"
      role="group"
      px={8}
      h="full"
      bg={isActive ? "blue.700" : "transparent"}
      _hover={{ bg: "blue.700" }}
    >
      <Text
        as="a"
        fontFamily="Inter"
        fontSize={18}
        fontWeight={500}
        color="white"
      >
        {text}
      </Text>
    </Center>
  );
};

export default NavLink;
