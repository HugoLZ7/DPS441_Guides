import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

const data5R = [
  {
    id: "1",
    title: "Rechazar",
    icon: "🚫",
    info: "Dile no a los plásticos de un solo uso.",
  },
  {
    id: "2",
    title: "Reducir",
    icon: "📉",
    info: "Compra solo lo que realmente necesitas.",
  },
  {
    id: "3",
    title: "Reutilizar",
    icon: "♻️",
    info: "Repara antes de desechar algo.",
  },
  {
    id: "4",
    title: "Reciclar",
    icon: "📦",
    info: "Separa tus residuos por categorías.",
  },
  {
    id: "5",
    title: "Recuperar",
    icon: "🔋",
    info: "Procesos para generar energía limpia.",
  },
];

export default function GridScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openDetails = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => openDetails(item)}>
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardText} numberOfLines={2}>
        Toca para saber más
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data5R}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedItem?.title}</Text>
            <Text style={styles.modalInfo}>{selectedItem?.info}</Text>
            <Button
              title="Cerrar"
              color="#2e7d32"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f1f8e9" },
  list: { padding: 10 },
  card: {
    flex: 1,
    margin: 10,
    height: 150,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, // Sombra
    padding: 10,
  },
  icon: { fontSize: 40 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#1b5e20" },
  cardText: { fontSize: 12, textAlign: "center" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modalTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  modalInfo: { fontSize: 16, textAlign: "center", marginBottom: 20 },
});
