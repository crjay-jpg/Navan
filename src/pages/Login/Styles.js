import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Styles = StyleSheet.create({
    container: {
        marginTop:100,
        marginLeft:50,
        flex: 1, 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start',       
        backgroundColor: Colors.lighter,
         
    },
    row: {
        flexDirection: 'row',
        margin: 15,
    },
    input: {
        height: 20,
        width: 200, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginLeft: 5
    }
})
export default Styles;