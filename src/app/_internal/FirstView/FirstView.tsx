import {Box, Heading, Stack, Text} from '@/components/chakra-ui/react';

export function FirstView() {
  return (
    <Box
      bgImage="url('/assets/bg_gradient.jpg')"
      bgSize="cover"
      bgAttachment="fixed"
      w="full"
      h="75vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      fontWeight="bold"
    >
      <Stack spacing={0}>
        <Heading as="h1" fontSize="6xl" textAlign="center" mb={4}>
          Ria
        </Heading>
        <Text textAlign="center">Web Engineer.</Text>
        <Text textAlign="center">TypeScript | React | Next.js | Rust</Text>
      </Stack>
    </Box>
  );
}
