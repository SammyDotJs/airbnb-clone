import { Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeArea = ({ children }: any) => {
  return (
    <SafeAreaView
      style={{
        flex:1,
        backgroundColor: "#fff",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
