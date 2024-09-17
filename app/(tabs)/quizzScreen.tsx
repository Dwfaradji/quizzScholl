import { Animated, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useEffect, useRef, useState } from "react";
import questions from '../../data/quizzData';
import Timer from "@/components/Timer";
import {Choices} from "@/components/Choices";
import Finish from "@/components/Finish";
import slideToNextQuestion from "@/function/animateSlide";


export default function QuizzScreen({route}: {route: any}) {
   const categoryName = route.params.name;
   const nameUser = route.params.nameUser;
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [timer, setTimer] = useState<number>(10);
    const slideAnim = useRef(new Animated.Value(0)).current;

// Filtre les questions par matière
    const filterQuestionsByCategory = (categoryName: string) => {
        return questions[categoryName] || [];
    };

// Utilisation de la fonction
    const filteredQuestions = filterQuestionsByCategory(categoryName);

    // Gère la sélection d'une réponse
    const handleAnswerSelection = (selectedChoice: string) => {
        const currentQuestion = filteredQuestions[questionNumber];
        if (currentQuestion.correctAnswer === selectedChoice) {
            setScore((prev) => prev + 1);
        }

        // Si ce n'est pas la dernière question, on passe à la suivante, sinon fin du quiz
        questionNumber < filteredQuestions.length - 1 ? slideToNextQuestion({slideAnim, setQuestionNumber, setTimer}) : setIsFinished(true);
    };

    // Gère le compte à rebours
    useEffect(() => {
        if (timer === 0) {
            questionNumber < filteredQuestions.length - 1 ? slideToNextQuestion({slideAnim, setQuestionNumber, setTimer}) : setIsFinished(true);
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
           <Finish score={score} filteredQuestions={filteredQuestions} resetQuiz={resetQuiz} nameUser={nameUser} />
        );
    }
    // Affichage du quiz
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animatedContainer, { transform: [{ translateX: slideAnim }] }]}>
                <Text style={styles.title}>{filteredQuestions[questionNumber].question}</Text>
                <Choices choices={filteredQuestions[questionNumber].choices} onSelectChoice={handleAnswerSelection} />
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Timer timer={timer} />
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
        marginBottom: 20,
        textAlign: 'center',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
