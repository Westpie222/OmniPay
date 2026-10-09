import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Platform} from "react-native";
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import React from "react";

const COLORES = {
    negro: "#253031",
    verdeOscuro: "#315659",
    azul: "#2978A0",
    arena: "#BCAB79",
    cielo: "#C6E0FF",
    grisFondo: "#D9D9D9",
    blanco: "#FFFFFF",
    grisTexto: "#A0A0A0"
};

export default function Calendario() {
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
                    <Text style={styles.titulo}>Calendario</Text>
                </View>

                <View style={styles.contenido}>
                    <View style={styles.tarjetaCalendario}>
                        <View style={styles.cabeceraCalendario}>
                            <TouchableOpacity>
                                <Ionicons name="chevron-back" size={24} color={COLORES.blanco} />
                            </TouchableOpacity>
                            <Text style={styles.textoMes}>Mayo 2026</Text>
                            <TouchableOpacity>
                                <Ionicons name="chevron-forward" size={24} color={COLORES.blanco} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cuerpoCalendario}>
                            <View style={styles.filaSemana}>
                                <Text style={styles.textoDiaSemana}>Sun</Text>
                                <Text style={styles.textoDiaSemana}>Mon</Text>
                                <Text style={styles.textoDiaSemana}>Tue</Text>
                                <Text style={styles.textoDiaSemana}>Wed</Text>
                                <Text style={styles.textoDiaSemana}>Thu</Text>
                                <Text style={styles.textoDiaSemana}>Fri</Text>
                                <Text style={styles.textoDiaSemana}>Sat</Text>
                            </View>

                            <View style={styles.filaDias}>
                                <View style={styles.celdaDia}><Text style={styles.textoDiaGris}>29</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDiaGris}>30</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>1</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>2</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>3</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>4</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>5</Text></View>
                            </View>

                            <View style={styles.filaDias}>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>6</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>7</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>8</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>9</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>10</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>11</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>12</Text></View>
                            </View>

                            <View style={styles.filaDias}>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>13</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>14</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>15</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>16</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>17</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>18</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>19</Text></View>
                            </View>

                            <View style={styles.filaDias}>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>20</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>21</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>22</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>23</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>24</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>25</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>26</Text></View>
                            </View>

                            <View style={styles.filaDias}>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>27</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>28</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>29</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>30</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDia}>31</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDiaGris}>1</Text></View>
                                <View style={styles.celdaDia}><Text style={styles.textoDiaGris}>2</Text></View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.tarjetaDetalles}>
                        <View style={styles.cabeceraDetalles}>
                            <Text style={styles.textoCabeceraDetalles}>Detalles del Día</Text>
                        </View>

                        <View style={styles.cuerpoDetalles}>
                            <View style={styles.filaAcciones}>
                                <TouchableOpacity style={styles.botonMovimiento}>
                                    <Text style={styles.textoMovimiento}>Movimiento</Text>
                                </TouchableOpacity>
                                <MaterialCommunityIcons name="credit-card-outline" size={40} color={COLORES.negro} />
                            </View>

                            <View style={styles.contenedorAgregar}>
                                <TouchableOpacity style={styles.botonAgregar}>
                                    <Ionicons name="add" size={24} color={COLORES.blanco} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORES.cielo
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

    contenido: {
        padding: 20,
    },

    tarjetaCalendario: {
        marginBottom: 25,
    },

    cabeceraCalendario: {
        backgroundColor: COLORES.verdeOscuro,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    textoMes: {
        color: COLORES.blanco,
        fontSize: 16,
        fontWeight: 'bold',
    },

    cuerpoCalendario: {
        backgroundColor: COLORES.blanco,
        borderWidth: 2,
        borderColor: COLORES.arena,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 15,
    },

    filaSemana: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },

    textoDiaSemana: {
        color: COLORES.negro,
        width: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    filaDias: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },

    celdaDia: {
        width: 30,
        alignItems: 'center',
    },

    textoDia: {
        color: COLORES.negro,
        fontSize: 15,
    },

    textoDiaGris: {
        color: COLORES.grisTexto,
        fontSize: 15,
    },

    tarjetaDetalles: {
        marginBottom: 20,
    },

    cabeceraDetalles: {
        backgroundColor: COLORES.arena,
        paddingVertical: 10,
        alignItems: 'center',
    },

    textoCabeceraDetalles: {
        color: COLORES.blanco,
        fontSize: 16,
        fontWeight: 'bold',
    },

    cuerpoDetalles: {
        backgroundColor: COLORES.verdeOscuro,
        padding: 20,
    },

    filaAcciones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    botonMovimiento: {
        backgroundColor: COLORES.arena,
        paddingVertical: 12,
        paddingHorizontal: 35,
        borderRadius: 25,
    },

    textoMovimiento: {
        color: COLORES.blanco,
        fontSize: 16,
        fontWeight: 'bold',
    },

    contenedorAgregar: {
        alignItems: 'flex-end',
    },

    botonAgregar: {
        backgroundColor: COLORES.arena,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});