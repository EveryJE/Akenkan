// components/SocialLoginButton.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

interface SocialLoginButtonProps {
    provider: 'google' | 'apple';
    onPress: () => void;
    color: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ provider, onPress, color }) => {
    const iconName = provider === 'google' ? 'logo-google' : 'logo-apple';

    return (
        <TouchableOpacity
            className="w-16 h-16 bg-white dark:bg-slate-500 rounded-full items-center justify-center shadow "
            onPress={onPress}
        >
            <Ionicons name={iconName} size={40} color={color} />
        </TouchableOpacity>
    );
};

export default SocialLoginButton;