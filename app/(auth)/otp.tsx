import React, { useState } from "react";
import OTPEntry from "@/components/forms/OTPEntry";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import CountdownTimer from "@/components/forms/Countdown";
import HciText from "@/components/HciText";
import HciButton from "@/components/forms/HciButton";
import { router } from "expo-router";

export default function Verify() {
  const [otp, setOtp] = useState("");
  const value = "+233-509894026";
 
const [isConfirming,setIsConfirming]=useState();


const onConfirmingOtp=()=>{
router.push('genre')
}

  return (
    <SafeAreaView
      className="h-full"
      style={{ backgroundColor: Colors.light.background }}
    >
      <ScrollView className="bg-white dark:bg-slate-700 ">
        <View className="w-full px-4 my-6 justify-center h-full">
          <HciText
            type="header"
            className="font-pbold  text-center text-4xl mt-[35px]"
          >
            We just sent you a 6-digit code
          </HciText>

          <View className="gap-2">
            <HciText type="title" className="font-pregular text-center mt-4">
              Please enter the code we've sent to
              <Text className="font-psemibold "> {value}</Text>
            </HciText>
          </View>

          <OTPEntry value={otp} onChange={setOtp}></OTPEntry>

          <CountdownTimer initialSeconds={30} />
          <View className="mt-20">
                     <HciButton onPress={onConfirmingOtp} loading={isConfirming}>Confirm</HciButton>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
