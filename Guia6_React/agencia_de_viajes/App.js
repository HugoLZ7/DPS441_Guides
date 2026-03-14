import React from "react";
import { StyleSheet, View, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from "react-native";

const App = () => {
  const [modalVisiblePlaya, setModalVisiblePlaya] = React.useState(false);
  const [modalVisibleLago, setModalVisibleLago] = React.useState(false);
  return (
    <>
      <ScrollView>
        <Modal transparent={true} animationType="slide" visible={modalVisiblePlaya} onRequestClose={()=>{
          alert("Modal has been closed");
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Ir  la playa</Text>
              <Text>El salvador es conocido por sus hermosas playas a nivel d CA</Text>
              <Button title="Cerrar" onPress={() =>{setModalVisiblePlaya(!modalVisiblePlaya);}}/>
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleLago} onRequestClose={()=>{
          alert("Modal has been closed");
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Ir al Lago de coatepque</Text>
              <Text>El salvador es conocido por sus lagos gigantes a nivel de CA</Text>
              <Button title="Cerrar" onPress={() =>{setModalVisibleLago(!modalVisibleLago);}}/>
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: "row" }}>
          <Image style={styles.banner} source={require("./src/img/bg.jpg")} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={()=>{setModalVisiblePlaya(!modalVisiblePlaya);}}>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad1.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight onPress={()=>{setModalVisibleLago(!modalVisibleLago);}}>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad2.jpg")}
              />
              </TouchableHighlight>
            </View>

            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad3.jpg")}
              />
            </View>

            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad4.jpg")}
              />
            </View>

            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad5.jpg")}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Platillos Salvadoreños</Text>
          <View>
            <Image
              style={styles.mejores}
              source={require("./src/img/mejores1.jpg")}
            />
          </View>

          <View>
            <Image
              style={styles.mejores}
              source={require("./src/img/mejores2.jpg")}
            />
          </View>

          <View>
            <Image
              style={styles.mejores}
              source={require("./src/img/mejores3.jpg")}
            />
          </View>

          <Text style={styles.titulo}>Rutas Turisticas</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/img/ruta1.jpg")}
              />
            </View>
             <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/img/ruta2.jpg")}
              />
            </View>
             <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/img/ruta3.jpg")}
              />
            </View>
             <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/img/ruta4.jpg")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
  listaItem:{
    flexBasis: "49%"
  },
  listado:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  titulo:{
    fontWeight: "bold",
    fontSize: 24,
    marginVertical:10,
  },
  vistaModal:{
    backgroundColor: "#000000aa",
    flex:1,
  },
  modal:{
    backgroundColor: "#fff",
    margin: 50,
    padding:40,
    borderRadius:10,
    flex:1,
  },
  subtitulo:{
    fontWeight: "bold",
    fontSize: 14,
    justifyContent: "center",
  },
});

export default App;
