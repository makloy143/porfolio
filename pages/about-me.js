import { Center, Text } from "@chakra-ui/react";
import NavBar from "../components/nav-bar/Navbar";

export default function AboutMe() {
  return (
    <div>
      <NavBar />
      <Center height="calc(100vh - 72px)">
        <Text fontFamily="Inter" fontSize={58}>
          About Me
        </Text>
      </Center>
    </div>
  );
}
