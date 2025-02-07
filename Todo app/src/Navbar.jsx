import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <HStack spacing={8} justify="center">
        <RouterLink to="/">
          <Link color="white" fontSize="lg">
            Home
          </Link>
        </RouterLink>
        <RouterLink to="/form">
          <Link color="white" fontSize="lg">
            Form
          </Link>
        </RouterLink>
      </HStack>
    </Box>
  );
};

export default Navbar;
