import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#0B0F2A" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Planetas" component={HomeScreen} />
        <Stack.Screen name="Detalle" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}