import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Definir el array de imágenes
const images = [
  {
    id: 1,
    source: 'https://img.freepik.com/vector-gratis/seminario-web-conceptoecologia-diseno-plano_23-2149849805.jpg',
    description: 'Reduce, Reutiliza, Recicla',
    info: 'Descubre cómo puedes contribuir al cuidado del medio ambiente con simples acciones en tu hogar.'
  },
  {
    id: 2,
    source: 'https://img.freepik.com/vector-gratis/ninos-plantando-arbolesutilizando-energia-renovable-natural_23-2149849801.jpg',
    description: 'Reciclaje en tu Comunidad',
    info: 'Conoce programas de reciclaje en tu área y participa activamente para mejorar tu entorno.'
  }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bannerTitle}>¡Bienvenido a Reciclaje Eco!</Text>
        <Text style={styles.bannerText}>
          Ayudamos a cuidar el medio ambiente a través del reciclaje. ¡Únete a nosotros!
        </Text>
        <Button
          title="Ir a Detalles"
          onPress={() => navigation.navigate('Details')}
        />
      </View>

      <View style={styles.featured}>
        <Text style={styles.featuredTitle}>Destacado</Text>
        {images.map(image => (
          <TouchableOpacity key={image.id} style={styles.featuredItem}>
            <Image source={{ uri: image.source }} style={styles.featuredImage} />
            <Text style={styles.featuredItemTitle}>{image.description}</Text>
            <Text style={styles.featuredItemText}>{image.info}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    padding: 20,
    backgroundColor: '#C8EF25', // Verde para el encabezado
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Texto negro
  },
  bannerText: {
    fontSize: 16,
    color: '#000000', // Texto negro
  },
  bannerButton: {
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#000000',
  },
  featured: {
    padding: 20,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredItem: {
    marginBottom: 20,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  featuredItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featuredItemText: {
    fontSize: 16,
  }
});