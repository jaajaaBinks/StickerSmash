import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home'}} />
      <Tabs.Screen name="about" options={{ title: 'About'}} />
    </Tabs>
  );
}
  