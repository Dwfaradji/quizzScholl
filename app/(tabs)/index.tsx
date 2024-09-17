import {Pressable, StyleSheet} from 'react-native';
import ButtonPlay from '@/components/ButtonPlay';
import { Text, View } from '@/components/Themed';
import Dropdown from "@/components/dropdown";
import React, {useState} from "react";


export default function Index() {
    const [selectedMatterName, setSelectedMatterName] = useState<string>(''); // Valeur par défaut
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizz App</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle}>Ce Quizz a été conçue pour réviser c'est cours scolaire.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Dropdown setSelectedMatterName={setSelectedMatterName} />
      <Pressable>
        {({ pressed }) => (
              <ButtonPlay matterName={selectedMatterName} />
        )}
      </Pressable>
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
