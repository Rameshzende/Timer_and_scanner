import React from 'react';
import {SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    TouchableOpacity,
    Platform,
    Linking,
    TextInput,
    Alert,
    TouchableHighlight} from 'react-native';

    import jsonDate from '../Data.json';



// const ListButton = (props) => {
//   return (
//    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress = { props.onPress }>
//         <Text style={styles.loginText} >{props.title}</Text>
//      </TouchableHighlight>
//   )
// }

export const DynamicLoading = ( {navigation} ) => {
    
    // toggle = (props) => {
    //   debugger
    // }    
    AudioPlayer = () => {
        navigation.navigate('Audio');
    }

    barcodeOpen = () => {
        navigation.navigate('barcode');
    }
return(
<View style={styles.container}>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress = {this.barcodeOpen}>
          <Text style={styles.loginText}>bar-code scanner</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress = {this.AudioPlayer} >
          <Text style={styles.loginText}>player</Text>
        </TouchableHighlight>
</View>
  )
}


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
     }
    });
// export const  SignIn = ({ navigation }) => {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('Detaildds')}
//         />

//       </View>
//     );
//   }

// export const DynamicLoading = () => {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }

// export  class Homescreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//               <Text>Home Screen</Text>
//               <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Detaildds')}
//               />
      
//             </View>
//           );
//     }
// } 

// export  class DynamicLoading extends React.Component {
//     render() {
//       return (
//           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//          </View>
//      );
//   }
// }