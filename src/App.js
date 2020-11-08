import * as React from 'react';
import {Image, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Motorista from './pages/Motorista';
import Home from './pages/Home';
import Login from './pages/Login';
import Styles from './Styles';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={Styles.header}>
    
    <Image
      style={Styles.imagem}
      source={require('./assets/imagens/van.png')}
    />
    <Text style={Styles.titulo}>Navan</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F3F3F3',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Motorista" component={Motorista} options={{ title: 'Motorista' }} />
        <Stack.Screen name="Passageiro" component={Passageiro} options={{ title: 'Passageiro'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;