import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Viabilidade() {
  return (
    <View>
      <View style={styles.contentV}>
        <Text style={styles.titleContent}>Seu Negocio</Text>

        <Text style={styles.textContent}>Tem potencial de obter ROI de 2,6. Com produto principal tendo valor de 120, e meta de 64 clientes por ano.</Text>

        <Text style={styles.textContent}>Seu Nicho apresenta taxa de xx% de lucro apos investir em marketing.</Text>
      </View>

      <Link style={styles.btnRefazer} href="/">Refazer Captacao</Link>
    </View>
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