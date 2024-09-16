import { Animated, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useEffect, useRef, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import questions from '../../data/quizzData';
import {Button} from "@rneui/themed";


// Typage des props du composant `Choices`
type ChoicesProps = {
    choices: string[];
    onSelectChoice: (choice: string) => void;
};

// Composant pour afficher les choix de la question
const Choices: React.FC<ChoicesProps> = ({ choices, onSelectChoice }) => {
    const shuffledChoices = React.useMemo(() => [...choices].sort(() => Math.random() - 0.5), [choices]);

    return (
        <>
            {shuffledChoices.map((choice, index) => (
                <View key={index}>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                    <Button style={styles.button} title={choice} onPress={() => onSelectChoice(choice)} />
                </View>
            ))}
        </>
    );
};

// Typage des props du composant `Timer`
type TimerProps = {
    timeLeft: number;
};

// Composant pour afficher le timer
const Timer: React.FC<TimerProps> = ({ timeLeft }) => (
    <Text style={styles.timer}>
        <Ionicons name="timer-outline" size={24} color={timeLeft < 5 ? "red" : "black"} /> {timeLeft}s
    </Text>
);

export default function QuizzScreen({route}: {route: any}) {
   const categoryName = route.params.name;
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [timer, setTimer] = useState<number>(10);
    const slideAnim = useRef(new Animated.Value(0)).current;

// Exemple de fonction pour filtrer les questions par matière
    const filterQuestionsByCategory = (categoryName: string) => {
        return questions[categoryName] || [];
    };


// Utilisation de la fonction
    const filteredQuestions = filterQuestionsByCategory(categoryName);

    // Gère la progression du quiz et l'animation du slide
    const slideToNextQuestion = () => {
        Animated.timing(slideAnim, {
            toValue: -300,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setQuestionNumber((prev) => prev + 1);
            setTimer(10);  // Réinitialiser le timer
            slideAnim.setValue(300);
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        });
    };

    // Gère la sélection d'une réponse
    const handleAnswerSelection = (selectedChoice: string) => {
        const currentQuestion = filteredQuestions[questionNumber];
        if (currentQuestion.correctAnswer === selectedChoice) {
            setScore((prev) => prev + 1);
        }

        // Si ce n'est pas la dernière question, on passe à la suivante, sinon fin du quiz
        questionNumber < filteredQuestions.length - 1 ? slideToNextQuestion() : setIsFinished(true);
    };

    // Gère le compte à rebours
    useEffect(() => {
        if (timer === 0) {
            questionNumber < filteredQuestions.length - 1 ? slideToNextQuestion() : setIsFinished(true);
        } else {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        }
    }, [timer, questionNumber]);

    // Réinitialiser le quiz
    const resetQuiz = () => {
        setQuestionNumber(0);
        setIsFinished(false);
        setScore(0);
        setTimer(10);
    };

    // Si le quiz est terminé
    if (isFinished) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Félicitations !{'\n'} Vous avez terminé le quiz.</Text>
                <Text style={styles.title}>Votre score  {'\n'} {'\n'} {score} sur {filteredQuestions.length}</Text>
                {score <= filteredQuestions.length / 2 ? <Text style={styles.title}>Vous n'avez pas réussi !</Text> : <Text style={styles.title}>Bon travail !</Text>}
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
    }

    // Affichage du quiz
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animatedContainer, { transform: [{ translateX: slideAnim }] }]}>
                <Text style={styles.title}>{filteredQuestions[questionNumber].question}</Text>
                <Choices choices={filteredQuestions[questionNumber].choices} onSelectChoice={handleAnswerSelection} />
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

                <Timer timeLeft={timer} />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
    },
    animatedContainer: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',

        textAlign: 'center',
    },
    timer: {
    textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        width: '100%',
        marginBottom: 10,
        color:"#fff",
        borderRadius: 10,
    },
});
