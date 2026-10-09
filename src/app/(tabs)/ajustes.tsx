import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const colores = {
    negro: "#253031",
    verdeOscuro: "#315659",
    azul: "#2978A0",
    arena: "#BCAB79",
    cielo: "#C6E0FF",
};

export default function Ajustes() {
    return (
         <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.parteArriba}>
                        <View style={styles.logo}>
                            <Image
                                source={require("../../../assets/images/logo.png")}
                                style={styles.logoImagen}
                            />
                        </View>

                        <Ionicons name="notifications" size={30} color={'#BCAB79'}/>
                    </View>
                    <Text style={styles.titulo}>Ajustes</Text>
                </View>

                <View style={styles.menu}>
                    <TouchableOpacity style={styles.boton}>
                        <View style={styles.icono}>
                            <MaterialCommunityIcons name="account-circle" size={45} color={'#253031'}/>
                        </View>
                        <Text style={styles.textoBoton}>Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton}>
                        <View style={styles.icono}>
                            <MaterialCommunityIcons name="credit-card-outline" size={45} color={'#253031'}/>
                        </View>
                        <Text style={styles.textoBoton}>Método de pago</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton}>
                        <View style={styles.icono}>
                            <MaterialCommunityIcons name="shield-lock-outline" size={45} color={'#253031'}/>
                        </View>
                        <Text style={styles.textoBoton}>
                            Seguridad y Privacidad
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton}>
                        <View style={styles.icono}>
                            <MaterialCommunityIcons name="headset" size={45} color={'#253031'}/>
                        </View>
                        <Text style={styles.textoBoton}>Soporte</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boton}>
                        <View style={styles.icono}>
                            <MaterialCommunityIcons name="logout" size={45} color={'#253031'}/>
                        </View>
                        <Text style={styles.textoBoton}>Cerrar sesión</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c6e0ff"
    },

    header: {
        padding: 25,
        paddingTop: 40,
        backgroundColor: '#2978A0',
    },

    parteArriba: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    logo: {
        width: 70,
        height: 70,
        backgroundColor: '#BCAB79',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoImagen: {
        width: 60,
        height: 30,
        resizeMode: "contain",
    },

    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 15,
        color: '#BCAB79',
    },

    menu: {
        alignItems: "center",
        marginTop: 15,
        borderColor:'#253031',
    },

    boton: {
        width: "65%",
        height: 80,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 30,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },

    icono: {
        width: 60,
        alignItems: "center",
    },

    textoBoton: {
        flex: 1,
        fontSize: 19,
        fontWeight: "bold",
        textAlign: "center",
        color: '#253031',
    },

});
