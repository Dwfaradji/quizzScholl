import {Animated, Easing} from "react-native";
import {Dispatch, SetStateAction} from "react";


interface Props {
    slideAnim: Animated.Value;
    setQuestionNumber: Dispatch<SetStateAction<number>>;
    setTimer: Dispatch<SetStateAction<number>>;
}

const slideToNextQuestion = ({
                                 slideAnim,
                                 setQuestionNumber,
                                 setTimer,
                             }: Props) => {
    Animated.timing(slideAnim, {
        toValue: -450, // Déplacer le contenu vers la gauche
        duration: 500,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
    }).start(() => {
        // Une fois l'animation terminée, mettez à jour la question et réinitialisez le timer
        setQuestionNumber((prev: number) => prev + 1);
        setTimer(10);  // Réinitialiser le timer

        // Réinitialiser la valeur du slideAnim pour la prochaine animation
        slideAnim.setValue(300);

        // Animation pour revenir à la position d'origine avec un effet de rebond
        Animated.spring(slideAnim, {
            toValue: 0, // Revenir à la position d'origine
            useNativeDriver: true,
            bounciness: 15, // Ajustez la valeur pour contrôler le rebond
            speed: 4, // Ajustez la vitesse de l'animation
        }).start();
    });
};

export default slideToNextQuestion;
