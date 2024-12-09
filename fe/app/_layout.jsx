import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false, // Esconder o cabeçalho para a tela 'index'
        }}
      />
      <Stack.Screen
        name="getDataUser"
        options={{
          headerTitle: '',
          headerBackTitleVisible: false, 
        }}
      />
      <Stack.Screen
        name="viabilidade"
        options={{
          headerTitle: '', 
          headerBackTitleVisible: false, 
        }}
      />
    </Stack>
  );
};

export default Layout;
