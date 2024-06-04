import { Container, Text, VStack, Box, Flex, Spacer, Button, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <Box>
          <Button as={Link} to="/" variant="ghost" color="white" _hover={{ bg: "blue.600" }} mr={4}>
            Home
          </Button>
          <Button as={Link} to="/about" variant="ghost" color="white" _hover={{ bg: "blue.600" }}>
            About
          </Button>
        </Box>
      </Flex>
      <Flex direction="column" justify="center" align="center" height="calc(100vh - 64px)" p={4}>
        <VStack spacing={4} textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">Welcome to MyApp</Text>
          <Text fontSize="lg">Your journey starts here. Explore and enjoy!</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;