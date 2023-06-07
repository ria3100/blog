import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Stack,
  Tag,
  Text,
} from '@/components/chakra-ui/react';
import {IntersectionFade} from '@/components/common/IntersectionFade';
import type {ArticleListItem} from '@/core/article/types';
import {ExternalLinkIcon, Icon, StarIcon} from '@/components/chakra-ui/icons';
import {Link} from '@/components/chakra-ui/next-js';
import {dateFormat} from '@/utils/DateUtils';

interface Props {
  item: ArticleListItem;
}

export function ArticleListItem({item}: Props) {
  const Title = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return item.type === 'zenn' ? (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Heading size="md">
          {children}
          <ExternalLinkIcon boxSize="4" color="blue.400" ml={1} />
        </Heading>
      </Link>
    ) : (
      <Link href={href}>
        <Heading size="md">{children}</Heading>
      </Link>
    );
  };

  return (
    <IntersectionFade>
      <Card>
        <HStack>
          <Box
            display={{base: 'none', md: 'flex'}}
            alignItems="center"
            justifyContent="center"
            p={8}
            pr={3}
            fontSize="4xl"
          >
            {item.emoji}
          </Box>

          <Box>
            <CardHeader>
              <Stack>
                <Title href={item.href}>{item.title}</Title>
                <Text fontSize="sm">
                  {dateFormat(new Date(item.createdAt))}
                </Text>
              </Stack>
            </CardHeader>

            <CardBody pt={0}>
              <Text mb={4}>{item.description}</Text>
              <HStack>
                {item.tags.map(tag => (
                  <Tag size="md" key={tag} fontSize="sm">
                    # {tag}
                  </Tag>
                ))}
              </HStack>
            </CardBody>
          </Box>
        </HStack>
      </Card>
    </IntersectionFade>
  );
}
