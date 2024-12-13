import React from 'react';  
//import react in our code.  
import { StyleSheet, View, Button, TextInput,Image,Text} from 'react-native';  
  
export default class LoginScreen extends React.Component {  
  
    constructor(props) {  
        //constructor to set default state  
        super(props);  
        this.state = {  
            username: '',  
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
            username:this.state.username,
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
          height: 780,
        }}
        source={require('../ImageAssest/backpic.png')}
      />  
        <View style={styles.header}>
       <Image
        style={{
          backgroundColor: '#ccc',
          position: 'relative',
          width: 330,
          height: 190,
          marginLeft: 50,
        }}
        source={require('../ImageAssest/splashlogo.png')}
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
        secureTextEntry={true} 
        style={styles.textInput1}  
        />  
        
       <View style={styles.buttonStyle}>  
            <Button  
        title="Log In"  
        // color="#00B0FF"  
        onPress={() =>  
        this.props.navigation.navigate('Home', {  
            userName: this.state.username
        })  
    }  
        /> 
        </View>
         <View>
        <Text style={{fontSize:20, marginTop:15}}
        onPress={() => this.props.navigation.navigate('Register')}>Register Here</Text>
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
        height: 45,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20,  marginTop: 50,borderRadius:20,textAlign:'center'
    }, 
    textInput1: {  
        height: 45,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20,  marginTop: 20,borderRadius:20,textAlign:'center'
    },  
    buttonStyle:{  
        width: "93%",
        marginTop:20,
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