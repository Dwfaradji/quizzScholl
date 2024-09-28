import React from 'react';
import { Link } from "expo-router"; // Garde uniquement Link pour la navigation
import { Button } from '@rneui/themed';
import { useMyContext } from "@/hooks/useMyContext";

type ButtonPlayProps = {
    matterName: string;
    name: string;
    setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ButtonPlay({ matterName, name, setHasStarted }: ButtonPlayProps) {
    const [state, dispatch] = useMyContext();

    const onPress = () => {
        // Vérifiez si l'utilisateur existe déjà
        const userExists = state.users.some((user: { user: string; }) => user.user === name);
        dispatch({ type: 'SET_CURRENT_USER', payload: { user: name } });

        if (!userExists) {
            // Ajouter un utilisateur s'il n'existe pas
            dispatch({ type: 'ADD_USER', payload: { user: name } });
        }

        // Ajouter une matière
        dispatch({ type: 'ADD_MATTER', payload: { user: name, matter: matterName, score: 0 } });

        // Désactiver l'input
        setHasStarted(true);
    };

    return (
        <Link
            href={{
                pathname: '/(tabs)/quizzScreen',
                params: { name: matterName, subject: matterName, nameUser: name }
            }}
            asChild // Utilise Button comme enfant pour déclencher onPress
        >
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
        </Link>
    );
}
