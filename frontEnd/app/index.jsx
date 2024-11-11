import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App test</Text>
      <Link href="/profile">Go to profile</Link>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});
