import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Link style={styles.btn_change_page} href="/main">Go to Viabilidade</Link>*/}
      <Link style={styles.btn_change_page} href="/getDataUser">Inserir meus dados</Link>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  btn_change_page: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});
