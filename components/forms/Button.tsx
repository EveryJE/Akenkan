import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator, StyleSheet } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'transparent';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends Omit<TouchableOpacityProps, 'children'> {
    text: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    color?: string;
    loading?: boolean;
}

const defaultColors = {
    primary: 'blue-500',
    secondary: 'gray-500',
    outline: 'blue-500',
    transparent: 'transparent'
};

const getVariantStyle = (variant: ButtonVariant, color: string, style: any) => {
    switch (variant) {
        case 'primary':
            style.backgroundColor = color;
            break;
        case 'secondary':
            style.backgroundColor = color;
            break;
        case 'outline':
            style.borderColor = color;
            style.borderWidth = 1;
            break;
        case 'transparent':
            style.backgroundColor = 'transparent';
            break;
    }
    return style;
};

const getTextStyle = (variant: ButtonVariant, color: string, style: any) => {
    switch (variant) {
        case 'primary':
        case 'secondary':
            style.color = 'white';
            break;
        case 'outline':
        case 'transparent':
            style.color = color;
            break;
    }
    return style;
};

const sizeStyles: Record<ButtonSize, string> = {
    small: "py-2 px-3",
    medium: "py-3 px-4",
    large: "py-4 px-6",
};

export default function Button({
                                   text,
                                   variant = 'primary',
                                   size = 'medium',
                                   fullWidth = false,
                                   color,
                                   loading = false,
                                   className = '',
                                   ...props
                               }: ButtonProps): React.ReactElement {
    const baseStyle = "rounded-lg flex items-center justify-center";
    const buttonColor = color || defaultColors[variant];

    let buttonStyle = `${baseStyle} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`;
    let textStyle = "text-center font-bold";

    const dynamicButtonStyle = getVariantStyle(variant, buttonColor, {});
    const dynamicTextStyle = getTextStyle(variant, buttonColor, {});

    return (
        <TouchableOpacity
            style={dynamicButtonStyle}
            className={buttonStyle}
            disabled={loading}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'primary' || variant === 'secondary' ? 'white' : buttonColor} />
            ) : (
                <Text style={dynamicTextStyle} className={textStyle}>
                    {text}
                </Text>
            )}
        </TouchableOpacity>
    );
}
