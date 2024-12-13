import React from 'react';  
//import react in our code.  
import { StyleSheet, View, Button, TextInput,Image,ScrollView } from 'react-native';  
  
export default class NewPlayer extends React.Component {  
  
    constructor(props) {  
        //constructor to set default state  
        super(props);  
        this.state = {
            pname:'',
            page:'',
            pmatches:'', 
            pteam:'', 
            ptype:'',
            pfifty:'',
            phundres:'',
            pcatches:'',
            pstrikerate:'',
        };  
    }

    onSubmit = async()=>{
      var count =0
      try{
         await fetch("http://192.168.43.203:3000/player",{
          method:"post",
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            pname:this.state.pname,
            page:this.state.page,
            pmatches:this.state.pmatches,
            ptype:this.state.ptype,
            pfifty:this.state.pfifty,
            phundres:this.state.phundres,
            pcatches:this.state.pcatches,
            pstrikerate:this.state.pstrikerate
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
    this.props.navigation.navigate("Home") 
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
        placeholder={'Team'}  
        style={styles.textInput}  
        />  
       <View style={styles.buttonStyle}>  
            <Button  
        title="Save"  
        // color="#00B0FF"  
        onPress={this.onSubmit}  
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