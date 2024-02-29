import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from "./styles";

export const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Quinta, 29 de Fevereiro de 2024</Text>
        </View>
    );
}

