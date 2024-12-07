import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Viabilidade() {
  const [responsePrompt, setResponsePrompt] = useState("");

  useEffect(() => {
    const getDataResponse = async () => {
      try {
        const response = await fetch("http://192.168.15.10:3000/ia", {
          method: "POST", // Método POST
          headers: {
            "Content-Type": "application/json", // Definindo o tipo de conteúdo
          },
          body: JSON.stringify(), // Corpo da requisição com os dados do formulário
        });


        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setResponsePrompt(json.responsePrompt);

          Alert.alert("Sucesso", "Informações enviadas com sucesso!");

        } else {
          Alert.alert("Erro", "Não foi possível enviar os dados. Tente novamente.");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Ocorreu um erro ao enviar as informações.");
      }
    }
    getDataResponse();

  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={styles.contentV}>
              <Text style={styles.titleContent}>Seu Negocio</Text>

              <Text style={styles.textContent}> {responsePrompt} </Text>
            </View>

            <Link style={styles.btnRefazer} href="/getDataUser">Refazer Captacao</Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  contentV: {
    marginTop: 40,
    marginHorizontal: 18,
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContent: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  textContent: {
    marginBottom: 10,
    fontSize: 24,
  },
  btnRefazer: {
    backgroundColor: '#7024BC',
    fontSize: 24,
    padding: 10,
    borderRadius: 10,
    marginTop: 60,
    width: '100%',
    color: '#fff',
    textAlign: 'center'
  }
})