import React, { useState, useEffect } from 'react';
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

    var Sound = require('react-native-sound');

    import QRCodeScanner from 'react-native-qrcode-scanner';

    let playSound = new Sound('mp3', Sound.MAIN_BUNDLE , (error) => {
        if(error){
             console.log('error occured')
           } else (
             console.log('played successfully')
        )
    })

export const  SignIn = ({ navigation }) => {
    
    const [pass, setPass] = useState({
        email: '',
        password: ''
    })

    //sing in function 
    loginSignIn = (props) => {
       if(pass.email != pass.password ) {
           Alert.alert("Alert", "Username and password should be same for login");
       }
       else {
        navigation.push('Detaildds');
       }
    }
    
    return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="UserName"
              secureTextEntry={true}
              onChangeText = { email =>  setPass({ ...pass, email: email}) }
             />
        </View>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
             placeholder="Password"
             secureTextEntry={true}
             onChangeText = { password =>  setPass({ ...pass, password : password }) }
        />
      </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress = { this.loginSignIn.bind(this)} >
          <Text style={styles.loginText}> Sign In </Text>
      </TouchableHighlight>
    </View> 
 ); 

}


export const PlayAudio = () => {
    onPlay = () => {
              Sound.setCategory('Playback');
                 playSound.play((success) => {
                if(success) {
                    console.log('played success')
                 } else {
                  console.log('unscu')
              }    
            })

       playSound.setVolume(0.5);

       // playSound.setPan(1);

       playSound.setNumberOfLoops(-1);
  }

    stopPlay = () => {
         playSound.stop( () => {
      })
   }
 return (
    <View style={styles.container}>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress = { this.onPlay.bind(this) }>
               <Text style={styles.loginText}>player</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress = { this.stopPlay.bind(this) }>
               <Text style={styles.loginText}>Stop</Text>
          </TouchableHighlight>
      </View>
       )
}

export const BarcodeOpen = () => {
    const [barcode, setBarcode] = useState();
    const [isPermite, setPermite ] = useState(false);

    // onPressEvent = () => {
    //     this.setPermite(true);
    // }
       

if(isPermite) {
    return(
         
         <QRCodeScanner
           onRead = { (e) => {
               setBarcode(e.data);
               setPermite(false);
           }}
            //  topContent= {
            //    <Text style = {styles.TextCenter}> 
            //          Go to {''}
            //         <Text style = {styles.TextBold} > https://www.google.com/ </Text> on your computure to scan QR_code 
            //    </Text>
            // }
           />

    )
    } else {
        return (
         <View style = {styles.container}>
             <View>
                  <TouchableOpacity activeOpacity = {0.1} style = {styles.buttonCss} onPress = { () => { 
                      
                          if(Platform.OS == 'android') {
      async function requestCameraPermission() {
        try {
             const granted = await PermissionsAndroid.request(
                   PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Scanner App camera Permission',
              message: 'Scanner App needs access to your camera ',
            }
          );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            //Calling the WRITE_EXTERNAL_STORAGE permission function
            requestExternalWritePermission();
          } else {
            alert('CAMERA permission denied');
          }
        } catch (err) {
          alert('Camera permission err', err);
          console.warn(err);
        }
      }
    }
                      
                      setPermite(true) }
                      
                      }  >
                      <Text style = {styles.TextAlignCss}> Open Scanner </Text>
                  </TouchableOpacity>
               </View> 
            <View  style= {styles.barcodeView}  >
              <Text> Barcode </Text>
        <Text style= {styles.barcodeCss} > { barcode }</Text>
              </View>
         </View>
     )
  }
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