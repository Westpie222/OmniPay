import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function Ajustes() {
    return (
        <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
            <TouchableOpacity style={styles.card}>  
                <View style={styles.iconContainer}>
                    <Text>
                        ICON
                    </Text>
                </View>
                <View style ={styles.textContainer}>
                    <Text>
                        PERFIL
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>  
                <View style={styles.iconContainer}>
                    <Text>
                        ICON
                    </Text>
                </View>
                <View>
                    <Text>
                        MÉTODO DE PAGO
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>  
                <View style={styles.iconContainer}>
                    <Text>
                        ICON
                    </Text>
                </View>
                <View>
                    <Text>
                        SEGURIDAD Y PRIVACIDAD
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>  
                <View style={styles.iconContainer}>
                    <Text>
                        ICON
                    </Text>
                </View>
                <View>
                    <Text>
                        SOPORTE
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>  
                <View style={styles.iconContainer}>
                    <Text>
                        ICON
                    </Text>
                </View>
                <View>
                    <Text>
                        CERRAR SESIÓN
                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c6e0ff",
    },
    body: {
        flex: 1,
    },
    bodyContent: {
        paddingVertical: 25,
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#8c8585',
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 20,
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
    },
    iconContainer: {
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
