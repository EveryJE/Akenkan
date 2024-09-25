import React from "react";
import { View, TextInputProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HciInput from "./HciInput";
import HciText from "../HciText";

interface FormFieldProps extends TextInputProps {
  title: string;
  icon?: keyof typeof Ionicons.glyphMap; // Updated to match Ionicons icon name type
  placeholder?: string;
  otherStyles?: string;
  value?: string;
  handleChangeText: (text: string) => void;
}

export default function FormField({
  title,
  icon,
  placeholder,
  otherStyles,
  handleChangeText,
  value,
  ...props
}: FormFieldProps) {
  return (
    <View className={`relative space-y-2 ${otherStyles}`}>
      {title && (
        <HciText type="description" className="text-gray-650 font-pextralight">
          {title}
        </HciText>
      )}

      <HciInput
        iconName={icon || "help-outline"} // Provide a default icon if none is provided
        value={value}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        {...props}
      />
    </View>
  );
}
