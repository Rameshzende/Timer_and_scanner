import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform,
  Linking,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  FlatList,

} from 'react-native';

import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import jsonDate from './Data.json';
import { ScreenContainer } from 'react-native-screens';
import { SignIn, PlayAudio, BarcodeOpen } from './component/LoginScreen';

import {activity as activityName} from './Data.json';
import { DynamicLoading } from './component/DynamicScreen';
import { RNCamera } from 'react-native-camera';

import QRCodeScanner from 'react-native-qrcode-scanner';



const Stack = createStackNavigator();

//Creating the Dynamic buttons 
// const ListButton = (props) => {
//   return (
//      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>
//         <Text style={styles.loginText} >{props.title}</Text>
//      </TouchableHighlight>
//   )
// }
//class App extends React.Component {

// onSuccess = e => {
//     Linking.openURL(e.data).catch(err =>
//       console.error('An error occured', err)
//     );
//   };
//   render() {
//       return (
//         <QRCodeScanner
//           onRead={this.onSuccess}
//           flashMode={RNCamera.Constants.FlashMode.torch}
//           topContent={
//             <Text style={styles.centerText}>
//               Go to{' '}
//               <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
//               your computer and scan the QR code.
//             </Text>
//           }
//           bottomContent={
//             <TouchableOpacity style={styles.buttonTouchable}>
//               <Text style={styles.buttonText}>OK. Got it!</Text>
//             </TouchableOpacity>
//           }
//         />
//       );
//   }
// }

//NAvigation in React Native 

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SignIn} options={{title: ' Sign In '}} />
        <Stack.Screen name="Detaildds" component={DynamicLoading} options = {{title : ' Button Screen '}}/>
        <Stack.Screen name="Audio" component={PlayAudio} options = {{ title : 'Audio Player '}} />
        <Stack.Screen name="barcode" component={BarcodeOpen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  
  PlayText : {
     fontWeight: 'bold',
  },
  
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC'
   }, 
   barcodeView : {
     marginTop: 30,
     width: 360,
     height: 50,
     backgroundColor: 'white',
     textAlign: 'center',
     justifyContent: 'center',
     alignItems : 'center',
     borderBottomColor: 'red'
   },
   barcodeCss : {
     fontSize: 25,
   },
   TextBold: {
    fontWeight: '500',
    color: '#000'
   },
   TextCenter: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
   },
   buttonCss : { 
     width: 180,
     height: 40,
     backgroundColor: '#2455ab',
     textAlign: 'center',
     borderRadius: 25
   }, 
   TextAlignCss : {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 20
   },
   centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
  });