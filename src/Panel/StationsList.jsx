import { Flex, Heading } from "@chakra-ui/react";

export default function StationsList({ stations, renderItemExtra }) {
  return (
    <>
      {stations.map((station) => (
        <Flex align="center" justify="space-between" py={1} key={station.id}>
          <Heading size="sm">{station.name}</Heading>
          {renderItemExtra && renderItemExtra(station)}
        </Flex>
      ))}
    </>
  );
}
