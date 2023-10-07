import React from "react";
import { useState } from "react";

import { StyleSheet } from "react-native";
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";

export default function DropdownSelect(state) {
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  return (
    <Layout style={styles.selectContainer} level="1">
      <Text category="h6" style={styles.headerText}>
        Set Priority Level
      </Text>
      <Select
        selectedIndex={selectedIndex}
        value={state.state.priority_level}
        onSelect={(index, title) => {
          setSelectedIndex(index);
          console.log(index);
          console.log(title);
          console.log(index.row);

          if (index.row === 0) {
            state.setState("priority_level", "High");
          }
          if (index.row === 1) {
            state.setState("priority_level", "Medium");
          }
          if (index.row === 2) {
            state.setState("priority_level", "Low");
          }

          // console.log(setOptionChosen);
        }}
      >
        {/* <SelectItem title='Set Priority Level' /> */}
        <SelectItem title="High" />
        <SelectItem title="Medium" />
        <SelectItem title="Low" />
      </Select>
    </Layout>
  );
}

const styles = StyleSheet.create({
  selectContainer: {
    backgroundColor: "#6F2DBD",
    color: "#fff",
  },
  headerText: {
    color: "#fff",
  },
});
