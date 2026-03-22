import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, 
         FlatList, Platform, Keyboard } from "react-native";
import Cita from "./src/components/Cita";
import Formulario from "./src/components/Formulario";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "./src/utils/colors";

const App = () => {
    const [mostrarForm, guardarMostrarForm] = useState(false);
    const [citas, setCitas] = useState([]);

    // Cargar datos de AsyncStorage al iniciar
    useEffect(() => {
        const obtenerCitasStorage = async () => {
            try {
                const citasStorage = await AsyncStorage.getItem("citas");
                if (citasStorage) {
                    setCitas(JSON.parse(citasStorage));
                }
            } catch (error) {
                console.log(error);
            }
        };
        obtenerCitasStorage();
    }, []);

    // Eliminar una reserva
    const eliminarPaciente = id => {
        const citasFiltradas = citas.filter(cita => cita.id !== id);
        setCitas(citasFiltradas);
        guardarCitasStorage(JSON.stringify(citasFiltradas));
    };

    // Alternar visibilidad del formulario
    const mostrarFormulario = () => {
        guardarMostrarForm(!mostrarForm);
    };

    // Persistencia de datos
    const guardarCitasStorage = async (citasJSON) => {
        try {
            await AsyncStorage.setItem("citas", citasJSON);
        } catch (error) {
            console.log(error);
        }
    };

    const cerrarTeclado = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Reservas Restaurante</Text>

                <View>
                    <TouchableHighlight 
                        onPress={() => mostrarFormulario()} 
                        style={styles.btnMostrarForm}
                        underlayColor={colors.PRIMARY_COLOR}
                    >
                        <Text style={styles.textoMostrarForm}>
                            {mostrarForm ? "Ver Reservas" : "Nueva Reserva"}
                        </Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.contenido}>
                    {mostrarForm ? (
                        <>
                            <Text style={styles.subtitulo}>Registrar Nueva Reserva</Text>
                            <Formulario 
                                citas={citas}
                                setCitas={setCitas}
                                guardarMostrarForm={guardarMostrarForm}
                                guardarCitasStorage={guardarCitasStorage}
                            />
                        </>
                    ) : (
                        <>
                            <Text style={styles.subtitulo}>
                                {citas.length > 0 ? "Próximas Reservas" : "No hay reservas pendientes"}
                            </Text>

                            <FlatList 
                                style={styles.listado}
                                data={citas}
                                renderItem={({item}) => (
                                    <Cita item={item} eliminarPaciente={eliminarPaciente} />
                                )}
                                keyExtractor={cita => cita.id.toString()}
                            />
                        </>
                    )}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: colors.PRIMARY_COLOR,
        flex: 1
    },
    titulo: {
        color: "#FFF",
        marginTop: Platform.OS === "ios" ? 60 : 40,
        marginBottom: 10,
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtitulo: {
        color: "#FFF",
        marginBottom: 20,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    contenido: {
        flex: 1,
        marginHorizontal: "2.5%"
    },
    listado: {
        flex: 1
    },
    btnMostrarForm: {
        padding: 12,
        backgroundColor: colors.BUTTON_COLOR,
        marginVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8
    },
    textoMostrarForm: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16
    }
});

export default App;