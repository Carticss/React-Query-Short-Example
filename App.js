import { StyleSheet, Text, View } from 'react-native';
import Character from './src/components/Character';
import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient()

export default function App() {
  return (
    <View>
      <QueryClientProvider client={queryClient}>
        <Character />
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
