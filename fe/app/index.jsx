import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter(); // Hook para navegação

  return (
    <View style={styles.container}>
      {/* logo */}
      <Image
        source={{ uri: 'https://via.placeholder.com/100x100.png?text=LOGO' }} // Substitua pelo seu logo
        style={styles.logo}
      />
      <Text style={styles.logoText}>EVOLUX</Text>

      <Text style={styles.title}>Entrar</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Digite seu email" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />
      </View>

      {/* Botão */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/getDataUser')} // Navegação
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8A00FF',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#8A00FF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
