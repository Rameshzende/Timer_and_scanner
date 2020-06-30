import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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