import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight , TouchableOpacity, Pressable} from 'react-native';

import icon from './assets/icon.png';
// const icon = require('./assets/icon.png');//Se puede utilizar este o el import

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> no visualiza la hora del dispositivo */}
      <StatusBar style="light" />
      {/* <Image source={icon} style ={{ width:100, height: 100, resizeMode: 'center' }}/> */}
      <Image source={{uri:"https://images.ecestaticos.com/ym2qDY2DcYGfE-XrYC4F4XWKSiI=/0x0:1600x900/592x333/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc24%2F541%2F71d%2Fc2454171d0b79b7cee8e69b1d2dd1700.jpg"}} style ={{ width:200, height: 300 }}/>
      <Text style={{ color: 'white'}}>Aquí tenemos nuestra app!</Text>
      <Button title="Presiona aquí" onPress={() => alert('Hola, presionaste el boton Nativo!')} />
      <TouchableHighlight
        underlayColor="#09F"
        onPress={() => alert('Press a customized button!')}
        style={{ width:100, height: 100, backgroundColor: 'red', borderRadius: 100,
          justifyContent: 'center', alignContent: 'center'
        }}        
      > 
      <Text style={{ color: 'white'}}>TOUCH ME!</Text> 
      </TouchableHighlight>
      <TouchableOpacity
        onPress={() => alert('Press a customized button with opacity!')}
        style={{ width:100, height: 100, backgroundColor: 'red', borderRadius: 100,
          justifyContent: 'center', alignContent: 'center'
        }}        
      > 
      <Text style={{ color: 'white'}}>TOUCH ME OPACITY!</Text> 
      </TouchableOpacity>
      <Pressable
          onPress={() => {
            
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={{fontSize: pressed ? 32 : 16}}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
