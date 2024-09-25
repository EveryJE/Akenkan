import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import HciText from "@/components/HciText";
import { Ionicons } from "@expo/vector-icons";
import HciButton from "@/components/forms/HciButton";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import FeedbackModal from "@/components/general/FeedbackModal";

const ShelfPage = () => {
  const [booksInShelf, setBooksInShelf] = useState<[]>([]);
  const [showRemoveBookModal,setshowRemoveBookModal]=useState(false)

const onHandleRemoveBookModal=(bookid:string)=>{
  
}

  const {colorScheme}=useColorScheme()

  return (
    <View className=" bg-white  dark:bg-slate-700 h-full">
      {booksInShelf?.length <= 0 ? (
        <View className="items-center gap-5  h-full justify-center">
          <View className="">
            <Ionicons
              size={40}
              color={colorScheme === "dark" ? "#ffffff90" : "#334155"}
              name="bookmarks"
            />
          </View>
          <View className="px-2">
            <HciText className="text-center">
              Books you Viewed will appear here
            </HciText>
          </View>
          <View className="w-2/3">
            <HciButton
              onPress={() => router.push("library")}
              className="rounded-full"
              loading={false}
            >
              Explore Library
            </HciButton>
          </View>
          <FeedbackModal
            message="remove from library"
            onClose={() => onHandleRemoveBookModal}
            visible={showRemoveBookModal}
            type="delete"
          />
        </View>
      ) : (
        <ScrollView className="justify-center">
          <Text>fff</Text>
        </ScrollView>
      )}
    </View>
  );
};

export default ShelfPage;
