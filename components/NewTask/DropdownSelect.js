import React from 'react';
import { useState } from "react";

import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem, Text } from '@ui-kitten/components';

export default function DropdownSelect() {

  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const [optionChosen, setOptionChosen] = useState('Set Priority Level');

  const priorityLevels = {
    label: 'Set Priority Level',
    high: 'High',
    medium: 'Medium',
    low: 'Low'
  }

  return (
    
    <Layout
      style={styles.selectContainer}
      level='1'
    >
      <Select
        selectedIndex={selectedIndex}
        value={optionChosen}
        onSelect={(index, title) => {
          setSelectedIndex(index)
          console.log(index);
          console.log(title);
          console.log(index.row);

          // if (index.row === 0) {
          //   setOptionChosen('Set Priority Level');
          // }
          if (index.row === 0) {
            setOptionChosen('High');
          }
          if (index.row === 1) {
            setOptionChosen('Medium');
          }
          if (index.row === 2) {
            setOptionChosen('Low');
          }
        

          console.log(setOptionChosen);
        }}
        
        // label={ <Text>'Set Priority Level'</Text>}
      >
        {/* <SelectItem title='Set Priority Level' /> */}
        <SelectItem title='High' />
        <SelectItem title='Medium' />
        <SelectItem title='Low' />
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    minHeight: 128,
  },
});
