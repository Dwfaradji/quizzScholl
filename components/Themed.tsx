import {Text as DefaultText, View as DefaultView} from 'react-native';
import Colors from '@/constants/Colors';
import {useColorScheme, TextInput} from 'react-native';
import {Input} from '@rneui/themed';
import {ComponentProps, LegacyRef} from 'react';

// Définition des types pour les propriétés liées au thème
type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

// Extension des props des composants natifs avec les props du thème
export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type InputProps = ThemeProps & ComponentProps<typeof Input> & { ref?: LegacyRef<TextInput> };

// Fonction pour utiliser les couleurs en fonction du thème
export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = useColorScheme() ?? 'light';
    const colorFromProps = props[theme];

    return colorFromProps || Colors[theme][colorName];
}

// Composant Text avec gestion des couleurs en fonction du thème
export function Text(props: TextProps) {
    const {style, lightColor, darkColor, ...otherProps} = props;
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');
    return <DefaultText style={[{color}, style]} {...otherProps} />;
}

// Composant Input avec gestion des couleurs en fonction du thème
export function DefaultInput(props: InputProps) {
    const {lightColor, darkColor, ref, ...otherProps} = props;
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');
    return <Input ref={ref as LegacyRef<TextInput>} inputStyle={[{color}]} {...otherProps}   />;
}

// Composant View avec gestion des couleurs en fonction du thème
export function View(props: ViewProps) {
    const {style, lightColor, darkColor, ...otherProps} = props;
    const backgroundColor = useThemeColor({light: lightColor, dark: darkColor}, 'background');
    return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}
