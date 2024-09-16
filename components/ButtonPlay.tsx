import React from 'react';
import { StyleSheet} from 'react-native';
import { Text, View } from './Themed';
import {useNavigation} from "expo-router";
import { Button } from '@rneui/themed';


export default function ButtonPlay ({matterName}: {matterName: string}) {
//lorsque l'on clique sur le bouton, on affiche une autre page.

  const navigation = useNavigation();
  //fonction qui permet de naviguer vers la page quizzScreen.tsx
  const onPress = () => {
//Formatage de la chaine de caractères pour la route de navigation qui va permettre de passer les données à la page quizzScreen.tsx
    const formatNameMatter = (matterName: string) => {
      return matterName
          .toLowerCase() // Convertir en minuscule
          .normalize("NFD") // Normaliser la chaîne pour séparer les accents
          .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
          .replace(/\s/g, '') // Supprimer les espaces
          .replace(/[^a-z0-9]/g, ''); // Supprimer tout ce qui n'est pas alphanumérique
    };

    // @ts-ignore
    navigation.navigate('Quizz', {name: formatNameMatter(matterName),subject: matterName});
  };
    return (
    <>

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

    </>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    color: '#dc1f1f',
  },
});
