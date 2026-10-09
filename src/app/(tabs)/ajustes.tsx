import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Platform} from "react-native";
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import React from "react";

const COLORES = {
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
                                source={require("../../../assets/Imagenes/logo.png")}
                                style={styles.logoImagen}
                                resizeMode="contain"
                            />
                        </View>

                        <View style={styles.iconosHeader}>
                            <Ionicons name="notifications" size={30} color={COLORES.arena}/>
                            <View style={styles.usuarioIcono}>
                                <Ionicons name="person" size={15} color={COLORES.cielo}/>
                            </View>
                        </View>
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
        backgroundColor: COLORES.azul,
        paddingHorizontal: 22,
        paddingTop: Platform.OS === 'android' ? 45 : 20,
        paddingBottom: 25,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
        zIndex: 10,
    },

    parteArriba: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    logo: {
        backgroundColor: COLORES.arena,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoImagen: {
        width: 60,
        height: 30,
    },
    iconosHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    usuarioIcono: {
        backgroundColor: COLORES.arena,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 20,
    },

    titulo: {
        fontSize: 34,
        fontWeight: "800",
        marginTop: 25,
        color: COLORES.arena,
        letterSpacing: 0.5,
    },

    menu: {
        alignItems: "center",
        marginTop: 15,
        borderColor: '#253031',
    },

    boton: {
        width: "65%",
        height: 80,
        borderWidth: 3,
        borderRadius: 8,
        borderColor: COLORES.verdeOscuro,
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
