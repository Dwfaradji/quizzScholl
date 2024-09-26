import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from '@/hooks/useColorScheme';
import QuizzScreen from "@/app/(tabs)/quizzScreen";
import Index from "@/app/(tabs)";
import {Pressable, StyleSheet} from "react-native";
import ModalScreen from "@/app/modalScreen";
import {MyProvider} from "@/context/UserProvider";
import {initialState, reducer} from "@/context/UserReducer";
// import {UserProvider} from "@/context/UserProvider";
// @ts-ignore

// Définition des types pour les paramètres de chaque écran

// Définir les paramètres de votre stack
export type RootStackParamList = {
    Accueil: undefined; // Pas de paramètres pour Home
    QuizzScreen: { subject: string }; // Quizz nécessite un paramètre 'subject'
    Infos: undefined;
};

// Typage du stack
const Stack = createNativeStackNavigator<RootStackParamList>(); // Utiliser RootStackParamList ici

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav/>;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (

        <MyProvider initialState={initialState} reducer={reducer}>
        <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DarkTheme}>

            <NavigationContainer independent={true}>
                <Stack.Navigator
                    screenOptions={({navigation}) => ({
                        headerStyle: {
                            backgroundColor: '#4a90e2', // Couleur de l'en-tête
                        },
                        headerTintColor: '#fff', // Couleur du texte et des icônes dans l'en-tête
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate('Infos')}>
                                <FontAwesome name="info-circle" size={24} color="#fff" style={{marginRight: 15}}/>
                            </Pressable>
                        ),
                    })}
                >
                    <Stack.Screen name="Accueil" component={Index}/>
                    <Stack.Screen
                        name="QuizzScreen"
                        component={QuizzScreen}
                        options={({route}) => ({
                            // TypeScript saura que route.params a bien un 'subject'
                            title: `${route.params?.subject || 'Quizz'} `
                        })}
                    />
                    <Stack.Screen
                        name="Infos"
                        component={ModalScreen}
                        options={{presentation: 'modal'}} // Option pour modal
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </ThemeProvider>
            </MyProvider>
    );
}
