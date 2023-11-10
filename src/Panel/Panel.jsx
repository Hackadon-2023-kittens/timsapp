import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Header from "./Header";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Loads from "./Loads";
import { useEffect, useState } from "react";
import Deviations from "./Deviations";

const routes = ["/", "/deviations"];

export function Panel() {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(routes[tabIndex]);
  }, [tabIndex]);

  return (
    <Box zIndex={1} w={360} borderRight="1px solid lightgray">
      <Header />
      <Tabs onChange={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Loads</Tab>
          <Tab>Deviations</Tab>
        </TabList>
        <TabPanels maxH="calc(100vh - 94px)" overflowY="scroll">
          <TabPanel>
            <Loads />
          </TabPanel>
          <TabPanel>
            <Deviations />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
