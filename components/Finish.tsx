import React, {useEffect} from 'react';
import {Text, View} from "@/components/Themed";
import {Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import {useMyContext} from "@/hooks/useMyContext";

type Props = {
    score: number;
    filteredQuestions: any[];
    resetQuiz: () => void;
    userName: string;
    matter: string;
};

const Finish = ({score, filteredQuestions, resetQuiz, userName, matter}: Props) => {
    const [state,dispatch] = useMyContext();

    useEffect(() => {
        dispatch({
            type: 'ADD_MATTER',
            payload: {
                user: userName,
                matter: matter,
                score: score,
            }
        });
    }, [score, matter, userName, dispatch]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Félicitations !{'\n'} Vous avez terminé le quiz.</Text>
            <Text style={styles.title}>Votre score {'\n'} {'\n'} {score} sur {filteredQuestions.length}</Text>
            {score <= filteredQuestions.length / 2
                ? <Text style={styles.title}>Désolé {userName}, tu n'as pas réussi !</Text>
                : <Text style={styles.title}>Bon travail {userName} !</Text>}
            <Button
                onPress={resetQuiz}
                title={'Recommencer'}
                titleStyle={{fontWeight: 'bold', fontSize: 18}}
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
                iconContainerStyle={{marginLeft: 10, marginRight: -10}}
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
