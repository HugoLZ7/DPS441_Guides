import React from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

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
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.separator} />

    <Image source={img} style={styles.image} resizeMode="cover" />

    <View style={styles.infoContainer}>
      <Text style={styles.caloriasLabel}>Contenido calórico:</Text>
      <Text style={styles.caloriasValue}>{calorias}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Comidas Típicas ES</Text>
        </View>

        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
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
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },
  list: {
    paddingVertical: 10,
  },

  item: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#1F2937",
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  caloriasLabel: {
    fontSize: 14,
    color: "#6B7280",
  },
  caloriasValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#EF4444",
  },
});
