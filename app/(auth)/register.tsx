import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import FormField from "@/components/forms/FormField";
import {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
} from "@/lib/utils";
import FeedbackModal from "@/components/general/FeedbackModal";
import { Link } from "expo-router";
import { HciRadioGroup } from "@/components/settings/HciRadioGroup";
import { FormGender } from "@/lib/form";
import HciText from "@/components/HciText";
import HciButton from "@/components/forms/HciButton";

export default function SignUp() {
  
  const [form, setForm] = React.useState({
    email: "",
    phoneNumber: "",
    name: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [modalType, setModalType] = React.useState<"success" | "error">(
    "error"
  );

  const handleRadioButtonPress = (value: string) => {
    setForm({ ...form, gender: value });
    
  };

  const handleChangeText = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const showModal = (message: string, type: "success" | "error") => {
    setModalMessage(message);
    setModalType(type);
    setModalVisible(true);
  };

  // const handleSignUp = () => {
  //     const { email, phoneNumber, password, confirmPassword } = form;
  //     const isEmail = email.includes('@');
  //
  //     // Determine if email or phone number is used
  //     const isEmailInput = isEmail && email.trim() !== '';
  //     const isPhoneInput = !isEmail && phoneNumber.trim() !== '';
  //
  //     if (isEmailInput) {
  //         if (!validateEmail(email)) {
  //             Alert.alert('Invalid Email', 'Please enter a valid email address.');
  //             return;
  //         }
  //     } else if (isPhoneInput) {
  //         if (!validatePhoneNumber(phoneNumber)) {
  //             Alert.alert('Invalid Phone Number', 'Please enter a valid phone number.');
  //             return;
  //         }
  //     } else {
  //         Alert.alert('Invalid Input', 'Please enter a valid email address or phone number.');
  //         return;
  //     }
  //
  //
  //     // Validate password
  //     if (!validatePassword(password)) {
  //         Alert.alert(
  //             'Invalid Password',
  //             'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.'
  //         );
  //         return;
  //     }
  //
  //     if (password !== confirmPassword) {
  //         Alert.alert('Passwords do not match', 'Please make sure both passwords match.');
  //         return;
  //     }
  //
  //     // Proceed with sign up logic
  // };

  const handleSignUp = () => {
    const { email, phoneNumber, password, confirmPassword } = form;
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

    if (!validatePassword(password)) {
      showModal(
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.",
        "error"
      );
      return;
    }

    if (password !== confirmPassword) {
      showModal(
        "Passwords do not match. Please make sure both passwords match.",
        "error"
      );
      return;
    }

    showModal("Sign up successful!", "success");
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handlePress = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      handleSignUp();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <SafeAreaView className="h-full bg-white dark:bg-slate-700 ">
      <ScrollView>
        <View className="w-full px-4 my-6 justify-center h-full">
          <HciText type="header" className="text-center text-4xl mt-[35px] ">
            Sign Up
          </HciText>
          <HciText type="title" className="text-center text-xl  mt-4">
            Create a new account quickly and easily to get started
          </HciText>

          <FormField
            title="Email or Phone Number"
            icon="mail"
            placeholder=" Enter Email or Phone Number"
            value={form.email || form.phoneNumber}
            handleChangeText={(text) => {
              if (text.includes("@")) {
                handleChangeText("email", text);
              } else {
                handleChangeText("phoneNumber", text);
              }
            }}
            otherStyles="mt-4"
          />

          <FormField
            title="Full Name"
            icon="person"
            placeholder=" Enter Full Name"
            value={form.name}
            handleChangeText={(name) => handleChangeText("name", name)}
            otherStyles="mt-4"
          />
          <HciText className="text-gray-650 font-pextralight mt-4">
            Gender
          </HciText>
          <View className="flex-row justify-around w-full mt-2 font-medium">
            <HciRadioGroup
              containerStyle="flex-row"
              onSwitch={handleRadioButtonPress}
              obJectToShow={FormGender}
            />
          </View>

          {/*<FormField*/}
          {/*    title="Password"*/}
          {/*    icon="lock-closed-outline"*/}
          {/*    placeholder=" Enter Password"*/}
          {/*    value={form.password}*/}
          {/*    handleChangeText={(password) => handleChangeText('password', password)}*/}
          {/*    otherStyles="mt-4"*/}
          {/*    secureTextEntry*/}
          {/*/>*/}

          {/*<FormField*/}
          {/*    title="Confirm Password"*/}
          {/*    icon="lock-closed-outline"*/}
          {/*    placeholder=" Re-Enter Password"*/}
          {/*    value={form.confirmPassword}*/}
          {/*    handleChangeText={(confirmPassword) => handleChangeText('confirmPassword', confirmPassword)}*/}
          {/*    otherStyles="mt-4"*/}
          {/*    secureTextEntry*/}
          {/*/>*/}

          <View className="mt-20">
            <HciButton
              loading={isSubmitting}
              title="Sign Up"
              onPress={handlePress}
            />
          </View>
          <View className="justify-center items-center">
            <View className="mt-16 justify-center items-center">
              <View className="flex-row gap-2 items-center">
                <HciText className=""> Don't have an account?</HciText>
                <Link href="/login" className="font-pmedium" asChild>
                  <HciText className="text-amber-600 font-extrabold dark:text-amber-300">
                    Sign In
                  </HciText>
                </Link>
              </View>
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
