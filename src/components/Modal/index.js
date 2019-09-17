import React from "react";
import { View, Text } from "react-native";

import { Container, Box, Button, TextButton } from "./styles";

export default function Modal() {
  return (
    <Container>
      <Box>
        <Text>Modal</Text>
        <Button>
          <TextButton>Ok, Entendi</TextButton>
        </Button>
      </Box>
    </Container>
  );
}
