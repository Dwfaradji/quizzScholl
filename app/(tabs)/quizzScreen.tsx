import {Text, View} from '@/components/Themed';
import React, {useEffect, useRef, useState} from "react";
import dataQuizz from '../../data/quizzData';
import Timer from "@/components/Timer";
import {Choices} from "@/components/Choices";
import Finish from "@/components/Finish";
import slideToNextQuestion from "@/function/animateSlide";
import {Animated} from "react-native";
import {StyleSheet} from 'react-native';
import {useLocalSearchParams} from 'expo-router'; // Hook alternatif pour récupérer les paramètres

type QuizzScreenProps = {
    name: string;
    nameUser: string;
    subject: string;
}

export default function QuizzScreen() {
    const {name, nameUser, subject}: QuizzScreenProps = useLocalSearchParams();
    const categoryName = name;
    const userName = nameUser;
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [timer, setTimer] = useState<number>(10);
    const [questions1, setQuestions1] = useState<any>([]);
    const slideAnim = useRef(new Animated.Value(0)).current;


    // Filter questions by category
    const filterQuestionsByCategory = (categoryName: string) => {
        return dataQuizz
            .filter((item) => item.matter === categoryName && Array.isArray(item.questions))
            .flatMap((item) => item.questions);
    };

    const filteredQuestions = filterQuestionsByCategory(categoryName);

    useEffect(() => {
        setQuestions1(filteredQuestions);
    }, []);

    // Handle answer selection
    const handleAnswerSelection = (selectedChoice: string) => {
        const currentQuestion = filteredQuestions[questionNumber];
        if (currentQuestion.correctAnswer === selectedChoice) {
            setScore(prev => prev + 1);
        }
        questionNumber < filteredQuestions.length - 1 ?
            slideToNextQuestion({slideAnim, setQuestionNumber, setTimer}) :
            setIsFinished(true);
    };

    // Countdown timer effect
    useEffect(() => {
        if (!isFinished) {
            if (timer === 0) {
                questionNumber < filteredQuestions.length - 1 ?
                    slideToNextQuestion({slideAnim, setQuestionNumber, setTimer}) :
                    setIsFinished(true);
            } else {
                const countdown = setTimeout(() => setTimer(prev => prev - 1), 1000);
                return () => clearTimeout(countdown);
            }
        }
    }, [timer, questionNumber, isFinished]);

    // Reset quiz
    const resetQuiz = () => {
        setQuestionNumber(0);
        setIsFinished(false);
        setScore(0);
        setTimer(10);
    };

    // Render finish screen
    if (isFinished) {
        return (
            <Finish
                score={score}
                filteredQuestions={filteredQuestions}
                resetQuiz={resetQuiz}
                userName={userName}
                matter={categoryName}
            />
        );
    }

    // Render quiz
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animatedContainer, {transform: [{translateX: slideAnim}]}]}>
                {questions1.length > 0 && (
                    <>
                        <Text style={styles.title}>{questions1[questionNumber]?.question}</Text>
                        <Choices
                            choices={questions1[questionNumber]?.choices}
                            onSelectChoice={handleAnswerSelection}
                        />
                    </>
                )}
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            </Animated.View>
            <Timer timer={timer}/>
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
