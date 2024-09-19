// Typage des props du composant `Timer`
import Ionicons from "@expo/vector-icons/Ionicons";
import {  StyleSheet } from 'react-native';
import React from 'react';
import {Text, useThemeColor} from '@/components/Themed';
type TimerProps = {
    timer: number;
};

const Timer  = ({timer}: TimerProps) => {
    const color = useThemeColor({ light: "#000", dark: "#fff" }, 'text');
    return (
        <>
            <Text style={styles.timer}>
                <Ionicons style={{margin:0}} name="timer-outline" size={25} color={timer < 5 ? "red" : color}  /> {timer}s
            </Text>
        </>
    );
};

export default Timer;

const styles = StyleSheet.create({
    timer: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});
