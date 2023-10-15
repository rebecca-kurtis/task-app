import React from 'react';
import { useState } from "react";

import { StyleSheet, View } from "react-native";
// import { IndexPath, Layout, Select, SelectItem, Text } from '@ui-kitten/components';

//import components
import HomePageNav from "./HomePageNav";
import ProjectPageNav from "./ProjectPageNav";
import NewTaskPageNav from "./NewTaskPageNav";
import ProfilePageNav from "./ProfilePageNav";

export default function NavBarIndex() {

  return (
    <View style={styles.navIndexContainer}>
      <HomePageNav></HomePageNav>
      <ProjectPageNav></ProjectPageNav>
      <NewTaskPageNav></NewTaskPageNav>
      <ProfilePageNav></ProfilePageNav>
    </View>
  );
};

const styles = StyleSheet.create({
  navIndexContainer: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#a663cc"
  },
});
