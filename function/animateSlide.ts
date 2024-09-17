// Gère la progression du quiz et l'animation du slide
import {Animated} from "react-native";

const slideToNextQuestion = ({slideAnim, setQuestionNumber, setTimer}: {slideAnim: any, setQuestionNumber: any, setTimer: any}) => {
    Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
    }).start(() => {
        setQuestionNumber((prev: number) => prev + 1);
        setTimer(10);  // Réinitialiser le timer
        slideAnim.setValue(300);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    });
};

export default slideToNextQuestion;
