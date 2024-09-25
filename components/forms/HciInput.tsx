import React, { useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@/hooks/theme/HciFontContext";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

interface textProps {
  iconName: keyof typeof Ionicons.glyphMap;
  isPassWordField?: boolean;
}

const HciInput: React.FC<TextInputProps & textProps> = ({
  style,
  keyboardType,
  iconName,
  isPassWordField,
  ...props
}) => {
  const { fontSize, fontFamily } = useTheme();
  const [getIconName, setIconName] = useState<keyof typeof Ionicons.glyphMap>(
    (iconName + "-outline") as keyof typeof Ionicons.glyphMap
  );
  const [isFocused, setIsFocused] = useState(false);
  const { colorScheme } = useColorScheme();
  const [isSecure, setIsSecure] = useState(props.secureTextEntry || false);

  return (
    <View className="relative w-full self-center">
      <TextInput
        style={[{ fontSize, fontFamily }, style]}
        pointerEvents="auto"
        secureTextEntry={isSecure}
        onFocus={() => {
          setIconName(iconName);
          setIsFocused(true);
        }}
        onBlur={() => {
          setIconName(
            (iconName + "-outline") as keyof typeof Ionicons.glyphMap
          );
          setIsFocused(false);
        }}
        placeholderTextColor={colorScheme == "light" ? "#d1d5db" : "#9ca3af"}
        {...props}
        className={
          "self-center w-full text-gray-500 dark:text-gray-200 rounded-md text-lg p-2 pl-12 placeholder:text-base border border-gray-200 dark:border-gray-500 " +
          (isFocused && " border-gray-300 dark:border-gray-400 ")
        }
      />
      <View className="absolute pointer-events-none left-2 h-full justify-center p-1 ">
        <Ionicons
          name={getIconName}
          color={colorScheme == "light" ? "#d1d5db" : "#9ca3af"}
          size={23}
          className="pointer-events-none"
        />
      </View>
      {isPassWordField && (
        <TouchableOpacity
          onPress={() => setIsSecure((s) => !s)}
          className="absolute right-2 h-full justify-center p-2 top-1"
        >
          <Ionicons
            name={isSecure ? "eye-off" : "eye-sharp"}
            color={"#00000040"}
            size={23}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HciInput;
