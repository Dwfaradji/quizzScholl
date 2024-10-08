import React from "react";
import {StatusBar} from 'expo-status-bar';
import {Platform, StyleSheet} from 'react-native';
import {Text, View} from '@/components/Themed';
import Graphique from "@/components/Graphique";
import {useMyContext} from "@/hooks/useMyContext";

export default function ModalScreen() {
    const [state] = useMyContext();
    return (
        <View style={styles.container}>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            {/*Titre*/}
            <Text style={styles.title}>{state.currentUser ? state.currentUser : "Quizz School"} </Text>
            {/*Graphique*/}
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Graphique/>
            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
