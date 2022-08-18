import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, CheckBox , Input } from 'react-native-elements'

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ text: 'Lista', style: { color: '#fff' } }}
      />
      <Input
        placeholder= 'Agregar item'
        leftIcon={
          <Icon
            name='plus'
            size={24}
            color='black'
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
