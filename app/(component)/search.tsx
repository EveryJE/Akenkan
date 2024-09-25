import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const search = () => {

const [books,setBooks]=useState();

const onSearchBook=()=>{

}



  return (
    <View className="bg-amber-50 dark:bg-slate-700 h-full">
      <View className="p-2 flex-row items-center">
        <TouchableOpacity
          activeOpacity={0.6}
          className="bg-[#0f172a40] rounded-full aspect-square p-2 "
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" color={"#fff"} size={25} />
        </TouchableOpacity>
        <TextInput
          className="h-10 bg-amber-400 flex-1 text-center  dark:bg-slate-900 rounded-full px-4 text-base border border-amber-50 dark:border-slate-700"
          placeholder="Search"
          placeholderTextColor="#fff"
          autoFocus
          onSubmitEditing={() => onSearchBook()}
        />
      </View>
    </View>
  );
};

export default search;
