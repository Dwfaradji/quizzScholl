import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

type Props = {
    setSelectedMatterName: (name: string) => void;
};

const Dropdown = ({ setSelectedMatterName  }:Props) => {
    const [selectedValue, setSelectedValue] = useState<string>('Français'); // Valeur par défaut
  useEffect(() => {
      setSelectedMatterName(selectedValue);
  }, [selectedValue, setSelectedMatterName]);


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Sélectionnez une matière :</Text>
            <Text style={styles.selectedText}>Langage sélectionné :{'\n'} {selectedValue}</Text>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item style={{color: '#fff'}} label="Français" value="Français"/>
                <Picker.Item label="Math" value="Math"/>
                <Picker.Item label="Anglais" value="Anglais"/>
                <Picker.Item label="Histoire" value="Histoire"/>
                <Picker.Item label="Géographie" value="Géographie"/>
                <Picker.Item label="Physique" value="Physique"/>
                <Picker.Item label="Sciences" value="Sciences"/>
                <Picker.Item label="Chimie" value="Chimie"/>
                <Picker.Item label="Svt" value="Svt"/>
                <Picker.Item label="Numerique" value="Numerique"/>
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        width: '100%',
    },
    label: {
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
    },
    picker: {
        width: 200,
        alignSelf: 'center',
    },
    selectedText: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default Dropdown;
