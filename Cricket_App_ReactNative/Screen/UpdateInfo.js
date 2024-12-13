import React from 'react';  
//import react in our code.  
import { StyleSheet, View, Button, TextInput,Image,ScrollView,ActivityIndicator } from 'react-native';  
  
export default class NewPlayer extends React.Component {  
  
    constructor(props) {  
        //constructor to set default state  
        super(props);  
        this.state = {
            isLoading: true,
            data: [],
            pname:'',
            page:'',
            pteam:'',
            pmatches:'',  
            ptype:'',
            pfifty:'',
            phundres:'',
            pcatches:'',
            pstrikerate:'',
        };  
    }  

    componentDidMount(){
    fetch("http://192.168.43.203:3000/loadplayer")
    .then((response) => response.json())
    .then((responseJson) =>{
      this.setState({
        isLoading: false,
        data: responseJson
      })
    })
  }
    static navigationOptions = {  
        title: 'Add New Player Details',  
        headerStyle: {
        backgroundColor: '#fff',  
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
             
            <ScrollView style={{height:800}}>
            <View style={styles.container}>  
            {/*Input to get the value from the user*/} 
            <Image
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          width: 450,
          height: 900,
        }}
        source={require('../ImageAssest/backpic.png')}
      />  
        <View style={styles.header}>
        
        <Image
        style={{
          backgroundColor: '#fff',
          position: 'relative',
          width: 60,
          height: 60,
          marginBottom:30,
          marginTop:20
        }}
        source={require('../ImageAssest/icon.jpg')}
      />  
        <TextInput  
        value={this.state.pname}  
        onChangeText={pname => this.setState({ pname })}  
        placeholder={'Player Name'}  
        style={styles.textInput}  
        />  
         <TextInput  
        value={this.state.page}  
        onChangeText={page => this.setState({ page })}  
        placeholder={'Age(DD/MM/YYYY)'}  
        style={styles.textInput}  
        />  

        <TextInput  
        value={this.state.pmatches}  
        onChangeText={pmatches => this.setState({ pmatches })}  
        placeholder={'Matches'}  
        style={styles.textInput}  
        />  
        <TextInput  
        value={this.state.ptype}  
        onChangeText={ptype => this.setState({ ptype })}  
        placeholder={'Player Type'}  
        style={styles.textInput}  
        />  
         <TextInput  
        value={this.state.pfifty}  
        onChangeText={pfifty => this.setState({ pfifty })}  
        placeholder={'Total 50s'}  
        style={styles.textInput}  
        />  
        <TextInput  
        value={this.state.phundres}  
        onChangeText={phundres => this.setState({ phundres })}  
        placeholder={'Total 100s'}  
        style={styles.textInput}  
        />  
        <TextInput  
        value={this.state.pcatches}  
        onChangeText={pcatches => this.setState({ pcatches })}  
        placeholder={'Total Catches'}  
        style={styles.textInput}  
        />  
        <TextInput  
        value={this.state.pstrikerate}  
        onChangeText={pstrikerate => this.setState({ pstrikerate })}  
        placeholder={'Plyer Strike Rate'}  
        style={styles.textInput}  
        />  
       <View style={styles.buttonStyle}>  
            <Button  
        title="Save"  
        // color="#00B0FF"  
        onPress={() =>  
        this.props.navigation.navigate('Player')
        }  
        /> 
        </View>
        </View>
        </View> 
         </ScrollView>  
         
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
        height: 40,width: "95%",borderColor: "blue", borderWidth: 1,fontSize:18,  marginTop: 20,borderRadius:20,textAlign:'center'
    }, 
    textInput1: {  
        height: 40,width: "95%",borderColor: "blue",borderWidth: 1,fontSize:182,borderRadius:20,textAlign:'center'
    },  
    buttonStyle:{  
        width: "93%",
        marginTop:40,
        marginBottom: 100,
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