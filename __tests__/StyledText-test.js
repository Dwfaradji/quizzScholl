import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import ButtonPlay from '../components/ButtonPlay';
import { useNavigation } from 'expo-router';
import Index from "../app/(tabs)";
import QuizzScreen from "../app/(tabs)/quizzScreen";

// Mock des hooks de navigation
jest.mock('expo-router', () => ({
  useNavigation: jest.fn(),
}));

// Teste l'application end-to-end
describe('End-to-end testing', () => {
// Vérifie si le titre "Quizz App" est présent dans le rendu
  it('renders the title "Quizz App" correctly', () => {
    // Rendre le composant
    const { getByText } = render(<Index />);
    // Vérifiez si le titre "Quizz App" est présent dans le rendu
    const title = getByText('Quizz App');
    expect(title).toBeTruthy();
  });


  // it('renders EditScreenInfo correctly and navigates on button press', () => {
  //   // Créez une instance du mock de navigation
  //   const navigate = jest.fn();
  //   useNavigation.mockReturnValue({ navigate });
  //
  //   // Rendre le composant
  //   const { getByText } = render(<ButtonPlay matterName={""} />);
  //
  //   // Vérifiez que le texte du bouton est présent
  //   const button = getByText('Cliquer pour continuer');
  //   expect(button).toBeTruthy();
  //
  //   // Simulez un clic sur le bouton
  //   fireEvent.press(button);
  //
  //   // Vérifiez que la fonction de navigation a été appelée
  //   expect(navigate).toHaveBeenCalledWith('Quizz', { name: 'Jane' });
  // });

//
// //Vérifie si le texte de la page QuizzScreen est présent
//   it('renders the QuizzScreen correctly', () => {
//     // Rendre le composant
//     const { getByText } = render(<QuizzScreen />);
//     // Vérifiez que le texte de la page QuizzScreen est présent
//     const quizzScreen = getByText('10s');
//
//     expect(quizzScreen).toBeTruthy();
//   });
//
//   jest.useFakeTimers();
//
//   it('renders the end of the quizz correctly', async () => {
//     let getByText;
//
//     await waitFor(async () => {
//       // Rendre le composant
//       ({ getByText } = render(<QuizzScreen />));
//
//       // Simulez les réponses aux questions
//       fireEvent.press(getByText('1821')); // Exemple de réponse
//       waitFor(() => jest.advanceTimersByTime(1000)); // Avancez le timer
//       fireEvent.press(getByText('1867')); // Exemple de réponse
//       waitFor(() => jest.advanceTimersByTime(1000)); // Avancez le timer
//       fireEvent.press(getByText('1934')); // Exemple de réponse
//       waitFor(() => jest.advanceTimersByTime(1000)); // Avancez le timer
//
//       // Attendez la fin du quiz
//       waitFor(() => {
//         jest.advanceTimersByTime(10000); // Simulez que le temps est écoulé
//       });
//
//       await new Promise(resolve => setImmediate(resolve)); // Attendez les mises à jour de l'état
//     });
//
//     // Vérifiez le texte à la fin du quiz
//     expect(getByText('Félicitations !  Vous avez terminé le quiz.')).toBeTruthy();
//     expect(getByText('Votre score est de 3  sur 3.')).toBeTruthy();
//   });


})
