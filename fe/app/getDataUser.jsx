import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Form = () => {
  const [formData, setFormData] = useState({
    segmento: "",
    produto: "",
    desafios: "",
    tempoDeVida: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Estado para o Activity Indicator
  const navigation = useNavigation();

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    const { segmento, produto, desafios, tempoDeVida } = formData;

    if (!segmento || !produto || !desafios || !tempoDeVida) {
      Alert.alert("Erro", "Todos os campos são obrigatórios!");
      return;
    }

    setIsLoading(true); 

    try {
      
      setTimeout(() => {
        setIsLoading(false); 
        navigation.navigate("viabilidade"); 
      }, 10000); 
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Erro", "Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Precisamos te conhecer melhor</Text>
      <Text style={styles.subtitle}>Insira as informações da sua empresa</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Segmento de mercado (ex: transporte, alimentação)"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={formData.segmento}
          onChangeText={(value) => handleChange("segmento", value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Seu produto ou serviço"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={formData.produto}
          onChangeText={(value) => handleChange("produto", value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Seus maiores desafios"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={formData.desafios}
          onChangeText={(value) => handleChange("desafios", value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Tempo de vida da sua empresa"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={formData.tempoDeVida}
          onChangeText={(value) => handleChange("tempoDeVida", value)}
        />
      </View>

      {/* Botão */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#6200ee" style={{ marginTop: 20 }} />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar informações</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4a4a4a",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#7a7a7a",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#6200ee",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Form;
