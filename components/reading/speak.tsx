import * as React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import * as Speech from "expo-speech";
import HciButton from "../forms/HciButton";

export default function TextToSpeach() {
    
  const speak = () => {
    const thingToSay = "1 2 3 4 5 everything ";
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <HciButton onPress={speak}>
        <Text>Press to hear some words</Text>
      </HciButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red",
    padding: 8,
  },
});
