import {  Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View,TouchableOpacity, TouchableOpacityProps } from 'react-native';
import HciText from '../HciText';

interface CheckboxProps extends TouchableOpacityProps {
    text: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ text, checked = false, onChange, ...props }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handlePress = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        if (onChange) {
            onChange(newChecked);
        }
    };

    return (
        <TouchableOpacity
            className="flex-row items-center"
            onPress={handlePress}
            {...props}
        >
            <View className={`w-5 h-5 border-2 rounded ${isChecked ? 'bg-amber-500' : 'bg-white'} border-gray-300 justify-center items-center`}>
                {isChecked && <Ionicons name='checkmark' color='white' size={15}/>}
            </View>
            <HciText className="ml-2 font-pregular">{text}</HciText>
        </TouchableOpacity>
    );
};

export default Checkbox;
