import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { useMyContext } from "@/hooks/useMyContext";

// Dimensions de l'écran
const screenWidth = Dimensions.get("window").width;

// Définir une interface pour les données de progression
interface Progress {
    score: number; // Score de l'utilisateur
    matter: string; // Matière associée
}

// Composant Graphique
const Graphique: React.FC = () => {
    const [state] = useMyContext();
    const { users, currentUser } = state;

    // Récupérez les progrès de l'utilisateur courant
    const userProgress: Progress[] = users.find((user: { user: any; }) => user.user === currentUser)?.progress || [];

    // Assurez-vous qu'il y a des données à afficher
    if (userProgress.length === 0) {
        return <View><Text>Aucune donnée à afficher</Text></View>;
    }

    // Associer chaque matière à une couleur spécifique
    const colors: Record<string, string> = {
        Francais: "#FF6384",
        Mathematiques: "#36A2EB",
        Anglais: "#FFCE56",
        Histoire: "#4BC0C0",
        Geographie: "#9966FF",
        Physique: "#FF9F40",
        Sciences: "#FFCD56",
        Chimie: "#36A2EB",
        Svt: "#FF6384",
        Numerique: "#4BC0C0"
    };

    // Préparer les données pour le graphique avec les pourcentages
    const data = userProgress.map(progress => {
        const percentage = ((progress.score / 10) * 100); // Calculer le pourcentage
        return {
            name: `${percentage.toFixed(2)}% ${progress.matter}`, // Ajouter le pourcentage au label
            population: progress.score, // Utilisation du score comme "population" pour le PieChart
            color: colors[progress.matter] || "#000", // Couleur associée à la matière
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        };
    });

    return (
        <View style={styles.container}>
            <PieChart
                data={data}
                hasLegend={false}
                width={screenWidth}
                height={screenWidth}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"100"}
                absolute
            />
            {/* Légende sous le graphique */}
            <View style={styles.legendContainer}>
                {data.map((item, index) => (
                    <View key={index} style={styles.legendItem}>
                        <View style={[styles.colorBox, { backgroundColor: item.color }]} />
                        <Text style={styles.legendText}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    legendContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Permet de revenir à la ligne si nécessaire
        marginTop: 10,
        justifyContent: 'center',
    },
    legendItem: {
        width: "45%",
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 0,
        marginBottom: 10,
    },
    colorBox: {
        width: 20,
        height: 20,
        marginRight: 8,
        borderRadius: 10,
    },
    legendText: {
        fontSize: 14,
        color: "#7F7F7F",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

export default Graphique;
