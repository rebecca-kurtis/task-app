import React from 'react';

const axios = require("axios").default;
import { useState } from "react";



import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem, Text } from '@ui-kitten/components';
import { getProjectTitles } from '../../server/helpers/getProjectTitles';

export default function ProjectDropdownSelect(state) {

 const [currentProject, setCurrentProject] = useState("1");
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  // const host = "http://localhost";
  // const port = 8000;


  // const projectsRoute =
  // host +
  //   ":" +
  //   port +
  //   "/projects";

  const testFunction = () => {
    const host = "http://localhost";
    const port = 8000;
  
  
    const projectsRoute =
    host +
      ":" +
      port +
      "/projects";
  
    const titleArray = [];
    console.log(projectsRoute);
  
    axios
      .get(projectsRoute)
      .then((response) => {
        console.log("response",response);
        // const projectsList = [...response.data];
        // console.log("projectsList",projectsList);
        // return projectsList;
      })
      .catch((error) => {
        if (error.response) {
          alert(`Error! ${error.message}`);
        } else if (error.request) {
          console.log(`network error! ${error}`);
        } else {
          console.log(error);
        }
      });
  };


testFunction();

  // const projectTitlesArray = getProjectTitles();
  // console.log("in box, project titles", projectTitlesArray);

  return (
    
    <Layout
      style={styles.selectContainer}
      level='1'
    >
      <Select
        selectedIndex={selectedIndex}
        value={currentProject}
        label={ <Text>'Choose Project'</Text>}
        onSelect={(index, title) => {
          setSelectedIndex(index)
          console.log(index);
          console.log(title);
          console.log(index.row);

  
          // if (index.row === 0) {
          //   state.setState("priority_level", "High");
          // }
          // if (index.row === 1) {
          //   state.setState("priority_level", "Medium");
          // }
          // if (index.row === 2) {
          //   state.setState("priority_level", "Low");
          // }
        

          // console.log(setOptionChosen);
        }}
        
       
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
