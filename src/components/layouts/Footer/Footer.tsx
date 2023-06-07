'use client';

import {
  Box,
  Stack,
  Text,
  Container,
  HStack,
  Icon,
  Flex,
} from '@/components/chakra-ui/react';
import {FaGithub, FaTwitter} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <Box
      as="footer"
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop="auto"
      h="400"
      bg="gray.200"
    >
      <Container maxW={'4xl'}>
        <Stack alignItems="center">
          <Box borderRadius="full" overflow="hidden">
            <Image src="/assets/ria.jpg" width={120} height={120} alt="" />
          </Box>
          <Text fontSize="lg" fontWeight="bold">
            Ria
          </Text>
          <Text fontSize="sm" textAlign="center">
            tricot inc. Web Engineer.
            <br />
            主に TypeScript / React を使ったフロントエンド開発をしています。
          </Text>
          <HStack>
            <Link
              href="https://github.com/ria3100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex w={8} h={8} alignItems="center" justifyContent="center">
                <Icon as={FaGithub} title="github" />
              </Flex>
            </Link>

            <Link
              href="https://twitter.com/_ria0130"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex w={8} h={8} alignItems="center" justifyContent="center">
                <Icon as={FaTwitter} title="twitter" />
              </Flex>
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
