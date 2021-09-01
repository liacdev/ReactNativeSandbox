import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const DisplayText = () => {
  return (
    <View style={styles.container}>
      <Text>All hail the Rotten Potato!</Text>
      <Text>This is where the magic starts.</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  // Provides the styles for above
  container: {
    flex: 1,
    backgroundColor: "tan",
    alignItems: "center",
    justifyContent: "center",
  },
});
