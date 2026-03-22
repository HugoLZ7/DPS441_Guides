import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert, 
         ScrollView, TouchableHighlight } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'react-id-generator';
import colors from '../utils/colors';

const Formulario = ({citas, setCitas, guardarMostrarForm, guardarCitasStorage}) => {
    
    const [cliente, guardarCliente] = useState('');
    const [personas, guardarPersonas] = useState('');
    const [seccion, guardarSeccion] = useState('No Fumadores');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    // Funciones para Fecha
    const showDatePicker = () => setDatePickerVisibility(true);
    const hideDatePicker = () => setDatePickerVisibility(false);
    const confirmarFecha = date => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };

    // Funciones para Hora
    const showTimePicker = () => setTimePickerVisibility(true);
    const hideTimePicker = () => setTimePickerVisibility(false);
    const confirmarHora = time => {
        const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
        guardarHora(time.toLocaleTimeString('es-ES', opciones));
        hideTimePicker();
    };

    // Crear nueva reserva
    const crearNuevaReserva = () => {
        if(cliente.trim() === '' || personas.trim() === '' || fecha.trim() === '' || hora.trim() === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios', [{ text: 'OK' }]);
            return;
        }

        const reserva = { 
            cliente, 
            personas, 
            seccion, 
            fecha, 
            hora, 
            id: shortid() 
        };

        const citasNuevo = [...citas, reserva];
        setCitas(citasNuevo);
        guardarCitasStorage(JSON.stringify(citasNuevo));
        guardarMostrarForm(false);
    }

    return (
        <ScrollView style={styles.formulario}>
            <View>
                <Text style={styles.label}>Nombre del Cliente:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={texto => guardarCliente(texto)}
                    placeholder="Ej. Hugo Lopez"
                />
            </View>

            <View>
                <Text style={styles.label}>Cantidad de Personas:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={texto => guardarPersonas(texto)}
                    keyboardType='numeric'
                    placeholder="Ej. 4"
                />
            </View>

            <View>
                <Text style={styles.label}>Sección de preferencia:</Text>
                <View style={styles.contenedorBotones}>
                    <TouchableHighlight 
                        onPress={() => guardarSeccion('No Fumadores')}
                        style={[styles.btnSeccion, seccion === 'No Fumadores' ? styles.btnActivo : styles.btnInactivo]}
                    >
                        <Text style={styles.textoSeccion}>No Fumadores</Text>
                    </TouchableHighlight>

                    <TouchableHighlight 
                        onPress={() => guardarSeccion('Fumadores')}
                        style={[styles.btnSeccion, seccion === 'Fumadores' ? styles.btnActivo : styles.btnInactivo]}
                    >
                        <Text style={styles.textoSeccion}>Fumadores</Text>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={styles.row}>
                <View style={{flex: 1, marginRight: 5}}>
                    <Text style={styles.label}>Fecha:</Text>
                    <Button title="Elegir Fecha" onPress={showDatePicker} color={colors.PRIMARY_COLOR} />
                    <Text style={styles.datoSeleccionado}>{fecha}</Text>
                </View>

                <View style={{flex: 1, marginLeft: 5}}>
                    <Text style={styles.label}>Hora:</Text>
                    <Button title="Elegir Hora" onPress={showTimePicker} color={colors.PRIMARY_COLOR} />
                    <Text style={styles.datoSeleccionado}>{hora}</Text>
                </View>
            </View>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={confirmarFecha}
                onCancel={hideDatePicker}
                locale='es_ES'
            />

            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={confirmarHora}
                onCancel={hideTimePicker}
                locale='es_ES'
            />

            <TouchableHighlight onPress={() => crearNuevaReserva()} style={styles.btnSubmit}>
                <Text style={styles.textoSubmit}>Confirmar Reserva</Text>
            </TouchableHighlight>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15,
    },
    input: {
        marginTop: 10,
        height: 45,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    btnSeccion: {
        flex: 1,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    btnActivo: {
        backgroundColor: colors.PRIMARY_COLOR,
    },
    btnInactivo: {
        backgroundColor: '#CCC',
    },
    textoSeccion: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        marginTop: 10
    },
    datoSeleccionado: {
        textAlign: 'center',
        marginTop: 5,
        color: '#555'
    },
    btnSubmit: {
        padding: 15,
        backgroundColor: colors.BUTTON_COLOR,
        marginVertical: 30,
        borderRadius: 10
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
});

export default Formulario;