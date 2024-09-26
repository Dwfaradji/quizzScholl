import React, { useContext, useEffect } from 'react';
import { Text, View } from "@/components/Themed";
import { Button } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { useMyContext } from "@/context/UserProvider";

type Props = {
    score: number;
    filteredQuestions: any[];
    resetQuiz: () => void;
    nameUser: string;
    matter: string;
};

const Finish = ({ score, filteredQuestions, resetQuiz, nameUser, matter }: Props) => {
    const [state, dispatch] = useMyContext();

    useEffect(() => {
        console.log("Mise à jour du score pour l'utilisateur :", nameUser);
        console.log("Score :", score);
        console.log("Matière :", matter);

        // Exemple pour mettre à jour une matière
        dispatch({
            type: 'ADD_MATTER',
            payload: {
                user: nameUser,
                matter: matter,
                score: score,
            }
        });
    }, [score, matter, nameUser, dispatch]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Félicitations !{'\n'} Vous avez terminé le quiz.</Text>
            <Text style={styles.title}>Votre score {'\n'} {'\n'} {score} sur {filteredQuestions.length}</Text>
            {score <= filteredQuestions.length / 2
                ? <Text style={styles.title}>Désolé {nameUser}, tu n'as pas réussi !</Text>
                : <Text style={styles.title}>Bon travail {nameUser} !</Text>}
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
