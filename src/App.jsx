import { Flex } from "@chakra-ui/react";
import CityMap from "./Map/CityMap";
import { Panel } from "./Panel/Panel";

function App() {
  return (
    <Flex h="100%">
      <Panel />
      <CityMap />
    </Flex>
  );
}

export default App;
