import { Flex, Heading, background } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setSelectedStation } from "../store/selectedStationSlice";

export default function StationsList({ stations, renderItemExtra }) {
  const dispatch = useDispatch();

  const handleClickStation = (station) => {
    dispatch(setSelectedStation(station));
  };

  return (
    <>
      {stations.map((station) => (
        <Flex
          align="center"
          justify="space-between"
          py={1}
          _active={{ background: "rgba(0, 0, 0, 0.05)" }}
          key={station.id}
          onClick={() => handleClickStation(station)}
        >
          <Heading size="sm">{station.name}</Heading>
          {renderItemExtra && renderItemExtra(station)}
        </Flex>
      ))}
    </>
  );
}
