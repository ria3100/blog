import {HamburgerIcon} from '@/components/chakra-ui/icons';
import {Link} from '@/components/chakra-ui/next-js';
import {Flex, IconButton} from '@/components/chakra-ui/react';

export function Navbar() {
  return (
    <Flex
      as="header"
      w="full"
      position="fixed"
      top={0}
      left={0}
      h={12}
      alignItems="center"
      justifyContent="end"
      p={2}
    >
      {/* <IconButton
        aria-label="Search database"
        icon={<HamburgerIcon boxSize={6} />}
        variant="link"
      /> */}
    </Flex>
  );
}
