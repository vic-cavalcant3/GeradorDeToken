import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";
import { ModalTokens } from '../components/modal';
import Slider from "@react-native-community/slider";
import { useState } from "react";

export function Home() {
  const [qtde, defineQtde] = useState(6);
  const [telaModal, configTelaModal]=useState(false)
  const [tokenValue, configTokenValue] = useState("")

  let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  function gerarToken() {
    let token = ""
    // for(Inicio,condição,incremento){}
    for (let i = 0, n = caracteres.length; i < qtde; i++) {
        token += caracteres.charAt(Math.floor(Math.random() * n))
    }
    configTokenValue(token);
    configTelaModal(true);
}


  return (
    <View style={ESTILO.container}>
      <Image source={require("../assets/logo.png")} style={ESTILO.logo} />

      <Text style={ESTILO.caracteres}>{qtde} Caracteres</Text>

      <View style={ESTILO.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#71502F"
          maximumTrackTintColor="#71502F"
          thumbTintColor="#304E40"
          value={qtde}
          onValueChange={(value) => defineQtde(Math.floor(value))}
        />
      </View>

      <TouchableOpacity style={ESTILO.button} onPress={gerarToken}>
       <Text style={ESTILO.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={telaModal} animationType="fade" transparent={true}>
      <ModalTokens token={tokenValue} fechar={() => configTelaModal(false)} />        
      </Modal>

    </View>
  );
}


const ESTILO = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: "#f3f3ff",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    marginBottom: 60,
  },

  area: {
    marginBottom: 14,
    marginTop: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },

  button: {
    backgroundColor: "#304E40",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  buttonText: {
    fontSize:18,
    color: "#FFF",
  },

  caracteres: {
    fontSize: 20,
    fontWeight:"500",
  },
});
