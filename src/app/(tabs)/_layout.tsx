import {Tabs} from 'expo-router';
import {Ionicons} from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#2978A0",
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
                name="calendario"
                options={{
                    title: 'Calendario'
                }}
            />
            <Tabs.Screen name="ajustes" options={{title: 'Ajustes'}}/>
            <Tabs.Screen name="transacciones" options={{title: 'Movimientos'}}/>
        </Tabs>
    );
}