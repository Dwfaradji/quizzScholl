import React from 'react';
import {Text, View} from "@/components/Themed";
import {Button} from "@rneui/themed";
import {StyleSheet} from "react-native";

type Props = {
    score: number;
    filteredQuestions: any[];
    resetQuiz: () => void;
    nameUser: string;
};

const Finish = ({score, filteredQuestions, resetQuiz, nameUser}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Félicitations !{'\n'} Vous avez terminé le quiz.</Text>
            <Text style={styles.title}>Votre score  {'\n'} {'\n'} {score} sur {filteredQuestions.length}</Text>
            {score <= filteredQuestions.length / 2 ? <Text style={styles.title}>Désolé {nameUser} Tu n'a pas réussi !</Text> : <Text style={styles.title}>Bon travail {nameUser} !</Text>}
            <Button
                onPress={resetQuiz}
                title={'Recommencer'}
                titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: [1, 0],
                    end: [0.2, 0],
                }}
                buttonStyle={{
                    borderWidth: 0,
                    borderColor: 'transparent',
                    borderRadius: 20,
                }}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                icon={{
                    name: 'repeat',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />
        </View>
    );
};

export default Finish;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});
