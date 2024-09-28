import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { MyProvider } from "@/context/UserProvider";
import { initialState, reducer } from "@/context/UserReducer";
import { Link, Stack,  } from "expo-router"; // Utilisation correcte de Slot
import { useColorScheme } from '@/hooks/useColorScheme';


// Définir les paramètres de votre stack
// export type RootStackParamList = {
//     Home: undefined; // Pas de paramètres pour Home
//     QuizzScreen: { subject: string }; // Quizz nécessite un paramètre 'subject'
//     Infos: undefined; // Pas de paramètres pour Infos
// };

// Prévenir le splash screen de se cacher
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null; // Ne pas rendre l'application tant que les polices ne sont pas chargées
    }

    return <RootLayoutNav />;
}
function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <MyProvider initialState={initialState} reducer={reducer}>
            <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DarkTheme}>
                <Stack
                    initialRouteName="index"
                    screenOptions={{
                        title:"Accueil",
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#4a90e2', // Couleur de l'en-tête
                        },
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <Link href="/modalScreen">
                                <FontAwesome name="info-circle" size={24} color="#fff" style={{ marginRight: 15 }} />
                            </Link>
                        ),
                    }}
                >
                    <Stack.Screen
                        name="(tabs)/quizzScreen" // Nom de l'écran Quizz
                        options={({ route } : {route:any}  ) => ({
                            title: route.params?.subject ? route.params.subject : 'Mon Quiz',
                        })}
                    />
                    <Stack.Screen
                        name="modalScreen"
                        options={{
                            title: 'Infos', // Titre pour votre écran modal
                            presentation: 'modal', // Présentation de l'écran modal
                        }}
                    />
                </Stack>
            </ThemeProvider>
        </MyProvider>
    );
}
