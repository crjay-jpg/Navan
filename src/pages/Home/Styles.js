import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Styles = StyleSheet.create({
    container: {
         flex: 1, 
         alignItems: 'center',  
         justifyContent: 'center',       
         backgroundColor: Colors.lighter,        
    },
    titulo: {
        fontSize: 25,                        
    },
    subtitulo: {
        fontSize: 15,
        opacity: 0.5,
        margin: 15,
    },
    entrelinhas:{
        fontSize: 10,
        marginTop: 5,
        color: '#039'        
    }
});
export default Styles;