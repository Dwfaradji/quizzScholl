import {DefaultInput, Text, useThemeColor, View} from '@/components/Themed';
import Dropdown from "@/components/dropdown";
import React, {useState} from "react";
import {StyleSheet, Pressable} from 'react-native';
import ButtonPlay from "@/components/ButtonPlay";
import {useMyContext} from "@/hooks/useMyContext";

export default function Index() {
    const [state, dispatch] = useMyContext();
    const [selectedMatterName, setSelectedMatterName] = useState<string>(''); // Valeur par défaut
    const [name, setName] = useState<string>('');
    const [placeholder] = useState<string>("Saisissez votre nom");
    const [hasStarted, setHasStarted] = useState<boolean>(false); // Nouvel état pour contrôler si le quiz a commencé
    const [lightColor, darkColor] = ["#000", "#fff"];
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

    const handleReset = () => {
        setName('');
        setHasStarted(false);
    }

    // Fonction qui gère l'appui sur "OK"
    const handleNameSubmit = () => {
        // Vérifiez si le nom est plus long que 3 caractères et que l'utilisateur appuie sur OK
        // Si c'est le cas, démarrez le quiz
        // Sinon, affiche un message d'erreur
        if (name.length > 3 && name.length < 10) {
            setHasStarted(true);
            dispatch({ type: 'SET_CURRENT_USER', payload: { user: name } });

        } else {
            alert('Le nom doit être compris entre 3 et 10 caractères');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizz School</Text>
            <Text style={styles.subtitle}>Ce Quizz a été conçu pour réviser ses cours scolaires.</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            {/* Désactive l'input si le quiz a commencé */}
            <DefaultInput
                selectionColor={color}
                rightIcon={{
                    name: 'refresh',
                    type: 'font-awesome',
                    size: 15,
                    color: color,
                    onPress: () => handleReset(),
                }}
                leftIcon={{
                    name: 'user',
                    type: 'font-awesome',
                    size: 15,
                    color: color,
                    containerStyle: {marginRight: 10},
                }}
                placeholderTextColor={color}
                placeholder={placeholder}
                value={name}
                onChangeText={(text: string) => setName(text.trim())}
                disabled={hasStarted} // Ajoute cette ligne pour désactiver le champ après le début
                onSubmitEditing={handleNameSubmit} // Appelé lorsqu'on appuie sur "OK"
                returnKeyType="done" // Affiche le bouton "OK"
            />
            <Text style={styles.subtitle}>Ce Quizz a été conçu pour réviser ses cours scolaires.</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Dropdown lightColor="#000" darkColor="#fff" setSelectedMatterName={setSelectedMatterName}/>
            {/* Condition d'affichage du bouton si le nom a plus de 3 caractères */}
            {name.length > 3 && (
                <Pressable>
                    {() => (
                        <ButtonPlay matterName={selectedMatterName} name={name} setHasStarted={setHasStarted}/>
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
