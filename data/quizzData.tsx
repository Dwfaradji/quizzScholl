// Définir l'interface pour une question
interface Question {
    question: string;
    choices: string[];
    correctAnswer: string;
}

// Définir l'interface pour un ensemble de catégories
interface Matter {
    matter: string; // Propriété pour le nom de la catégorie
    questions: Question[]; // Un tableau de questions pour chaque catégorie
}

// Définir l'ensemble des catégories
const dataQuizz :Matter[] = [
    {
        matter: "Francais",
        questions:[
            {
            question: "Comment s'appelle le narrateur dans un texte écrit à la première personne?",
            choices: ["Le je", "Le tu", "Le il", "Le narratif"],
            correctAnswer: "Le je"
        },
            {
                question: "Quelle est la forme correcte du verbe au passé composé: 'Nous ____ (manger) une pomme.'?",
                choices: ["avons mangé", "avions mangé", "mangeons", "mangions"],
                correctAnswer: "avons mangé"
            },
            {
                question: "Quel est l'infinitif du verbe conjugué: 'Ils finissent'?",
                choices: ["Finir", "Finissent", "Finissant", "Fini"],
                correctAnswer: "Finir"
            },
            {
                question: "Quelle est la définition d'un adjectif qualificatif?",
                choices: ["Un mot qui décrit un nom", "Un mot qui décrit un verbe", "Un mot qui décrit un adjectif", "Un mot qui remplace un nom"],
                correctAnswer: "Un mot qui décrit un nom"
            },
            {
                question: "Comment appelle-t-on les trois types de phrases?",
                choices: ["Déclarative, interrogative, impérative", "Impérative, exclamative, interrogative", "Narrative, descriptive, explicative", "Déclarative, narrative, descriptive"],
                correctAnswer: "Déclarative, interrogative, impérative"
            },
            {
                question: "Quel est le genre d'un mot qui commence par 'le'?",
                choices: ["Masculin", "Féminin", "Singulier", "Pluriel"],
                correctAnswer: "Masculin"
            },
            {
                question: "Quel est le verbe qui exprime une action dans la phrase: 'Paul mange une pomme'?",
                choices: ["Mange", "Paul", "Une", "Pomme"],
                correctAnswer: "Mange"
            },
            {
                question: "Quel est le pluriel du mot 'cheval'?",
                choices: ["Chevaux", "Chevals", "Cheveaux", "Chevels"],
                correctAnswer: "Chevaux"
            },
            {
                question: "Comment appelle-t-on une phrase qui pose une question?",
                choices: ["Une phrase interrogative", "Une phrase impérative", "Une phrase exclamative", "Une phrase déclarative"],
                correctAnswer: "Une phrase interrogative"
            },
            {
                question: "Quel est l'infinitif du verbe 'nous parlons'?",
                choices: ["Parler", "Parlons", "Parlé", "Parlant"],
                correctAnswer: "Parler"
            }]
    },
    {
        matter: "Mathématiques",
        questions:[{
            question: "Quelle est la somme des angles dans un triangle?",
            choices: ["180 degrés", "90 degrés", "360 degrés", "240 degrés"],
            correctAnswer: "180 degrés"
        },
            {
                question: "Quel est le nom de la droite qui divise un angle en deux parties égales?",
                choices: ["La bissectrice", "La médiatrice", "La hauteur", "La diagonale"],
                correctAnswer: "La bissectrice"
            },
            {
                question: "Comment s'appelle un polygone à cinq côtés?",
                choices: ["Pentagone", "Hexagone", "Carré", "Octogone"],
                correctAnswer: "Pentagone"
            },
            {
                question: "Qu'est-ce qu'une fraction?",
                choices: ["Une partie d'un tout", "Un nombre entier", "Un nombre négatif", "Un nombre premier"],
                correctAnswer: "Une partie d'un tout"
            },
            {
                question: "Comment appelle-t-on le résultat d'une addition?",
                choices: ["Une somme", "Un produit", "Une différence", "Un quotient"],
                correctAnswer: "Une somme"
            },
            {
                question: "Comment s'appelle un triangle avec trois côtés de même longueur?",
                choices: ["Triangle équilatéral", "Triangle isocèle", "Triangle rectangle", "Triangle scalène"],
                correctAnswer: "Triangle équilatéral"
            },
            {
                question: "Quelle est la formule pour calculer l'aire d'un rectangle?",
                choices: ["Longueur × Largeur", "Base × Hauteur", "Côté × Côté", "2 × (Longueur + Largeur)"],
                correctAnswer: "Longueur × Largeur"
            },
            {
                question: "Quel est le terme pour la partie supérieure d'une fraction?",
                choices: ["Numérateur", "Dénominateur", "Facteur", "Quotient"],
                correctAnswer: "Numérateur"
            },
            {
                question: "Qu'est-ce qu'un nombre premier?",
                choices: ["Un nombre divisible uniquement par 1 et lui-même", "Un nombre pair", "Un nombre divisible par 2", "Un nombre avec plus de deux diviseurs"],
                correctAnswer: "Un nombre divisible uniquement par 1 et lui-même"
            },
            {
                question: "Quelle est la valeur de Pi arrondie à deux décimales?",
                choices: ["3.14", "2.71", "1.41", "1.61"],
                correctAnswer: "3.14"
            }
        ]
    },{
        matter: "Anglais",
        questions:[{
            question: "How do you say 'merci' in English?",
            choices: ["Thank you", "Please", "Sorry", "Goodbye"],
            correctAnswer: "Thank you"
        },
            {
                question: "What is the opposite of 'big'?",
                choices: ["Small", "Tall", "Fast", "Wide"],
                correctAnswer: "Small"
            },
            {
                question: "Which one is a fruit?",
                choices: ["Apple", "Dog", "Car", "Table"],
                correctAnswer: "Apple"
            },
            {
                question: "What color is the sky on a clear day?",
                choices: ["Blue", "Red", "Green", "Yellow"],
                correctAnswer: "Blue"
            },
            {
                question: "How do you say 'bonjour' in English?",
                choices: ["Hello", "Goodbye", "Yes", "Thank you"],
                correctAnswer: "Hello"
            },
            {
                question: "What is the plural of 'child'?",
                choices: ["Children", "Childs", "Childes", "Chields"],
                correctAnswer: "Children"
            },
            {
                question: "Which of these animals can fly?",
                choices: ["Bird", "Dog", "Fish", "Cat"],
                correctAnswer: "Bird"
            },
            {
                question: "How do you say 'chien' in English?",
                choices: ["Dog", "Cat", "Bird", "Fish"],
                correctAnswer: "Dog"
            },
            {
                question: "What is the first day of the week?",
                choices: ["Monday", "Tuesday", "Sunday", "Friday"],
                correctAnswer: "Monday"
            },
            {
                question: "What is the past form of the verb 'to be'?",
                choices: ["Was/Were", "Is/Are", "Be", "Been"],
                correctAnswer: "Was/Were"
            }
        ]
    },
    {
        matter: "Histoire",
        questions:[{
            question: "Qui était Jules César?",
            choices: ["Un empereur romain", "Un philosophe grec", "Un roi de France", "Un explorateur espagnol"],
            correctAnswer: "Un empereur romain"
        },
            {
                question: "Quelle civilisation a construit les pyramides de Gizeh?",
                choices: ["Les Égyptiens", "Les Romains", "Les Grecs", "Les Aztèques"],
                correctAnswer: "Les Égyptiens"
            },
            {
                question: "En quelle année Christophe Colomb a-t-il découvert l'Amérique?",
                choices: ["1492", "1520", "1776", "1066"],
                correctAnswer: "1492"
            },
            {
                question: "Quel événement marque le début du Moyen Âge en Europe?",
                choices: ["La chute de l'Empire romain", "La découverte de l'Amérique", "La Guerre de Cent Ans", "La Renaissance"],
                correctAnswer: "La chute de l'Empire romain"
            },
            {
                question: "Qui était Charlemagne?",
                choices: ["Le roi des Francs et empereur d'Occident", "Un général romain", "Un pharaon d'Égypte", "Un explorateur viking"],
                correctAnswer: "Le roi des Francs et empereur d'Occident"
            },
            {
                question: "Quel peuple a fondé la ville de Rome?",
                choices: ["Les Romains", "Les Grecs", "Les Gaulois", "Les Étrusques"],
                correctAnswer: "Les Romains"
            },
            {
                question: "Qui était Clovis?",
                choices: ["Le premier roi des Francs", "Un empereur romain", "Un explorateur viking", "Un philosophe grec"],
                correctAnswer: "Le premier roi des Francs"
            },
            {
                question: "Quelle bataille célèbre a eu lieu en 1066?",
                choices: ["La bataille de Hastings", "La bataille de Waterloo", "La bataille de Marignan", "La bataille d'Actium"],
                correctAnswer: "La bataille de Hastings"
            },
            {
                question: "Qui a peint la Joconde?",
                choices: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Donatello"],
                correctAnswer: "Léonard de Vinci"
            },
            {
                question: "Quel était le principal objectif des Croisades?",
                choices: ["Reprendre Jérusalem aux musulmans", "Découvrir de nouvelles terres", "Faire du commerce", "Diffuser l'art européen"],
                correctAnswer: "Reprendre Jérusalem aux musulmans"
            }
        ]
    },
    {
        matter: "Géographie",
        questions:[{
            question: "Qu'est-ce qu'un parallèle sur une carte?",
            choices: ["Une ligne imaginaire qui traverse la Terre d'est en ouest", "Une ligne imaginaire qui traverse la Terre du nord au sud", "Une montagne divisant deux pays", "Une frontière naturelle"],
            correctAnswer: "Une ligne imaginaire qui traverse la Terre d'est en ouest"
        },
            {
                question: "Quel est le plus grand continent du monde?",
                choices: ["L'Asie", "L'Afrique", "L'Europe", "L'Amérique du Nord"],
                correctAnswer: "L'Asie"
            },
            {
                question: "Quel fleuve traverse l'Égypte?",
                choices: ["Le Nil", "L'Amazone", "Le Mississippi", "Le Gange"],
                correctAnswer: "Le Nil"
            },
            {
                question: "Quelle est la capitale de l'Australie?",
                choices: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
                correctAnswer: "Canberra"
            },
            {
                question: "Dans quel hémisphère se trouve la majorité du continent africain?",
                choices: ["Hémisphère nord", "Hémisphère sud", "Hémisphère est", "Hémisphère ouest"],
                correctAnswer: "Hémisphère nord"
            },
            {
                question: "Quelle est la plus grande mer du monde?",
                choices: ["La mer Méditerranée", "La mer des Caraïbes", "La mer Caspienne", "La mer Rouge"],
                correctAnswer: "La mer Caspienne"
            },
            {
                question: "Quelles montagnes séparent l'Europe de l'Asie?",
                choices: ["Les montagnes de l'Oural", "Les Alpes", "Les Andes", "Les Monts Atlas"],
                correctAnswer: "Les montagnes de l'Oural"
            },
            {
                question: "Quelle est la capitale de l'Italie?",
                choices: ["Rome", "Milan", "Florence", "Venise"],
                correctAnswer: "Rome"
            },
            {
                question: "Quel pays est traversé par le fleuve Amazone?",
                choices: ["Le Brésil", "Le Mexique", "L'Inde", "La Chine"],
                correctAnswer: "Le Brésil"
            },
            {
                question: "Quelle chaîne de montagnes est la plus longue du monde?",
                choices: ["Les Andes", "Les Rocheuses", "L'Himalaya", "Les Alpes"],
                correctAnswer: "Les Andes"
            }
        ]
    },
    {
        matter: "Physique",
        questions:[{
            question: "Quel est l'état de l'eau à 0°C?",
            choices: ["Solide", "Liquide", "Gazeux", "Plasma"],
            correctAnswer: "Solide"
        },
            {
                question: "Quel est l'instrument utilisé pour mesurer la température?",
                choices: ["Un thermomètre", "Un baromètre", "Un hygromètre", "Un voltmètre"],
                correctAnswer: "Un thermomètre"
            },
            {
                question: "Comment appelle-t-on un changement d'état de solide à liquide?",
                choices: ["Fusion", "Solidification", "Évaporation", "Sublimation"],
                correctAnswer: "Fusion"
            },
            {
                question: "Quel est le phénomène qui permet à un objet de flotter dans l'eau?",
                choices: ["La poussée d'Archimède", "La gravitation", "La friction", "La densité"],
                correctAnswer: "La poussée d'Archimède"
            },
            {
                question: "Quel est l'appareil utilisé pour mesurer la force exercée par un objet?",
                choices: ["Un dynamomètre", "Un voltmètre", "Un baromètre", "Un thermomètre"],
                correctAnswer: "Un dynamomètre"
            },
            {
                question: "Quelle est la formule de la vitesse?",
                choices: ["Distance ÷ Temps", "Temps ÷ Distance", "Distance × Temps", "Masse ÷ Distance"],
                correctAnswer: "Distance ÷ Temps"
            },
            {
                question: "Quel est l'état de la matière dans lequel les molécules sont très rapprochées et ordonnées?",
                choices: ["Solide", "Liquide", "Gazeux", "Plasma"],
                correctAnswer: "Solide"
            },
            {
                question: "Quel est le principal gaz de l'atmosphère terrestre?",
                choices: ["Azote", "Oxygène", "Dioxyde de carbone", "Hélium"],
                correctAnswer: "Azote"
            },
            {
                question: "Qu'est-ce qui produit un arc-en-ciel?",
                choices: ["La réfraction et la réflexion de la lumière dans les gouttes d'eau", "La lumière du soleil se dispersant dans l'atmosphère", "Les éclairs", "Les mouvements de la lune"],
                correctAnswer: "La réfraction et la réflexion de la lumière dans les gouttes d'eau"
            },
            {
                question: "Comment appelle-t-on le transfert de chaleur par un fluide en mouvement?",
                choices: ["La convection", "La conduction", "Le rayonnement", "La fusion"],
                correctAnswer: "La convection"
            }
        ]
    },
    {
        matter: "Sciences",
        questions:[{
            question: "Quelle planète est la plus proche du Soleil?",
            choices: ["Mercure", "Venus", "Mars", "Jupiter"],
            correctAnswer: "Mercure"
        },
            {
                question: "Quel est l'élément chimique symbolisé par 'O' dans le tableau périodique?",
                choices: ["Oxygène", "Or", "Osmium", "Ozone"],
                correctAnswer: "Oxygène"
            },
            {
                question: "Quelle partie de la plante permet de capter l'énergie du Soleil pour la photosynthèse?",
                choices: ["Les feuilles", "Les racines", "Le tronc", "Les fleurs"],
                correctAnswer: "Les feuilles"
            },
            {
                question: "Quelle est la principale source d'énergie pour la Terre?",
                choices: ["Le Soleil", "Le vent", "L'eau", "Le feu"],
                correctAnswer: "Le Soleil"
            },
            {
                question: "Quel est le nom de l'instrument utilisé pour observer les étoiles?",
                choices: ["Un télescope", "Un microscope", "Un baromètre", "Un chronomètre"],
                correctAnswer: "Un télescope"
            },
            {
                question: "Quel est le rôle des racines d'une plante?",
                choices: ["Absorber l'eau et les nutriments", "Produire des fleurs", "Protéger la plante", "Effectuer la photosynthèse"],
                correctAnswer: "Absorber l'eau et les nutriments"
            },
            {
                question: "Quel est l'organe principal du système respiratoire humain?",
                choices: ["Les poumons", "Le cœur", "Le foie", "L'estomac"],
                correctAnswer: "Les poumons"
            },
            {
                question: "Quel gaz est principalement responsable de l'effet de serre?",
                choices: ["Le dioxyde de carbone", "L'oxygène", "L'azote", "L'hélium"],
                correctAnswer: "Le dioxyde de carbone"
            },
            {
                question: "Comment s'appelle le processus par lequel les plantes produisent de l'oxygène?",
                choices: ["La photosynthèse", "La germination", "La pollinisation", "La sédimentation"],
                correctAnswer: "La photosynthèse"
            },
            {
                question: "Quelle est la plus petite unité de vie?",
                choices: ["La cellule", "L'atome", "La molécule", "Le tissu"],
                correctAnswer: "La cellule"
            }
        ]
    },
    {
        matter: "Chimie",
        questions:[{
            question: "Quel est le symbole chimique de l'eau?",
            choices: ["H2O", "O2", "CO2", "NaCl"],
            correctAnswer: "H2O"
        },
            {
                question: "Quelle est la charge d'un proton?",
                choices: ["Positive", "Négative", "Neutre", "Variable"],
                correctAnswer: "Positive"
            },
            {
                question: "Quel gaz est nécessaire à la combustion?",
                choices: ["Oxygène", "Azote", "Dioxyde de carbone", "Hélium"],
                correctAnswer: "Oxygène"
            },
            {
                question: "Quelle est l'unité de mesure du pH?",
                choices: ["Aucune unité", "Mol", "Litres", "Grammes"],
                correctAnswer: "Aucune unité"
            },
            {
                question: "Quel est le nom du tableau qui classe les éléments chimiques?",
                choices: ["Le tableau périodique", "Le tableau des masses", "Le tableau des ions", "Le tableau des molécules"],
                correctAnswer: "Le tableau périodique"
            },
            {
                question: "Quel est le nom de l'élément chimique ayant pour symbole 'Na'?",
                choices: ["Sodium", "Nickel", "Azote", "Argon"],
                correctAnswer: "Sodium"
            },
            {
                question: "Quel est le pH de l'eau pure?",
                choices: ["7", "0", "14", "5"],
                correctAnswer: "7"
            },
            {
                question: "Comment appelle-t-on une réaction chimique qui dégage de la chaleur?",
                choices: ["Exothermique", "Endothermique", "Fusion", "Catalytique"],
                correctAnswer: "Exothermique"
            },
            {
                question: "Quelle est la formule chimique du dioxyde de carbone?",
                choices: ["CO2", "O2", "H2O", "NaCl"],
                correctAnswer: "CO2"
            },
            {
                question: "Que se passe-t-il lors d'une réaction chimique?",
                choices: ["Les atomes se réarrangent pour former de nouvelles molécules", "Les molécules disparaissent", "Les atomes perdent leur charge", "Les molécules se dédoublent sans rien changer"],
                correctAnswer: "Les atomes se réarrangent pour former de nouvelles molécules"
            }
        ]
    },
    {
        matter: "Svt",
        questions:[{
            question: "Quelle est la principale source d'énergie pour les plantes?",
            choices: ["La lumière du Soleil", "L'eau", "Le sol", "Les nutriments"],
            correctAnswer: "La lumière du Soleil"
        },
            {
                question: "Où se déroule la photosynthèse dans une plante?",
                choices: ["Dans les feuilles", "Dans les racines", "Dans les fleurs", "Dans le tronc"],
                correctAnswer: "Dans les feuilles"
            },
            {
                question: "Quel est l'organe principal du système circulatoire humain?",
                choices: ["Le cœur", "Les poumons", "Le foie", "Le cerveau"],
                correctAnswer: "Le cœur"
            },
            {
                question: "Quelle est la fonction des racines chez une plante?",
                choices: ["Absorber l'eau et les nutriments", "Produire des graines", "Effectuer la photosynthèse", "Protéger contre les prédateurs"],
                correctAnswer: "Absorber l'eau et les nutriments"
            },
            {
                question: "Comment s'appelle le processus par lequel un être vivant naît, grandit, se reproduit et meurt?",
                choices: ["Le cycle de vie", "La reproduction", "La respiration", "L'évolution"],
                correctAnswer: "Le cycle de vie"
            },
            {
                question: "Quel gaz est absorbé par les plantes pendant la photosynthèse?",
                choices: ["Le dioxyde de carbone", "L'oxygène", "L'azote", "L'hélium"],
                correctAnswer: "Le dioxyde de carbone"
            },
            {
                question: "Quel est le rôle des muscles dans le corps humain?",
                choices: ["Permettre le mouvement", "Transporter l'oxygène", "Produire des hormones", "Stocker l'énergie"],
                correctAnswer: "Permettre le mouvement"
            },
            {
                question: "Quel est le plus grand organe du corps humain?",
                choices: ["La peau", "Le foie", "Les poumons", "Le cœur"],
                correctAnswer: "La peau"
            },
            {
                question: "Comment s'appelle l'organe qui permet de respirer?",
                choices: ["Les poumons", "Le cœur", "Le foie", "L'estomac"],
                correctAnswer: "Les poumons"
            },
            {
                question: "Quelle est la fonction principale du squelette humain?",
                choices: ["Soutenir et protéger les organes", "Filtrer le sang", "Produire de l'énergie", "Transmettre l'influx nerveux"],
                correctAnswer: "Soutenir et protéger les organes"
            }
        ]
    },
    {
        matter: "Numerique",
        questions:[{
            question: "Que signifie 'Internet'?",
            choices: ["Un réseau mondial de communication", "Un logiciel de messagerie", "Un jeu en ligne", "Une plateforme de réseaux sociaux"],
            correctAnswer: "Un réseau mondial de communication"
        },
            {
                question: "Que signifie le terme 'navigateur' sur Internet?",
                choices: ["Un logiciel pour accéder aux sites web", "Un ordinateur", "Un moteur de recherche", "Un réseau local"],
                correctAnswer: "Un logiciel pour accéder aux sites web"
            },
            {
                question: "Quel est le rôle d'un mot de passe?",
                choices: ["Protéger l'accès à des informations", "Ouvrir un programme", "Augmenter la vitesse de l'ordinateur", "Transmettre des données"],
                correctAnswer: "Protéger l'accès à des informations"
            },
            {
                question: "Qu'est-ce qu'un fichier?",
                choices: ["Un ensemble de données stockées sur un ordinateur", "Un périphérique", "Un type d'imprimante", "Un logiciel de traitement de texte"],
                correctAnswer: "Un ensemble de données stockées sur un ordinateur"
            },
            {
                question: "Comment appelle-t-on une personne malveillante qui s'introduit dans un système informatique?",
                choices: ["Un hacker", "Un développeur", "Un programmeur", "Un ingénieur réseau"],
                correctAnswer: "Un hacker"
            },
            {
                question: "Quelle est l'unité de mesure principale de la capacité de stockage des données?",
                choices: ["Le octet (Byte)", "Le kilomètre", "Le mètre", "Le kilowatt"],
                correctAnswer: "Le octet (Byte)"
            },
            {
                question: "Que signifie 'HTTPS' dans une adresse de site web?",
                choices: ["HyperText Transfer Protocol Secure", "Hyperlink Transfer System", "High Transfer System", "HyperTerminal System"],
                correctAnswer: "HyperText Transfer Protocol Secure"
            },
            {
                question: "Quel est le principal moteur de recherche utilisé dans le monde?",
                choices: ["Google", "Yahoo", "Bing", "DuckDuckGo"],
                correctAnswer: "Google"
            },
            {
                question: "Que permet de faire un 'cloud' informatique?",
                choices: ["Stocker des fichiers à distance", "Accélérer le processeur", "Nettoyer un disque dur", "Modifier des images"],
                correctAnswer: "Stocker des fichiers à distance"
            },
            {
                question: "Quel appareil est utilisé pour transférer des informations sans fil?",
                choices: ["Un routeur", "Une souris", "Un écran", "Un disque dur externe"],
                correctAnswer: "Un routeur"
            }
        ]
    }

]


// const questions: Category = {
//     francais: [
//         {
//             question: "Comment s'appelle le narrateur dans un texte écrit à la première personne?",
//             choices: ["Le je", "Le tu", "Le il", "Le narratif"],
//             correctAnswer: "Le je"
//         },
//         {
//             question: "Quelle est la forme correcte du verbe au passé composé: 'Nous ____ (manger) une pomme.'?",
//             choices: ["avons mangé", "avions mangé", "mangeons", "mangions"],
//             correctAnswer: "avons mangé"
//         },
//         {
//             question: "Quel est l'infinitif du verbe conjugué: 'Ils finissent'?",
//             choices: ["Finir", "Finissent", "Finissant", "Fini"],
//             correctAnswer: "Finir"
//         },
//         {
//             question: "Quelle est la définition d'un adjectif qualificatif?",
//             choices: ["Un mot qui décrit un nom", "Un mot qui décrit un verbe", "Un mot qui décrit un adjectif", "Un mot qui remplace un nom"],
//             correctAnswer: "Un mot qui décrit un nom"
//         },
//         {
//             question: "Comment appelle-t-on les trois types de phrases?",
//             choices: ["Déclarative, interrogative, impérative", "Impérative, exclamative, interrogative", "Narrative, descriptive, explicative", "Déclarative, narrative, descriptive"],
//             correctAnswer: "Déclarative, interrogative, impérative"
//         },
//         {
//             question: "Quel est le genre d'un mot qui commence par 'le'?",
//             choices: ["Masculin", "Féminin", "Singulier", "Pluriel"],
//             correctAnswer: "Masculin"
//         },
//         {
//             question: "Quel est le verbe qui exprime une action dans la phrase: 'Paul mange une pomme'?",
//             choices: ["Mange", "Paul", "Une", "Pomme"],
//             correctAnswer: "Mange"
//         },
//         {
//             question: "Quel est le pluriel du mot 'cheval'?",
//             choices: ["Chevaux", "Chevals", "Cheveaux", "Chevels"],
//             correctAnswer: "Chevaux"
//         },
//         {
//             question: "Comment appelle-t-on une phrase qui pose une question?",
//             choices: ["Une phrase interrogative", "Une phrase impérative", "Une phrase exclamative", "Une phrase déclarative"],
//             correctAnswer: "Une phrase interrogative"
//         },
//         {
//             question: "Quel est l'infinitif du verbe 'nous parlons'?",
//             choices: ["Parler", "Parlons", "Parlé", "Parlant"],
//             correctAnswer: "Parler"
//         }
//     ],
//     math: [
//         {
//             question: "Quelle est la somme des angles dans un triangle?",
//             choices: ["180 degrés", "90 degrés", "360 degrés", "240 degrés"],
//             correctAnswer: "180 degrés"
//         },
//         {
//             question: "Quel est le nom de la droite qui divise un angle en deux parties égales?",
//             choices: ["La bissectrice", "La médiatrice", "La hauteur", "La diagonale"],
//             correctAnswer: "La bissectrice"
//         },
//         {
//             question: "Comment s'appelle un polygone à cinq côtés?",
//             choices: ["Pentagone", "Hexagone", "Carré", "Octogone"],
//             correctAnswer: "Pentagone"
//         },
//         {
//             question: "Qu'est-ce qu'une fraction?",
//             choices: ["Une partie d'un tout", "Un nombre entier", "Un nombre négatif", "Un nombre premier"],
//             correctAnswer: "Une partie d'un tout"
//         },
//         {
//             question: "Comment appelle-t-on le résultat d'une addition?",
//             choices: ["Une somme", "Un produit", "Une différence", "Un quotient"],
//             correctAnswer: "Une somme"
//         },
//         {
//             question: "Comment s'appelle un triangle avec trois côtés de même longueur?",
//             choices: ["Triangle équilatéral", "Triangle isocèle", "Triangle rectangle", "Triangle scalène"],
//             correctAnswer: "Triangle équilatéral"
//         },
//         {
//             question: "Quelle est la formule pour calculer l'aire d'un rectangle?",
//             choices: ["Longueur × Largeur", "Base × Hauteur", "Côté × Côté", "2 × (Longueur + Largeur)"],
//             correctAnswer: "Longueur × Largeur"
//         },
//         {
//             question: "Quel est le terme pour la partie supérieure d'une fraction?",
//             choices: ["Numérateur", "Dénominateur", "Facteur", "Quotient"],
//             correctAnswer: "Numérateur"
//         },
//         {
//             question: "Qu'est-ce qu'un nombre premier?",
//             choices: ["Un nombre divisible uniquement par 1 et lui-même", "Un nombre pair", "Un nombre divisible par 2", "Un nombre avec plus de deux diviseurs"],
//             correctAnswer: "Un nombre divisible uniquement par 1 et lui-même"
//         },
//         {
//             question: "Quelle est la valeur de Pi arrondie à deux décimales?",
//             choices: ["3.14", "2.71", "1.41", "1.61"],
//             correctAnswer: "3.14"
//         }
//     ],
//     anglais: [
//         {
//             question: "How do you say 'merci' in English?",
//             choices: ["Thank you", "Please", "Sorry", "Goodbye"],
//             correctAnswer: "Thank you"
//         },
//         {
//             question: "What is the opposite of 'big'?",
//             choices: ["Small", "Tall", "Fast", "Wide"],
//             correctAnswer: "Small"
//         },
//         {
//             question: "Which one is a fruit?",
//             choices: ["Apple", "Dog", "Car", "Table"],
//             correctAnswer: "Apple"
//         },
//         {
//             question: "What color is the sky on a clear day?",
//             choices: ["Blue", "Red", "Green", "Yellow"],
//             correctAnswer: "Blue"
//         },
//         {
//             question: "How do you say 'bonjour' in English?",
//             choices: ["Hello", "Goodbye", "Yes", "Thank you"],
//             correctAnswer: "Hello"
//         },
//         {
//             question: "What is the plural of 'child'?",
//             choices: ["Children", "Childs", "Childes", "Chields"],
//             correctAnswer: "Children"
//         },
//         {
//             question: "Which of these animals can fly?",
//             choices: ["Bird", "Dog", "Fish", "Cat"],
//             correctAnswer: "Bird"
//         },
//         {
//             question: "How do you say 'chien' in English?",
//             choices: ["Dog", "Cat", "Bird", "Fish"],
//             correctAnswer: "Dog"
//         },
//         {
//             question: "What is the first day of the week?",
//             choices: ["Monday", "Tuesday", "Sunday", "Friday"],
//             correctAnswer: "Monday"
//         },
//         {
//             question: "What is the past form of the verb 'to be'?",
//             choices: ["Was/Were", "Is/Are", "Be", "Been"],
//             correctAnswer: "Was/Were"
//         }
//     ],
//     histoire: [
//         {
//             question: "Qui était Jules César?",
//             choices: ["Un empereur romain", "Un philosophe grec", "Un roi de France", "Un explorateur espagnol"],
//             correctAnswer: "Un empereur romain"
//         },
//         {
//             question: "Quelle civilisation a construit les pyramides de Gizeh?",
//             choices: ["Les Égyptiens", "Les Romains", "Les Grecs", "Les Aztèques"],
//             correctAnswer: "Les Égyptiens"
//         },
//         {
//             question: "En quelle année Christophe Colomb a-t-il découvert l'Amérique?",
//             choices: ["1492", "1520", "1776", "1066"],
//             correctAnswer: "1492"
//         },
//         {
//             question: "Quel événement marque le début du Moyen Âge en Europe?",
//             choices: ["La chute de l'Empire romain", "La découverte de l'Amérique", "La Guerre de Cent Ans", "La Renaissance"],
//             correctAnswer: "La chute de l'Empire romain"
//         },
//         {
//             question: "Qui était Charlemagne?",
//             choices: ["Le roi des Francs et empereur d'Occident", "Un général romain", "Un pharaon d'Égypte", "Un explorateur viking"],
//             correctAnswer: "Le roi des Francs et empereur d'Occident"
//         },
//         {
//             question: "Quel peuple a fondé la ville de Rome?",
//             choices: ["Les Romains", "Les Grecs", "Les Gaulois", "Les Étrusques"],
//             correctAnswer: "Les Romains"
//         },
//         {
//             question: "Qui était Clovis?",
//             choices: ["Le premier roi des Francs", "Un empereur romain", "Un explorateur viking", "Un philosophe grec"],
//             correctAnswer: "Le premier roi des Francs"
//         },
//         {
//             question: "Quelle bataille célèbre a eu lieu en 1066?",
//             choices: ["La bataille de Hastings", "La bataille de Waterloo", "La bataille de Marignan", "La bataille d'Actium"],
//             correctAnswer: "La bataille de Hastings"
//         },
//         {
//             question: "Qui a peint la Joconde?",
//             choices: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Donatello"],
//             correctAnswer: "Léonard de Vinci"
//         },
//         {
//             question: "Quel était le principal objectif des Croisades?",
//             choices: ["Reprendre Jérusalem aux musulmans", "Découvrir de nouvelles terres", "Faire du commerce", "Diffuser l'art européen"],
//             correctAnswer: "Reprendre Jérusalem aux musulmans"
//         }
//     ],
//     geographie: [
//         {
//             question: "Qu'est-ce qu'un parallèle sur une carte?",
//             choices: ["Une ligne imaginaire qui traverse la Terre d'est en ouest", "Une ligne imaginaire qui traverse la Terre du nord au sud", "Une montagne divisant deux pays", "Une frontière naturelle"],
//             correctAnswer: "Une ligne imaginaire qui traverse la Terre d'est en ouest"
//         },
//         {
//             question: "Quel est le plus grand continent du monde?",
//             choices: ["L'Asie", "L'Afrique", "L'Europe", "L'Amérique du Nord"],
//             correctAnswer: "L'Asie"
//         },
//         {
//             question: "Quel fleuve traverse l'Égypte?",
//             choices: ["Le Nil", "L'Amazone", "Le Mississippi", "Le Gange"],
//             correctAnswer: "Le Nil"
//         },
//         {
//             question: "Quelle est la capitale de l'Australie?",
//             choices: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
//             correctAnswer: "Canberra"
//         },
//         {
//             question: "Dans quel hémisphère se trouve la majorité du continent africain?",
//             choices: ["Hémisphère nord", "Hémisphère sud", "Hémisphère est", "Hémisphère ouest"],
//             correctAnswer: "Hémisphère nord"
//         },
//         {
//             question: "Quelle est la plus grande mer du monde?",
//             choices: ["La mer Méditerranée", "La mer des Caraïbes", "La mer Caspienne", "La mer Rouge"],
//             correctAnswer: "La mer Caspienne"
//         },
//         {
//             question: "Quelles montagnes séparent l'Europe de l'Asie?",
//             choices: ["Les montagnes de l'Oural", "Les Alpes", "Les Andes", "Les Monts Atlas"],
//             correctAnswer: "Les montagnes de l'Oural"
//         },
//         {
//             question: "Quelle est la capitale de l'Italie?",
//             choices: ["Rome", "Milan", "Florence", "Venise"],
//             correctAnswer: "Rome"
//         },
//         {
//             question: "Quel pays est traversé par le fleuve Amazone?",
//             choices: ["Le Brésil", "Le Mexique", "L'Inde", "La Chine"],
//             correctAnswer: "Le Brésil"
//         },
//         {
//             question: "Quelle chaîne de montagnes est la plus longue du monde?",
//             choices: ["Les Andes", "Les Rocheuses", "L'Himalaya", "Les Alpes"],
//             correctAnswer: "Les Andes"
//         }
//     ],
//     physique: [
//         {
//             question: "Quel est l'état de l'eau à 0°C?",
//             choices: ["Solide", "Liquide", "Gazeux", "Plasma"],
//             correctAnswer: "Solide"
//         },
//         {
//             question: "Quel est l'instrument utilisé pour mesurer la température?",
//             choices: ["Un thermomètre", "Un baromètre", "Un hygromètre", "Un voltmètre"],
//             correctAnswer: "Un thermomètre"
//         },
//         {
//             question: "Comment appelle-t-on un changement d'état de solide à liquide?",
//             choices: ["Fusion", "Solidification", "Évaporation", "Sublimation"],
//             correctAnswer: "Fusion"
//         },
//         {
//             question: "Quel est le phénomène qui permet à un objet de flotter dans l'eau?",
//             choices: ["La poussée d'Archimède", "La gravitation", "La friction", "La densité"],
//             correctAnswer: "La poussée d'Archimède"
//         },
//         {
//             question: "Quel est l'appareil utilisé pour mesurer la force exercée par un objet?",
//             choices: ["Un dynamomètre", "Un voltmètre", "Un baromètre", "Un thermomètre"],
//             correctAnswer: "Un dynamomètre"
//         },
//         {
//             question: "Quelle est la formule de la vitesse?",
//             choices: ["Distance ÷ Temps", "Temps ÷ Distance", "Distance × Temps", "Masse ÷ Distance"],
//             correctAnswer: "Distance ÷ Temps"
//         },
//         {
//             question: "Quel est l'état de la matière dans lequel les molécules sont très rapprochées et ordonnées?",
//             choices: ["Solide", "Liquide", "Gazeux", "Plasma"],
//             correctAnswer: "Solide"
//         },
//         {
//             question: "Quel est le principal gaz de l'atmosphère terrestre?",
//             choices: ["Azote", "Oxygène", "Dioxyde de carbone", "Hydrogène"],
//             correctAnswer: "Azote"
//         },
//         {
//             question: "Qu'est-ce qui produit un arc-en-ciel?",
//             choices: ["La réfraction et la réflexion de la lumière dans les gouttes d'eau", "La lumière du soleil se dispersant dans l'atmosphère", "Les éclairs", "Les mouvements de la lune"],
//             correctAnswer: "La réfraction et la réflexion de la lumière dans les gouttes d'eau"
//         },
//         {
//             question: "Comment appelle-t-on le transfert de chaleur par un fluide en mouvement?",
//             choices: ["La convection", "La conduction", "Le rayonnement", "La fusion"],
//             correctAnswer: "La convection"
//         }
//     ],
//     sciences: [
//         {
//             question: "Quelle planète est la plus proche du Soleil?",
//             choices: ["Mercure", "Venus", "Mars", "Jupiter"],
//             correctAnswer: "Mercure"
//         },
//         {
//             question: "Quel est l'élément chimique symbolisé par 'O' dans le tableau périodique?",
//             choices: ["Oxygène", "Or", "Osmium", "Ozone"],
//             correctAnswer: "Oxygène"
//         },
//         {
//             question: "Quelle partie de la plante permet de capter l'énergie du Soleil pour la photosynthèse?",
//             choices: ["Les feuilles", "Les racines", "Le tronc", "Les fleurs"],
//             correctAnswer: "Les feuilles"
//         },
//         {
//             question: "Quelle est la principale source d'énergie pour la Terre?",
//             choices: ["Le Soleil", "Le vent", "L'eau", "Le feu"],
//             correctAnswer: "Le Soleil"
//         },
//         {
//             question: "Quel est le nom de l'instrument utilisé pour observer les étoiles?",
//             choices: ["Un télescope", "Un microscope", "Un baromètre", "Un chronomètre"],
//             correctAnswer: "Un télescope"
//         },
//         {
//             question: "Quel est le rôle des racines d'une plante?",
//             choices: ["Absorber l'eau et les nutriments", "Produire des fleurs", "Protéger la plante", "Effectuer la photosynthèse"],
//             correctAnswer: "Absorber l'eau et les nutriments"
//         },
//         {
//             question: "Quel est l'organe principal du système respiratoire humain?",
//             choices: ["Les poumons", "Le cœur", "Le foie", "L'estomac"],
//             correctAnswer: "Les poumons"
//         },
//         {
//             question: "Quel gaz est principalement responsable de l'effet de serre?",
//             choices: ["Le dioxyde de carbone", "L'oxygène", "L'azote", "L'hélium"],
//             correctAnswer: "Le dioxyde de carbone"
//         },
//         {
//             question: "Comment s'appelle le processus par lequel les plantes produisent de l'oxygène?",
//             choices: ["La photosynthèse", "La germination", "La pollinisation", "La sédimentation"],
//             correctAnswer: "La photosynthèse"
//         },
//         {
//             question: "Quelle est la plus petite unité de vie?",
//             choices: ["La cellule", "L'atome", "La molécule", "Le tissu"],
//             correctAnswer: "La cellule"
//         }
//     ],
//     chimie: [
//         {
//             question: "Quel est le symbole chimique de l'eau?",
//             choices: ["H2O", "O2", "CO2", "NaCl"],
//             correctAnswer: "H2O"
//         },
//         {
//             question: "Quelle est la charge d'un proton?",
//             choices: ["Positive", "Négative", "Neutre", "Variable"],
//             correctAnswer: "Positive"
//         },
//         {
//             question: "Quel gaz est nécessaire à la combustion?",
//             choices: ["Oxygène", "Azote", "Dioxyde de carbone", "Hélium"],
//             correctAnswer: "Oxygène"
//         },
//         {
//             question: "Quelle est l'unité de mesure du pH?",
//             choices: ["Aucune unité", "Mol", "Litres", "Grammes"],
//             correctAnswer: "Aucune unité"
//         },
//         {
//             question: "Quel est le nom du tableau qui classe les éléments chimiques?",
//             choices: ["Le tableau périodique", "Le tableau des masses", "Le tableau des ions", "Le tableau des molécules"],
//             correctAnswer: "Le tableau périodique"
//         },
//         {
//             question: "Quel est le nom de l'élément chimique ayant pour symbole 'Na'?",
//             choices: ["Sodium", "Nickel", "Azote", "Argon"],
//             correctAnswer: "Sodium"
//         },
//         {
//             question: "Quel est le pH de l'eau pure?",
//             choices: ["7", "0", "14", "5"],
//             correctAnswer: "7"
//         },
//         {
//             question: "Comment appelle-t-on une réaction chimique qui dégage de la chaleur?",
//             choices: ["Exothermique", "Endothermique", "Fusion", "Catalytique"],
//             correctAnswer: "Exothermique"
//         },
//         {
//             question: "Quelle est la formule chimique du dioxyde de carbone?",
//             choices: ["CO2", "O2", "H2O", "NaCl"],
//             correctAnswer: "CO2"
//         },
//         {
//             question: "Que se passe-t-il lors d'une réaction chimique?",
//             choices: ["Les atomes se réarrangent pour former de nouvelles molécules", "Les molécules disparaissent", "Les atomes perdent leur charge", "Les molécules se dédoublent sans rien changer"],
//             correctAnswer: "Les atomes se réarrangent pour former de nouvelles molécules"
//         }
//     ],
//     svt: [
//         {
//             question: "Quelle est la principale source d'énergie pour les plantes?",
//             choices: ["La lumière du Soleil", "L'eau", "Le sol", "Les nutriments"],
//             correctAnswer: "La lumière du Soleil"
//         },
//         {
//             question: "Où se déroule la photosynthèse dans une plante?",
//             choices: ["Dans les feuilles", "Dans les racines", "Dans les fleurs", "Dans le tronc"],
//             correctAnswer: "Dans les feuilles"
//         },
//         {
//             question: "Quel est l'organe principal du système circulatoire humain?",
//             choices: ["Le cœur", "Les poumons", "Le foie", "Le cerveau"],
//             correctAnswer: "Le cœur"
//         },
//         {
//             question: "Quelle est la fonction des racines chez une plante?",
//             choices: ["Absorber l'eau et les nutriments", "Produire des graines", "Effectuer la photosynthèse", "Protéger contre les prédateurs"],
//             correctAnswer: "Absorber l'eau et les nutriments"
//         },
//         {
//             question: "Comment s'appelle le processus par lequel un être vivant naît, grandit, se reproduit et meurt?",
//             choices: ["Le cycle de vie", "La reproduction", "La respiration", "L'évolution"],
//             correctAnswer: "Le cycle de vie"
//         },
//         {
//             question: "Quel gaz est absorbé par les plantes pendant la photosynthèse?",
//             choices: ["Le dioxyde de carbone", "L'oxygène", "L'azote", "L'hélium"],
//             correctAnswer: "Le dioxyde de carbone"
//         },
//         {
//             question: "Quel est le rôle des muscles dans le corps humain?",
//             choices: ["Permettre le mouvement", "Transporter l'oxygène", "Produire des hormones", "Stocker l'énergie"],
//             correctAnswer: "Permettre le mouvement"
//         },
//         {
//             question: "Quel est le plus grand organe du corps humain?",
//             choices: ["La peau", "Le foie", "Les poumons", "Le cœur"],
//             correctAnswer: "La peau"
//         },
//         {
//             question: "Comment s'appelle l'organe qui permet de respirer?",
//             choices: ["Les poumons", "Le cœur", "Le foie", "L'estomac"],
//             correctAnswer: "Les poumons"
//         },
//         {
//             question: "Quelle est la fonction principale du squelette humain?",
//             choices: ["Soutenir et protéger les organes", "Filtrer le sang", "Produire de l'énergie", "Transmettre l'influx nerveux"],
//             correctAnswer: "Soutenir et protéger les organes"
//         }
//     ],
//     numerique: [
//         {
//             question: "Que signifie 'Internet'?",
//             choices: ["Un réseau mondial de communication", "Un logiciel de messagerie", "Un jeu en ligne", "Une plateforme de réseaux sociaux"],
//             correctAnswer: "Un réseau mondial de communication"
//         },
//         {
//             question: "Que signifie le terme 'navigateur' sur Internet?",
//             choices: ["Un logiciel pour accéder aux sites web", "Un ordinateur", "Un moteur de recherche", "Un réseau local"],
//             correctAnswer: "Un logiciel pour accéder aux sites web"
//         },
//         {
//             question: "Quel est le rôle d'un mot de passe?",
//             choices: ["Protéger l'accès à des informations", "Ouvrir un programme", "Augmenter la vitesse de l'ordinateur", "Transmettre des données"],
//             correctAnswer: "Protéger l'accès à des informations"
//         },
//         {
//             question: "Qu'est-ce qu'un fichier?",
//             choices: ["Un ensemble de données stockées sur un ordinateur", "Un périphérique", "Un type d'imprimante", "Un logiciel de traitement de texte"],
//             correctAnswer: "Un ensemble de données stockées sur un ordinateur"
//         },
//         {
//             question: "Comment appelle-t-on une personne malveillante qui s'introduit dans un système informatique?",
//             choices: ["Un hacker", "Un développeur", "Un programmeur", "Un ingénieur réseau"],
//             correctAnswer: "Un hacker"
//         },
//         {
//             question: "Quelle est l'unité de mesure principale de la capacité de stockage des données?",
//             choices: ["Le octet (Byte)", "Le kilomètre", "Le mètre", "Le kilowatt"],
//             correctAnswer: "Le octet (Byte)"
//         },
//         {
//             question: "Que signifie 'HTTPS' dans une adresse de site web?",
//             choices: ["HyperText Transfer Protocol Secure", "Hyperlink Transfer System", "High Transfer System", "HyperTerminal System"],
//             correctAnswer: "HyperText Transfer Protocol Secure"
//         },
//         {
//             question: "Quel est le principal moteur de recherche utilisé dans le monde?",
//             choices: ["Google", "Yahoo", "Bing", "DuckDuckGo"],
//             correctAnswer: "Google"
//         },
//         {
//             question: "Que permet de faire un 'cloud' informatique?",
//             choices: ["Stocker des fichiers à distance", "Accélérer le processeur", "Nettoyer un disque dur", "Modifier des images"],
//             correctAnswer: "Stocker des fichiers à distance"
//         },
//         {
//             question: "Quel appareil est utilisé pour transférer des informations sans fil?",
//             choices: ["Un routeur", "Une souris", "Un écran", "Un disque dur externe"],
//             correctAnswer: "Un routeur"
//         }
//     ],
// };

export default dataQuizz;