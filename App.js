import React from "react";
import { View, StatusBar } from "react-native";

import Home from "./src/pages/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/app.route";

export default function App(){
  return(
    <View style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar/>
        <Routes/>
      </NavigationContainer>
    </View>
  )
}