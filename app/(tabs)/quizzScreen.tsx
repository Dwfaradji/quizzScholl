import { Animated, Button, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useEffect, useRef, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

const questions = [
    {
        question: "Quelle est la date de naissance de Napoléon?",
        choice: ["1821", "1899", "1766", "1689"],
        response: "1821"
    },
    {
        question: "Quelle est la date de naissance de Marie Curie?",
        choice: ["1821", "1899", "1967", "1867"],
        response: "1867"
    },
    {
        question: "Quelle est la date de décès de Marie Curie?",
        choice: ["1821", "1899", "1934", "1940"],
        response: "1934"
    },
    // Autres questions...
];

export default function QuizzScreen() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(10);

    const slideAnim = useRef(new Animated.Value(0)).current;

    // Fonction d'animation de slide
    const slideToNextQuestion = () => {
        Animated.timing(slideAnim, {
            toValue: -300,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setQuestionNumber(questionNumber + 1);  // Passe à la question suivante
            setTimer(10); // Réinitialiser le timer
            slideAnim.setValue(300); // Réinitialiser la position du slide
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        });
    };

    // Vérification de la réponse
    const handleAnswerSelection = (choice: string) => {
        const currentQuestion = questions[questionNumber];
        if (currentQuestion.response === choice) {
            setScore(score + 1);
        }
        if (questionNumber < questions.length - 1) {
            slideToNextQuestion(); // Appelle uniquement slideToNextQuestion ici
        } else {
            setIsFinished(true); // Fin du quiz
        }
    };

    // Réinitialisation du quiz
    const resetQuiz = () => {
        setQuestionNumber(0);
        setIsFinished(false);
        setScore(0);
        setTimer(10); // Réinitialise également le timer
    }

    // Gestion du timer
    useEffect(() => {
        if (timer === 0) {
            if (questionNumber < questions.length - 1) {
                slideToNextQuestion(); // Passe automatiquement à la question suivante si le temps est écoulé
            } else {
                setIsFinished(true);
            }
        } else {
            const countdown = setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);
            return () => clearTimeout(countdown);
        }
    }, [timer, questionNumber]);

    if (isFinished) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Félicitations ! {'\n'}
                    Vous avez terminé le quiz.</Text>
                <Text style={styles.title}>Votre score est de {score} sur {questions.length}.</Text>
                {score <= (questions.length / 2) ? <Text style={styles.title}>Vous n'avez pas réussi ! </Text> : <Text style={styles.title}>Bon travail ! </Text>}
                <Button title="Recommencer" onPress={resetQuiz} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.animatedContainer,
                    { transform: [{ translateX: slideAnim }] }
                ]}
            >
                <Text style={styles.title}>
                    {questions[questionNumber].question}
                </Text>

                {questions[questionNumber].choice.map((choice, index) => (
                    <View key={index}>
                        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                        <Button
                            title={choice}
                            onPress={() => handleAnswerSelection(choice)}
                        />
                        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

                    </View>
                ))}

                <Text style={styles.timer}>
                    <Ionicons name="timer-outline" size={24} color={timer < 5 ? "red" : "black"} /> {timer}s
                </Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 40,
        height: '100%',
    },
    animatedContainer: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    timer: {
        fontSize: 24,
        marginBottom: 1,
        color: 'red',
        textAlign: 'center',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
