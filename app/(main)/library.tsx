import React, { useRef } from "react";
import { Animated, View, Text, TextInput } from "react-native";
import { timeGreetings } from "./modules";
import { Image } from "react-native";
import HciText from "@/components/HciText";
import { router } from "expo-router";

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 60;
const SEARCH_BAR_HEIGHT = 40;

export default function HomePage() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const searchBarTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT-1],
    outputRange: [0, HEADER_MIN_HEIGHT - SEARCH_BAR_HEIGHT],
    extrapolate: "clamp",
  });

  return (
    <View className="flex-1 bg-white pt-8">
      <Animated.View
        style={{ height: headerHeight }}
        className="absolute top-0 left-0 flex-row justify-around right-0 bg-amber-500 dark:bg-slate-900 z-10 items-center "
      >
        <View className="bg-amber-400 dark:bg-slate-700 h-14 aspect-square rounded-full">
          <Image src=""/>
        </View>
        <View className="h-[120px] justify-center items-center">
          <Text className="text-white text-lg">{timeGreetings()}</Text>
          <Text className="text-white text-xl font-bold">Mr/Mrs Harriet</Text>
        </View>
        <Animated.View
          style={{ transform: [{ translateY: searchBarTranslate }] }}
          className="absolute -bottom-5 left-2.5 right-2.5"
        >
          <TextInput
            className="h-10 bg-amber-400 text-center  dark:bg-slate-900 rounded-full px-4 text-base border border-amber-50 dark:border-slate-700"
            placeholder="Search"
            placeholderTextColor="#fff"
            onFocus={()=>router.push('search')}
            
          />
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        className='bg-amber-50 dark:bg-slate-700'
      >
        <View className="p-5 items-center">
          <HciText className="">{timeGreetings()}</HciText>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
