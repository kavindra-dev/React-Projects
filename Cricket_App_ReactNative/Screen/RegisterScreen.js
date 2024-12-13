import React from 'react';  
//import react in our code.  
import { StyleSheet, View, Button, TextInput,Image,Text,Alert} from 'react-native';  
  
export default class RegisterScreen extends React.Component {  
  
    constructor(props) {  
        //constructor to set default state  
        super(props);  
        this.state = {
            fname:'',  
            username: '',  
            userpass: '',
            phno:'',
        };  
    } 

    onSubmit = async()=>{
      var count =0
      try{
         await fetch("http://192.168.43.203:3000/register-user",{
          method:"post",
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            fname:this.state.fname,
            username:this.state.username,
            userpass:this.state.userpass,
            phno:this.state.phno,
          })
        })
        .then(res=>res.json())
        .then((data)=>{
          count = count + 1
      })
    }
    catch(e){
      console.log(e);
    }
    if(count === 1)
    this.props.navigation.navigate("Profile") 
    }

    static navigationOptions = {  
        title: 'Register Here',  
        headerStyle: {
        backgroundColor: '#fff',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  

    NextScreen = () =>{
      this.props.navigation.navigate('Profile')
    }
    render() {  
        const { navigate } = this.props.navigation; 
        return (  
            //View to hold our multiple components  
            <View style={styles.container}>  
            {/*Input to get the value from the user*/} 
            <Image
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          width: 450,
          height: 780,
        }}
        source={require('../ImageAssest/spback.png')}
      />  
        <View style={styles.header}>

        <Image
        style={{
          backgroundColor: '#fff',
          position: 'relative',
          width: 100,
          height: 100,
          marginBottom:80
        }}
        source={require('../ImageAssest/icon.jpg')}
      />  
        <TextInput  
        value={this.state.fname}  
        onChangeText={fname => this.setState({ fname })}  
        placeholder={'Full Name'}  
        style={styles.textInput1}  
        />  
         <TextInput  
        value={this.state.username}  
        onChangeText={username => this.setState({ username })}  
        placeholder={'E-mail'}  
        style={styles.textInput}  
        />  
        <TextInput  
        value={this.state.userpass}  
        onChangeText={userpass => this.setState({ userpass })}  
        placeholder={'Password'}  
        style={styles.textInput}  
        />  
        <TextInput  
        value={this.state.phno}  
        onChangeText={phno => this.setState({ phno })}  
        placeholder={'Phone No'}  
        style={styles.textInput}  
        />  
       <View style={styles.buttonStyle}>  
            <Button  
        title="Register  >>"  
        // color="#00B0FF"  
        onPress={this.onSubmit}  
        /> 
        </View>
        </View>  
        </View>  
    );  
    }
}
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#fff',  
        alignItems: 'center',  
        padding: 16,  
    },  
    textInput: {  
        height: 45,width: "95%",borderColor: "blue", borderWidth: 1,fontSize:20,  marginTop: 20,borderRadius:20,textAlign:'center'
    }, 
    textInput1: {  
        height: 45,width: "95%",borderColor: "blue",borderWidth: 1,fontSize:20,borderRadius:20,textAlign:'center'
    },  
    buttonStyle:{  
        width: "93%",
        marginTop:40,
        marginBottom: 150,
        backgroundColor: "#ffffff",  
    },
    header: {
      flex: 3,
      width: "95%",
      justifyContent: 'center',
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