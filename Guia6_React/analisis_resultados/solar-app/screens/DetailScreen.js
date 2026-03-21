import { View, Text, Image, StyleSheet } from "react-native";

export default function DetailScreen({ route }) {
  const { planet } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: planet.image }} style={styles.image} />
      <Text style={styles.title}>{planet.name}</Text>

      <Text style={styles.text}>{planet.description}</Text>

      <Text style={styles.info}>🌍 Tamaño: {planet.size}</Text>
      <Text style={styles.info}>☀️ Distancia: {planet.distance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F2A",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginVertical: 10,
  },
  text: {
    color: "#ccc",
    textAlign: "center",
    marginBottom: 15,
  },
  info: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
});
