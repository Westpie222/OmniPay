import {Tabs} from 'expo-router';
import {Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#BCAB79',
                headerShown: false,
                tabBarInactiveTintColor: "#BCAB79",
                headerStyle: {
                    backgroundColor: "#2978A0",
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                tabBarStyle: {
                    backgroundColor: "#2978A0",
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="transacciones"
                options={{
                    title: 'Movimientos',
                    tabBarIcon: ({color, focused}) => (
                        <AntDesign name={focused ? 'interaction' : 'retweet'} color={color} size={24}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="calendario"
                options={{
                    title: 'Calendario',
                    tabBarIcon: ({color, focused}) => (
                        <FontAwesome5 name={focused ? 'calendar-day' : 'calendar'} color={color} size={24}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="ajustes"
                options={{
                    title: 'Ajustes',
                    tabBarIcon: ({color, focused}) => (
                        <MaterialCommunityIcons name={focused ? 'wrench' : 'wrench-outline'} color={color} size={24}/>
                    ),
                }}
            />
        </Tabs>
    );
}