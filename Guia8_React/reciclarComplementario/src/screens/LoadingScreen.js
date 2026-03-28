import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const messages = [
  { title: "Rechazar", desc: "Evitar productos que generan residuos innecesarios." },
  { title: "Reducir", desc: "Minimizar el consumo y el desperdicio." },
  { title: "Reutilizar", desc: "Dar una segunda vida a los objetos." },
  { title: "Reciclar", desc: "Transformar residuos en nuevos productos." },
  { title: "Recuperar", desc: "Aprovechar materiales para generar energía." }
];

export default function LoadingScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      if (index < messages.length - 1) {
        setIndex(index + 1);
      } else {
        navigation.replace('Grid5R');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.title}>{messages[index].title}</Text>
        <Text style={styles.subtitle}>{messages[index].desc}</Text>
      </Animated.View>
    </View>
  );
}