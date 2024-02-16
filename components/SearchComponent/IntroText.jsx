import React from "react";
import { Box, Text } from "native-base";

const IntroText = () => (
  <Box p={4} mb={4} borderRadius="md">
    <Text
      fontSize={{ base: "sm", md: "md", lg: "lg", xl: "2xl" }}
      color="orange.500"
      textAlign="center"
    >
      End the debate over where to eat!
      {"\n"}
      Just Eat It syncs your preferences with your pickiest friend!
    </Text>
  </Box>
);

export default IntroText;