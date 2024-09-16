import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useColorScheme } from '@/components/useColorScheme';
import QuizzScreen from "@/app/(tabs)/quizzScreen";
import Index from "@/app/(tabs)";

// Définition des types pour les paramètres de chaque écran

// Définir les paramètres de votre stack
export type RootStackParamList = {
  Home: undefined; // Pas de paramètres pour Home
  Quizz: { subject: string }; // Quizz nécessite un paramètre 'subject'
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

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();


  return (
      <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DarkTheme}>
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Index} />
            <Stack.Screen
                name="Quizz"
                component={QuizzScreen}
                options={({ route }) => ({
                  // TypeScript saura que route.params a bien un 'subject'
                  title: `${route.params?.subject || 'Quizz'} `
                })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
  );
}
