import React from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Card } from "@rneui/themed"; 


const DATA = [
  {
    id: "1",
    title: "Pupusas Revueltas",
    calorias: "350 kcal por unidad",
    src: require("./assets/pupusas.jpg"), 
  },
  {
    id: "2",
    title: "Tamales de Pollo",
    calorias: "250 kcal por unidad",
    src: require("./assets/tamales.jpg"), 
  },
  {
    id: "3",
    title: "Yuca Frita",
    calorias: "450 kcal por porción",
    src: require("./assets/yuca.png"),   
  },
];


const Item = ({ title, calorias, img }) => (
  <Card containerStyle={styles.card}>
    <Card.Title style={styles.cardTitle}>{title}</Card.Title>
    <Card.Divider />
    <Image source={img} style={styles.image} resizeMode="cover" />
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Contenido calórico:</Text>
      <Text style={styles.calorias}>{calorias}</Text>
    </View>
  </Card>
);


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Gastronomía Salvadoreña</Text>
        </View>

        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Item title={item.title} calorias={item.calorias} img={item.src} />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  header: {
    backgroundColor: "#FFF",
    paddingVertical: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    textAlign: "left",
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 8,
  },
  infoContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#6B7280",
    fontSize: 14,
  },
  calorias: {
    fontWeight: "bold",
    color: "#EF4444",
    fontSize: 14,
  },
});