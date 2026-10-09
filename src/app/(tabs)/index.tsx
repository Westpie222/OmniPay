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

const COLORS = {
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
                <View style={styles.topRow}>
                    <View style={styles.logoPill}>
                        <Image
                            source={require('../../../assets/Imagenes/logo.png')}

                            style={styles.logoImage}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.headerIcons}>
                        <Ionicons name="notifications-outline" size={28} color={COLORS.accent}/>
                        <View style={styles.iconCircle}>
                            <Text style={styles.iconCircleText}>icon</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.welcomeText}>Bienvenido</Text>
            </View>

            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.gridContainer}>
                    {SERVICIOS.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.serviceCard} activeOpacity={0.8}>
                            <Text style={styles.serviceText}>{item.nombre}</Text>
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity style={[styles.serviceCard, styles.addCard]} activeOpacity={0.8}>
                        <AntDesign name="plus" size={42} color={COLORS.white}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.editButtonContainer}>
                    <TouchableOpacity style={styles.editButton} activeOpacity={0.8}>
                        <Text style={styles.editButtonText}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        backgroundColor: COLORS.primary,
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
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoPill: {
        backgroundColor: COLORS.accent,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: 60,
        height: 30,
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    iconCircle: {
        backgroundColor: COLORS.accent,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 20,
    },
    iconCircleText: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: '600',
    },
    welcomeText: {
        fontSize: 34,
        fontWeight: '800',
        color: COLORS.accent,
        marginTop: 25,
        letterSpacing: 0.5,
    },
    content: {
        padding: 22,
        paddingBottom: 40,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 14,
    },
    serviceCard: {
        width: '30%',
        aspectRatio: 0.8,
        backgroundColor: COLORS.secondary, //
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
        backgroundColor: COLORS.primary,
    },
    serviceText: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: '500',
    },
    editButtonContainer: {
        alignItems: 'flex-end',
        marginTop: 20,
    },
    editButton: {
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 22,
        paddingVertical: 8,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    editButtonText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: '600',
    },
});