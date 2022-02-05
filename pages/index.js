import { Center, Text, Box, AspectRatio } from "@chakra-ui/react";
import NavBar from "../components/nav-bar/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Box height="calc(100vh - 72px)" position="relative">
        <AspectRatio background="red" ratio={1600 / 593} w="full">
          <Box
            bgImage="url('./background.jpg')"
            backgroundPosition="center"
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
          />
        </AspectRatio>
        <Box py={8}>
          <Text textAlign="center" fontFamily="Inter" fontSize={58}>
            Mark Louie&apos;s Porfolio
          </Text>
        </Box>
      </Box>
    </div>
  );
}
