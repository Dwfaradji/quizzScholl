import React from 'react';
import { useNavigation } from "expo-router";
import { Button } from '@rneui/themed';
import { useMyContext } from "@/context/UserProvider";

type ButtonPlayProps = {
    matterName: string;
    name: string;
    setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ButtonPlay({ matterName, name, setHasStarted }: ButtonPlayProps) {
    const [state, dispatch] = useMyContext();
    const navigation = useNavigation();

    const onPress = () => {
        // Vérifiez si l'utilisateur existe déjà
        // @ts-ignore
        const userExists = state.users.some(user => user.user === name);
        dispatch({ type: 'SET_CURRENT_USER', payload: { user: name } });

        if (!userExists) {
            // Ajouter un utilisateur s'il n'existe pas
            dispatch({ type: 'ADD_USER', payload: { user: name } });
            // dispatch({ type: 'SET_CURRENT_USER', payload: { user: name } });

        }

        // Log pour vérifier quel utilisateur est sélectionné
        console.log("Ajout de la matière pour l'utilisateur :", name);

        // Ajouter une matière
        dispatch({ type: 'ADD_MATTER', payload: { user: name, matter: matterName, score: 0 } });

        // Formatage du nom de la matière pour la navigation
        setHasStarted(true); // Désactiver l'input
        // @ts-ignore
        navigation.navigate('QuizzScreen', { name: matterName, subject: matterName, nameUser: name });
    };


    return (
        <Button
            onPress={onPress}
            title={'Commencer'}
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
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
            }}
            iconRight
            iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
        />
    );
}
