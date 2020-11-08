import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styles from './Styles';

function Home({navigation}) {
    return (        
        <View style={Styles.container}>
          <Text style={Styles.titulo}>Gerenciamento de</Text>
          <Text style={Styles.titulo}>Passageiros</Text>
          <Text style={Styles.subtitulo}>Seu filho seguro no caminho para escola!</Text>
          <Button
          color='green' 
          style={Styles.botao} 
          title="Fazer Login" 
          onPress={() => { 
            navigation.navigate('Login')}}>Fazer Login</Button>
          <TouchableOpacity>
            <Text style={Styles.entrelinhas}>Criar conta</Text>    
          </TouchableOpacity>
        </View>  
    );
  }

export default Home