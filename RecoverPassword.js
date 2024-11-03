import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

/* import { TouchableOpacity } from "react-native-gesture-handler"; */

const RecoverPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  /* const [loading, setLoading] = useState(false); */// crear un componente para el momento de carga

  const onsubmit = () => {
    if (!validateData) {
      return;
    }
    console.log("esta correcto!");
  };

  const validateData = () => {
    setErrorEmail("");
    let valid = true;

    if (!validateData(email)) {
      setErrorEmail("Ingresa un email válido.");
      valid = false;
    }

    return valid;
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.inputForm}
        placeholder="Ingresa tu email"
        onChange={(e) => setEmail(e)}
        defaultValue={email}
        errorMassage={errorEmail}
        keyboardType={"email-address"}
        returnKeyType="send"
      ></TextInput>
      <TouchableOpacity
        style={styles.buttonForm}
      
        onPress={onsubmit}
      ><Text style={styles.buttonText}>Recuperar contraseña</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#FAFAFA', // Fondo claro
    },
    inputForm: {
      height: 50, // Más alto
      width: '100%', // Ancho completo
      borderColor: '#CCCCCC', // Gris claro
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 15,
      borderRadius: 10, // Bordes redondeados
      backgroundColor: '#FFFFFF', // Blanco
      fontSize: 16,
    },
    buttonForm: {
      backgroundColor: '#228B22', // Verde más oscuro
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 10, // Bordes más redondeados
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    errorMessage: {
      color: '#FF0000', // Rojo para los mensajes de error
      marginBottom: 20,
      fontSize: 14,
    },
  });
  
  export default RecoverPassword;
  
