import { Box, Divider, Flex, Heading, Tag } from "@chakra-ui/react";

export function Panel() {
  return (
    <Box zIndex={1} w={360} borderRight="1px solid lightgray" p={2}>
      <Heading size="lg">Delayed linies</Heading>
      <Flex align="center" justify="space-between" py={2} gap={1}>
        <Heading size="sm">Line 14</Heading>
        <Tag>On time</Tag>
      </Flex>
      <Divider />
      <Flex align="center" justify="space-between" py={2} gap={1}>
        <Heading size="sm">Line 15</Heading>
        <Tag>On time</Tag>
      </Flex>
      <Divider />
      <Flex align="center" justify="space-between" py={2} gap={1}>
        <Heading size="sm">Line 16</Heading>
        <Tag>On time</Tag>
      </Flex>
    </Box>
  );
}
