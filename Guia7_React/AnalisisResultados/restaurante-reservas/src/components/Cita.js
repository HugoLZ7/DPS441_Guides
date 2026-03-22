import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const Cita = ({item, eliminarPaciente}) => {
    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Cliente:</Text>
                <Text style={styles.texto}>{item.cliente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Personas:</Text>
                <Text style={styles.texto}>{item.personas}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sección:</Text>
                <Text style={styles.texto}>{item.seccion}</Text>
            </View>
            <View>
                <Text style={styles.label}>Fecha y Hora:</Text>
                <Text style={styles.texto}>{item.fecha} - {item.hora}</Text>
            </View>

            <View>
                <TouchableHighlight 
                    onPress={ () => eliminarPaciente(item.id) } 
                    style={styles.btnEliminar}
                >
                    <Text style={styles.textoEliminar}>Eliminar Reserva &times;</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10
    },
    texto: {
        fontSize: 18
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Cita;