import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation';
import Styles from './Styles';

const Login = ({navigation}) => { 
  const responsavel = false
  function Responsavel() {
    if (responsavel == false){
      return navigation.navigate('Motorista')
    }else{
      return navigation.navigate('Paasageiro')
    }
  }
  const [value, setName] = React.useState('');
  const [valor, setPass] = React.useState('');
  return (
      <View style={Styles.container}>
        <View style={Styles.row}>
          <Text>Email:</Text>
          <TextInput 
          autoFocus 
          maxLength={60} 
          placeholder='Insira seu email'
          style={Styles.input}
          onChangeText={text => setName(text)}
          value={value}
          />
        </View>
        <View style={Styles.row}>
          <Text>Senha:</Text>
          <TextInput 
          textContentType='password' 
          secureTextEntry={true}
          style={Styles.input}
          onChangeText={text=> setPass(text)}
          value={valor}
          />
        </View>
        <Text>Entrar como:</Text>
        <View style={Styles.row}>
          <Text style={{marginBottom: -20,marginTop: 5}}>Motorista </Text>                
          <Checkbox 
            status={'checked'}
          />
          <Text style={{marginBottom: -20,marginTop: 5}}>Passageiro </Text>                
          <Checkbox 
            status={'unchecked'}
            onPress={() => responsavel = true}
          />
        </View>
        <Button  title="Entrar" onPress={() => Responsavel()} />                      
      </View>
  );
}; 

export default Login;
