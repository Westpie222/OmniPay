import {Ionicons} from "@expo/vector-icons";
import {StatusBar, StyleSheet, Text, View, Image, Platform} from "react-native";

const COLORES = {
    negro: "#253031",
    verdeOscuro: "#315659",
    azul: "#2978A0",
    arena: "#BCAB79",
    cielo: "#C6E0FF",
};
export default function Transacciones() {
    return (
        <View style={styles.container}>
            <StatusBar hidden/>

            <View style={styles.header}>
                <View style={styles.parteArriba}>
                    <View style={styles.logo}>
                        <Image style={styles.logoImagen}
                               source={require("../../../assets/Imagenes/logo.png")}
                               resizeMode="contain"
                        />
                    </View>

                    <View style={styles.iconosHeader}>
                        <Ionicons name="notifications" size={30} color={COLORES.arena} />
                        <View style={styles.usuarioIcono}>
                            <Ionicons name="person" size={15} color={COLORES.cielo} />
                        </View>
                    </View>
                </View>

                <Text style={styles.title}>Movimientos</Text>
            </View>

            <View style={styles.botonesPagos}>
                <View style={styles.botonPago}>
                    <Text style={styles.whiteText}>
                        Pagos realizados
                    </Text>
                </View>

                <View style={styles.botonPago}>
                    <Text style={styles.whiteText}>
                        Pagos pendientes
                    </Text>
                </View>
            </View>

            <View style={styles.searchRow}>
                <View style={styles.search}>
                    <Text style={styles.searchText}>Buscar</Text>
                </View>

                <View style={styles.filter}>
                    <Text style={styles.whiteText}>Filtrar</Text>
                </View>
            </View>

            <View style={styles.columnas}>
                <View style={styles.columna}>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                </View>

                <View style={styles.columna}>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                    <Text style={styles.estrella}>★</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORES.cielo,
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

    logoImagen: {
        width: 60,
        height: 30,
    },

    logo: {
        backgroundColor: COLORES.arena,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
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
    profile: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#c5b47c",
        alignItems: "center",
        justifyContent: "center",
    },

    whiteText: {
        color: "#fff",
        fontSize: 10,
    },

    title: {
        fontSize: 34,
        fontWeight: "800",
        marginTop: 25,
        color: COLORES.arena,
        letterSpacing: 0.5,
    },

    botonesPagos: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingTop: 8,
        gap: 10,
    },

    botonPago: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#c5b47c",
        justifyContent: "center",
        alignItems: "center",
    },

    searchRow: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        marginTop: 15,
        gap: 36,
    },

    search: {
        flex: 1,
        height: 20,
        borderRadius: 15,
        backgroundColor: "#287b9e",
        justifyContent: "center",
    },
    searchText: {
        fontSize: 10,
        textAlign: "center",
        color: "#173d4b",
    },
    filter: {
        width: 50,
        height: 20,
        borderRadius: 20,
        backgroundColor: "#c5b47c",
        alignItems: "center",
        justifyContent: "center",
    },
    columnas: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 23,
        paddingHorizontal: 18,
        paddingTop: 20,
        paddingBottom: 16,
    },
    columna: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 6,
        alignItems: "flex-start",
        paddingLeft: 10,
        paddingTop: 6,
    },
    estrella: {
        color: "#c5b47c",
        fontSize: 20,
        height: 23,
        lineHeight: 23,
    },
});