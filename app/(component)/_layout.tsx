import "expo-dev-client";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "@/hooks/theme/HciFontContext";
import { useColorScheme as mainPageColorTheme } from "nativewind";
import { useColorScheme as sysTemTheme } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function ComponentScreens() {
 

  return (
      <SafeAreaView style={{ flex: 1 }} >
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "ios",
          }}
        >
          <Stack.Screen name="search" options={{presentation:'transparentModal',animation:'slide_from_bottom'}} />
         </Stack>
      </SafeAreaView>
  );
}
