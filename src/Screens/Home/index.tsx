import { StatusBar } from 'expo-status-bar';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { styles } from "./styles";
import {useState} from "react";

export const Home = () => {

    const [participant, setParticipant] = useState('');
    const [participants, setParticipants] = useState([]);

    const handleParticipantAdd = () => {

    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Quinta, 29 de Fevereiro de 2024</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParticipant}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

