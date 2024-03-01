import {StatusBar} from 'expo-status-bar';
import {FlatList, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from "./styles";
import {useState} from "react";
import {Participant} from "../../Components/Participant";

interface ParticipantData {
    id: string,
    name: string
}

export const Home = () => {

    const [newParticipant, setNewParticipant] = useState('');
    const [participants, setParticipants] = useState<ParticipantData[]>([]);

    const handleParticipantAdd = () => {
        const data: ParticipantData = {
            id: String(new Date().getTime()),
            name: newParticipant
        }

        if (newParticipant === '' || participants.some(participant => participant.name === newParticipant)) return;

        setParticipants(oldState => [...oldState, data]);
    }

    const handleParticipantRemove = (id: string) => {
        setParticipants(oldState => oldState.filter(
                participant => participant.id !== id
            )
        )
    }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Quinta, 29 de Fevereiro de 2024</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setNewParticipant}
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

            <View style={styles.participantsContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    data={participants}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Participant
                            name={item.name}
                            onRemove={() => handleParticipantRemove(item.id)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <Text style={styles.listEmptyText}>
                            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
                        </Text>
                    )}
                />
            </View>

        </View>
    );
}

