import React from 'react';  
//import react in our code.  
import { StyleSheet, View, Button, TextInput,Image } from 'react-native';  
  
export default class HomeScreen extends React.Component {  
  static navigationOptions = {  
         headerShown: false,
        title: 'Home',  
        headerStyle: {  
            backgroundColor: '#3426AA',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
    render() {  
        const { navigate } = this.props.navigation;  
        return (  
            //View to hold our multiple components  
            <View style={styles.container}>  
            {/*Input to get the value from the user*/} 
            <Image
        style={{
          backgroundColor: '#ccc',
          position: 'absolute',
          width: 450,
          height: 650,
        }}
        source={require('../ImageAssest/pplayer.png')}
      />  
      <View style={styles.header}>
        <View style={styles.buttonStyle}>  
            <Button  
        title="Show Player List >>"  
        // color="#00B0FF"  
        onPress={() =>  
        this.props.navigation.navigate('Player')}/>  
        </View>


         <View style={styles.buttonStyle}>
         <Button  
        title="Add New Player +"  
        // color="#00B0FF"  
        onPress={() =>  
        this.props.navigation.navigate('NPlayer')}/>  
        </View>  

        <View style={styles.buttonStyle1}>
         <Button  
        title="Sign Out"  
        // color="#00B0FF"  
        onPress={() =>  
        this.props.navigation.navigate('Profile')}/>  
        </View>  
        </View> 
        </View> 
    );  
    }}


const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent:'center',
        backgroundColor: '#fff',  
        alignItems: 'center',  
        padding: 16,  
    },  
    textInput: {  
        height: 45,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20,  marginTop: 50,borderRadius:20,textAlign:'center'
    }, 
    textInput1: {  
        height: 45,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20,  marginTop: 20,borderRadius:20,textAlign:'center'
    },  
    buttonStyle:{  
        width: "90%",
        marginTop:20,
        backgroundColor: "#ffffff"  
    },
     buttonStyle1:{  
        width: "90%",
        marginTop:20,
        backgroundColor: "#ffffff",
        marginBottom: 20  
    },
    header: {
      flex: 2,
      width: "95%",
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#33ECCC',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 30
  }, 
});  