import * as React from 'react';
import {View,Text} from 'react-native';
import Styles from './Styles';
import { Avatar } from 'react-native-paper';

const Motorista = () => {
    return(
        <View>
            <View>
                <Text style={Styles.titulo}>Alunos que irão à escola hoje: </Text>
            </View>

            <View style={Styles.container}>

                iconPass

                <View style={Styles.componente}>
                    <Avatar.Image style={Styles.icone} size={150} source={require('../../assets/imagens/renan.png')} />
                    <Text >Renan de Luca</Text>
                </View>
                <View style={Styles.componente}>
                    <Avatar.Image style={Styles.icone} size={150} source={require('../../assets/imagens/gabriel.png')} />
                    <Text >Gabriel</Text>
                </View>
                <View style={Styles.componente}>
                    <Avatar.Image style={Styles.icone} size={150} source={require('../../assets/imagens/robson.png')} />
                    <Text >Robson</Text>
                </View>
                <View style={Styles.componente}>
                    <Avatar.Image style={Styles.icone} size={150} source={require('../../assets/imagens/caique.png')} />                                    
                    <Text >Caique</Text>
                </View>

            </View>




        </View>
    )
}

export default Motorista;