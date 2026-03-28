import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importación de pantallas
import LoadingScreen from './src/screens/LoadingScreen';
import GridScreen from './src/screens/GridScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Loading"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2e7d32', // Color verde ecológico
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        
        {/* Pantalla de Carga */}
        <Stack.Screen 
          name="Loading" 
          component={LoadingScreen} 
          options={{ headerShown: false }}
        />

        {/* Pantalla de Cuadrícula */}
        <Stack.Screen 
          name="Grid5R" 
          component={GridScreen} 
          options={{ 
            title: 'Las 5R del Reciclaje',
            headerBackVisible: false // 👈 forma correcta moderna
          }} 
        />

        {/* Otras pantallas */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Inicio' }} 
        />

        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Detalles' }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}