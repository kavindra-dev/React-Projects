import React from 'react';  
//import react in our code.  
import { StyleSheet, View, Button, TextInput,Image,Dimensions,Text } from 'react-native'; 

export default class SplashScreen extends React.Component { 
    static navigationOptions = {  
      headerShown: false,
        title: 'SplashScreen',  
        headerStyle: {  
            backgroundColor: '#ffffff',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  

    render() {  
        const { navigate } = this.props.navigation;  
        return (  
            
        <View style={styles.container}>  
          <View style={styles.header}>
            <Image style={{position: 'absolute',
              width: height_logo ,height: height_logo,}}
              source={require('../ImageAssest/spback.png')}/>
          </View>
          <View style={styles.footer}>  

          <Text style = {{fontSize: 20, color: '#fff', marginBottom:30}}> Welcome To Player Selection Process.</Text>
             <Button title="Click Here To Proceed >> " 
              onPress={() =>this.props.navigation.navigate('Profile')}/>    
          </View>
        </View>  
    );  
    }
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.45;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
    textInput: {  
        height: 45,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20,  marginTop: 40,
    },  
    buttonStyle:{  
        width: 60,
        marginTop: 50,  
        margin:220,
        borderRadius:80,
        backgroundColor: "#ffffff",  
    },header: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#33ECCC',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  }, 
});  