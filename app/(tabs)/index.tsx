import {Pressable, StyleSheet} from 'react-native';
import ButtonPlay from '@/components/ButtonPlay';
import { Text, View } from '@/components/Themed';
import Dropdown from "@/components/dropdown";
import React, {useState} from "react";
import {Input} from "@rneui/themed";

export default function Index() {
  const [selectedMatterName, setSelectedMatterName] = useState<string>(''); // Valeur par défaut
  const [name, setName] = useState<string>('');
  const [placeholder] = useState<string>("Saisissez votre nom");
  const [hasStarted, setHasStarted] = useState<boolean>(false); // Nouvel état pour contrôler si le quiz a commencé

  // Fonction qui démarre le quiz
  const handleStartQuiz = () => {
    console.log('Quiz');
    setHasStarted(true); // On passe l'état à "true" pour désactiver l'input
  };

  const handleReset = () => {
    setName('');
    setHasStarted(false);
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Quizz School</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        {/* Désactive l'input si le quiz a commencé */}
        <Input
            style={{
              color: '#000', // Style du texte d'entrée une fois saisi
            }}
            inputStyle={{
              color: 'black', // Style du texte d'entrée une fois saisi
            }}
            rightIcon={{
              name: 'refresh',
              type: 'font-awesome',
              size: 15,
              color: 'black',

              onPress: () => handleReset(),
            }}
            leftIcon={{
              name: 'user',
              type: 'font-awesome',
              size: 15,
              color: 'black',
                containerStyle: { marginRight: 10 },
            }}
            placeholderTextColor="#000"

            placeholder={placeholder}
            value={name}
            onChangeText={(text) => setName(text)}
            disabled={hasStarted} // Ajoute cette ligne pour désactiver le champ après le début
        />

        <Text style={styles.subtitle}>Ce Quizz a été conçu pour réviser ses cours scolaires.</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Dropdown setSelectedMatterName={setSelectedMatterName} />

        {/* Condition d'affichage du bouton si le nom a plus de 3 caractères */}
        {name.length > 3 && (
            <Pressable onPress={handleStartQuiz}>
              {() => (
                  <ButtonPlay matterName={selectedMatterName} name={name} setHasStarted={setHasStarted}  />
              )}
            </Pressable>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
