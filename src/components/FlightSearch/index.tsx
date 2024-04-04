import { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import SearchTab from "./SearchTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Search = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="search section container">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer"
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="ECONOMY" {...a11yProps(0)} />
              <Tab label="BUSINESS" {...a11yProps(1)} />
              <Tab label="FIRST CLASS" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <SearchTab />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SearchTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SearchTab />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Search;
