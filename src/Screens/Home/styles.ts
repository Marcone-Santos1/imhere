import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121016',
        padding: 24
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        gap: 12,
        marginTop: 36,
        marginBottom: 42,
    },
    participantsContainer: {
        flex: 1,
    },
    eventName: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },
    input: {
        flex: 1,
        backgroundColor: '#1F1E25',
        height: 56,
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        color: '#FFF',
    },
    buttonText: {
        fontSize: 24,
        color: '#FFF',
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        justifyContent: "center",
        alignItems: 'center'
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    },
});