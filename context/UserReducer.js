// Liste de matières prédéfinies
import questions from "@/data/quizzData";

const defaultMatters = questions.map(question => ({ matter: question.matter, score: 0 }));

export const initialState = {
    users: [
        {
            user: "Caca", // Mettre un nom par défaut pour éviter undefined
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
                                    ? { ...progress, score: action.payload.score }
                                    : progress
                            )
                        }
                        : user
                )
            };
        // case 'ADD_MATTER':
        //     return {
        //         ...state,
        //         users: state.users.map(user => {
        //             console.log("Utilisateur actuel traité :", user.user); // Log utilisateur actuel
        //             if (user.user === action.payload.user) {
        //                 const matterIndex = user.progress.findIndex(m => m.matter === action.payload.matter);
        //                 if (matterIndex !== -1) {
        //                     const updatedProgress = user.progress.map((m, index) => {
        //                         if (index === matterIndex) {
        //                             console.log("Mise à jour du score pour", m.matter, "à", action.payload.score);
        //                             return { ...m, score: action.payload.score };
        //                         }
        //                         return m; // Retourner les autres inchangés
        //                     });
        //                     console.log("Progression mise à jour :", updatedProgress);
        //                     return { ...user, progress: updatedProgress };
        //                 }
        //                 console.warn(`La matière ${action.payload.matter} n'existe pas.`);
        //             }
        //             return user; // Retourner les autres utilisateurs inchangés
        //         }),
        //     };



        default:
            return state; // Retourner l'état actuel si aucune action ne correspond
    }
};





