import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import FormField from "@/components/forms/FormField";
import { validateEmail, validatePhoneNumber } from "@/lib/utils";
import FeedbackModal from "@/components/general/FeedbackModal";
import { Link, router } from "expo-router";
import Checkbox from "@/components/forms/Checkbox";
import SocialLoginButton from "@/components/forms/SocialLoginButton";
import { FontAwesome } from "@expo/vector-icons";
import HciButton from "@/components/forms/HciButton";
import HciText from "@/components/HciText";

export default function SignIn() {
  const [form, setForm] = React.useState({
    email: "",
    phoneNumber: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [modalType, setModalType] = React.useState<"success" | "error">(
    "error"
  );

  const handleChangeText = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const showModal = (message: string, type: "success" | "error") => {
    setModalMessage(message);
    setModalType(type);
    setModalVisible(true);
  };

  const handleSignIn = () => {
    const { email, phoneNumber } = form;
    const isEmail = email.includes("@");

    const isEmailInput = isEmail && email.trim() !== "";
    const isPhoneInput = !isEmail && phoneNumber.trim() !== "";

    if (isEmailInput) {
      if (!validateEmail(email)) {
        showModal("Please enter a valid email address.", "error");
        return;
      }
    } else if (isPhoneInput) {
      if (!validatePhoneNumber(phoneNumber)) {
        showModal("Please enter a valid phone number.", "error");
        return;
      }
    } else {
      showModal("Please enter a valid email address or phone number.", "error");
      return;
    }

    showModal("Sign up successful!", "success");
    //just fr testing remove
    setTimeout(() => router.push("otp"), 1000);
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handlePress = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      handleSignIn();
      setIsSubmitting(false);
    }, 2000);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log("Google login pressed");
  };

  const handleAppleLogin = () => {
    // Handle Apple login logic
    console.log("Apple login pressed");
  };

  return (
    <SafeAreaView
      className="h-full"
    >
      <ScrollView className="bg-white dark:bg-slate-700">
        <View className="w-full px-4 my-6 justify-center h-full">
          <HciText
            type="header"
            className="text-center text-4xl mt-[35px]"
          >
            Sign In
          </HciText>
          <HciText type="title" className="font-pregular text-center mt-4">
            Welcome Back!
          </HciText>

          <FormField
            title="Email or Phone Number"
            icon="mail"
            value={form.email || form.phoneNumber}
            placeholder="Enter Email or Phone Number"
            handleChangeText={(text) => {
              if (text.includes("@")) {
                handleChangeText("email", text);
              } else {
                handleChangeText("phoneNumber", text);
              }
            }}
            otherStyles="mt-4"
          />

          <View className="justify-start mt-4 pl-4">
            <Checkbox
              text="Remember me"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </View>

          <View className="mt-10">
            <HciButton onPress={handlePress} loading={isSubmitting}>
              Login
            </HciButton>
          </View>
          <FontAwesome />
          {/* Divider with "or" */}
          <View className="flex-row items-center mt-10">
            <View className="flex-1 h-px bg-gray-300" />
            <HciText className="mx-4 font-pmedium">or</HciText>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Alternate login buttons */}
          <View className="flex-row justify-evenly mt-6">
            <SocialLoginButton
              provider="google"
              onPress={handleGoogleLogin}
              color="#f59e0b"
            />
            <SocialLoginButton
              provider="apple"
              onPress={handleAppleLogin}
              color="black"
            />
          </View>

          <View className="mt-16 justify-center items-center">
            <View className="flex-row gap-2 items-center">
              <HciText className=""> Don't have an account?</HciText>
              <Link href="/register" className="font-pmedium" asChild>
                <HciText className="text-amber-700 font-extrabold dark:text-amber-300">
                  Sign Up
                </HciText>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
      <FeedbackModal
        visible={modalVisible}
        message={modalMessage}
        type={modalType}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}
