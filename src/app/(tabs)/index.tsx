import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Platform,
    Image
} from 'react-native';
import {Ionicons, AntDesign} from '@expo/vector-icons';

const COLORES = {
    primary: '#2978A0',
    secondary: '#315659',
    accent: '#BCAB79',
    background: '#C6E0FF',
    white: '#FFFFFF',
};

const SERVICIOS = [
    {id: '1', nombre: 'Servicio'},
    {id: '2', nombre: 'Servicio'},
    {id: '3', nombre: 'Servicio'},
    {id: '4', nombre: 'Servicio'},
    {id: '5', nombre: 'Servicio'},
];

export default function InicioScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.parteArriba}>
                    <View style={styles.logo}>
                        <Image
                            source={require('../../../assets/Imagenes/logo.png')}
                            style={styles.logoImagen}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.iconosHeader}>
                        <Ionicons name="notifications" size={30} color={COLORES.accent}/>
                        <View style={styles.usuarioIcono}>
                            <Ionicons name="person" size={15} color={COLORES.background}/>
                        </View>
                    </View>
                </View>

                <Text style={styles.textoBienvenida}>Bienvenido</Text>
            </View>

            <ScrollView
                contentContainerStyle={styles.contenido}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.gridContenedor}>
                    {SERVICIOS.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.servicioCard} activeOpacity={0.8}>
                            <Text style={styles.textoServicio}>{item.nombre}</Text>
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity style={[styles.servicioCard, styles.addCard]} activeOpacity={0.8}>
                        <AntDesign name="plus" size={42} color={COLORES.white}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.botonEditContenedor}>
                    <TouchableOpacity style={styles.botonEdit} activeOpacity={0.8}>
                        <Text style={styles.botonEditTexto}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORES.background,
    },
    header: {
        backgroundColor: COLORES.primary,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        backgroundColor: COLORES.accent,
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
        backgroundColor: COLORES.accent,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 20,
    },
    iconCircleText: {
        color: COLORES.white,
        fontSize: 13,
        fontWeight: '600',
    },
    textoBienvenida: {
        fontSize: 34,
        fontWeight: '800',
        color: COLORES.accent,
        marginTop: 25,
        letterSpacing: 0.5,
    },
    contenido: {
        padding: 22,
        paddingBottom: 40,
    },
    gridContenedor: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 14,
    },
    servicioCard: {
        width: '30%',
        aspectRatio: 0.8,
        backgroundColor: COLORES.secondary, //
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    addCard: {
        backgroundColor: COLORES.primary,
    },
    textoServicio: {
        color: COLORES.white,
        fontSize: 15,
        fontWeight: '500',
    },
    botonEditContenedor: {
        alignItems: 'flex-end',
        marginTop: 20,
    },
    botonEdit: {
        backgroundColor: COLORES.secondary,
        paddingHorizontal: 22,
        paddingVertical: 8,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    botonEditTexto: {
        color: COLORES.white,
        fontSize: 14,
        fontWeight: '600',
    },
});