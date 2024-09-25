import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "nativewind";
import { SafeAreaView, useColorScheme as sysTemTheme } from "react-native";
import { useTheme } from "@/hooks/theme/HciFontContext";

const MainLayout = () => {
  const { colorScheme } = useColorScheme();
  const { currentColorTheme } = useTheme();

  let iconColor = colorScheme === "light" ? "#374151" : "#e5e7eb";
  let tabColor = colorScheme === "light" ? "#f3f4f6" : "#0f172a";
  let activeIconColor = colorScheme === "light" ? "#f59e0b" : "#d97706";

  return (
    <SafeAreaView className="flex-1 bg-slate-900" style={{flex:1}}>
      <Tabs
        screenOptions={{
          tabBarStyle: { backgroundColor: tabColor, borderTopColor: iconColor },
          headerShown: false,
          lazy: true,
          tabBarLabelStyle: {},
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: activeIconColor,
        }}
      >
        <Tabs.Screen
          name="library"
          options={{
            title: "Library",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                color={focused ? activeIconColor : iconColor}
                name={focused ? "home" : "home-outline"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="shelf"
          options={{
            title: "shelf",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                color={focused ? activeIconColor : iconColor}
                name={focused ? "library" : "library-outline"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "settings",

            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                color={focused ? activeIconColor : iconColor}
                name={focused ? "settings" : "settings-outline"}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default MainLayout;
