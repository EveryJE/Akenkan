import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import HciText from '../HciText';

interface CountdownTimerProps {
    initialSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState<number>(initialSeconds);

    useEffect(() => {
        if (seconds <= 0) return;

        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    const formatTime = (sec: number): string => {
        const minutes = Math.floor(sec / 60);
        const seconds = sec % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <View className="p-4">
            <HciText className="text-center">
                Resend Code in{' '}
                <Text className="font-psemibold text-amber-500">{formatTime(seconds)}</Text>
            </HciText>
        </View>
    );
};

export default CountdownTimer;
