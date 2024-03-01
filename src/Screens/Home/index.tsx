import {Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import uuid from 'react-native-uuid';

import {Participant} from "../../Components/Participant";
import {styles} from "./styles";

interface ParticipantData {
    id: string,
    name: string
}

export const Home = () => {

    const [newParticipant, setNewParticipant] = useState('');
    const [participants, setParticipants] = useState<ParticipantData[]>([]);

    const handleParticipantAdd = () => {
        const data: ParticipantData = {
            id: uuid.v4().toString(),
            name: newParticipant
        }

        if (newParticipant === '' || participants.some(participant => participant.name === newParticipant)) {
            return Alert.alert('Participante Já existe', "Já existe um participante na lista com esse nome");
        }

        setParticipants(oldState => [...oldState, data]);
    }

    const handleParticipantRemove = ({ id, name }: ParticipantData) => {

        Alert.alert('Remover', `Tem certeza que deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(oldState => oldState.filter(
                            participant => participant.id !== id
                        )
                    )
                    Alert.alert('Deletado', `O participante ${name}, foi deletado com sucesso!`)
                },
                style: 'destructive'
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
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
                            onRemove={() => handleParticipantRemove(item)}
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

