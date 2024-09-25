import "expo-dev-client";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect} from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "@/hooks/theme/HciFontContext";
import { useColorScheme as mainPageColorTheme } from "nativewind";
import { useColorScheme as sysTemTheme } from "react-native";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Kent: require("../assets/fonts/RobotoMono.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    Oswald: require("../assets/fonts/Oswald-VariableFont_wght.ttf"),
    Poppins: require("../assets/fonts/Poppins-Bold.ttf"),
    Koala: require("../assets/fonts/Poppins-Medium.ttf"),
    Sans: require("../assets/fonts/SourceSans3-VariableFont_wght.ttf"),
    Hci: require("../assets/fonts/SF-Pro.ttf"),
  });

  const { colorScheme } = mainPageColorTheme();
  let tabColor = colorScheme === "light" ? "#f59e0b" : "#0f172a";
  let maintabColor = colorScheme === "light" ? "#f3f4f6" : "#0f172a";

  // useEffect(() => {
  //    let tabColor = colorScheme === "light" ? "#f59e0b" : "#1f2937";
  //    let maintabColor = colorScheme === "light" ? "#f3f4f6" : "#1f2937";

  // }, [sysTemTheme()]);

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="default" backgroundColor={maintabColor} />
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "ios",
            statusBarColor: tabColor,
          }}
        >
          <Stack.Screen name="(onboarding)/index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(component)" options={{presentation:'modal',animation:'fade_from_bottom'}}/>
          <Stack.Screen name="(main)" options={{ statusBarColor: tabColor }} />
          <Stack.Screen
            name="(settings)/settings"
            options={{
              statusBarColor: maintabColor,
              title: "settings",
              headerShown: false,
              animation: "slide_from_bottom",
              presentation: "modal",
            }}
          />
        </Stack>
      </SafeAreaView>
    </ThemeProvider>
  );
}
