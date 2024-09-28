// Composant pour afficher les choix de la question
import {View} from "@/components/Themed";
import {Button} from "@rneui/themed";
import React from "react";
import {StyleSheet} from "react-native";

// Typage des props du composant `Choices`
type ChoicesProps = {
    choices: string[];
    onSelectChoice: (choice: string) => void;
};

export const Choices: React.FC<ChoicesProps> = ({choices, onSelectChoice}) => {
    const shuffledChoices = React.useMemo(() => [...choices].sort(() => Math.random() - 0.5), [choices]);

    return (
        <>
            {shuffledChoices.map((choice, index) => (
                <View key={index}>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
                    <Button style={styles.button} title={choice} onPress={() => onSelectChoice(choice)}/>
                </View>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        width: '100%',
        marginBottom: 10,
        color: "#fff",
        borderRadius: 10,
    },
});
