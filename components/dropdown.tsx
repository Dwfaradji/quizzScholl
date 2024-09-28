import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Text, useThemeColor, View} from '@/components/Themed';
import dataQuizz from "@/data/quizzData";

type DropDownProps = {
    setSelectedMatterName: (value: string) => void;
    lightColor?: string;
    darkColor?: string;
};

const Dropdown = ({setSelectedMatterName, lightColor, darkColor}: DropDownProps) => {
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');
    const [selectedValue, setSelectedValue] = useState<string>(dataQuizz[0]?.matter || ''); // Default to the first matter if available

    useEffect(() => {
        setSelectedMatterName(selectedValue);
    }, [selectedValue, setSelectedMatterName]);

    // Optimize onValueChange with useCallback
    const handleValueChange = useCallback((itemValue: string) => {
        setSelectedValue(itemValue);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Sélectionnez une matière :</Text>
            <Text style={styles.selectedText} darkColor={"#000"} lightColor={"#000"}>
                Langage sélectionné : {"\n"} {selectedValue || 'Aucune matière sélectionnée'}
            </Text>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                itemStyle={{color}}
                onValueChange={handleValueChange}
                accessibilityLabel="Sélectionnez une matière"
                prompt="Choisissez une matière"
            >
                {dataQuizz.map((item) => (
                    <Picker.Item label={item.matter} value={item.matter} key={item.matter}/>
                ))}
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
