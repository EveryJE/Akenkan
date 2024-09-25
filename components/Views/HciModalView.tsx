import React from "react";
import { Pressable, PressableProps, Text, TextProps, View } from "react-native";
import { useTheme } from "@/hooks/theme/HciFontContext";

interface otherProps {
  className: string;
}

const HciModalView: React.FC<PressableProps & otherProps> = ({
  style,
  className,
  ...props
}) => {
  const { fontSize, fontFamily } = useTheme();

  return (
    <Pressable
      {...props}
      className="bg-white dark:bg-gray-700"
    />
  );
};

export default HciModalView;
