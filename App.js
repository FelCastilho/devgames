import React from "react";
import { View, StatusBar } from "react-native";

import Home from "./src/pages/Home/Home";

export default function App(){
  return(
    <View style={{flex: 1}}>
      <StatusBar/>
      <Home/>
    </View>
  )
}