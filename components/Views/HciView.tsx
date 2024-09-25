import React from "react";
import { Text, TextProps, View } from "react-native";
import { useTheme } from "@/hooks/theme/HciFontContext";

const HciView: React.FC<TextProps> = ({ style, ...props }) => {
  const { fontSize, fontFamily } = useTheme();

  return (
    <View
      style={[{ fontSize, fontFamily }, style]}
      className="bg-gray-50 dark:bg-gray-700"
      {...props}
    />
  );
};

export default HciView;
/* #212a37 */