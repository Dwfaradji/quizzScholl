// Liste de matières prédéfinies
import dataQuizz from "@/data/quizzData";

const defaultMatters = dataQuizz.map(question => ({matter: question.matter, score: 0}));

export const initialState = {
    users: [
        {
            user: "Entrez votre nom",
            progress: [...defaultMatters],
        },
    ],
};

export const reducer = (state, action) => {
    switch (action.type) {
        // Action pour définir l'utilisateur courant
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload.user, // Permet de définir l'utilisateur courant
            };
        case 'ADD_USER':
            return {
                ...state,
                users: [
                    ...state.users,
                    {
                        user: action.payload.user,
                        progress: [...defaultMatters], // Copies the default subjects
                    },
                ],
            };
        case 'ADD_MATTER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.user === action.payload.user
                        ? {
                            ...user,
                            progress: user.progress.map(progress =>
                                progress.matter === action.payload.matter
                                    ? {...progress, score: action.payload.score}
                                    : progress
                            )
                        }
                        : user
                )
            };
        default:
            return state; // Retourner l'état actuel si aucune action ne correspond
    }
};





