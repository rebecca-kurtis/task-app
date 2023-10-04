import React from 'react';
import { useState } from "react";

import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem, Text } from '@ui-kitten/components';

//import components
import HomePageNav from "./HomePageNav";
import ProjectPageNav from "./ProjectPageNav";
import NewTaskPageNav from "./NewTaskPageNav";
import ProfilePageNav from "./ProfilePageNav";

export default function NavBarIndex() {

  return (
    
    <View>
      <HomePageNav></HomePageNav>
      <ProjectPageNav></ProjectPageNav>
      <NewTaskPageNav></NewTaskPageNav>
      <ProfilePageNav></ProfilePageNav>
    </View>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    minHeight: 128,
  },
});
