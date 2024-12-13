import React from 'react';  
//import react in our code.  
import { StyleSheet, View, Button,Text, TextInput,Image,ScrollView } from 'react-native';  
  
export default function ViewInfo({navigation}) {

  let a = navigation.getParam('pname')

        return (
        <ScrollView style={{height:800}}>
        <View style={styles.container}>  
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
          width: 100,
          height: 100,
          marginLeft: 20,
          marginTop:30,
        }}
        source={require('../ImageAssest/splashlogo.png')}
      />  

      <Text
        style={styles.item}>{navigation.getParam('pname')}</Text>
        <Text
        style={styles.item}>{navigation.getParam('page')}</Text>
        <Text
        style={styles.item}>{navigation.getParam('pmatches')}</Text>
        <Text
        style={styles.item}>{navigation.getParam('ptype')}</Text>
        <Text
        style={styles.item}>{navigation.getParam('pfifty')}</Text>
        <Text
        style={styles.item}>{navigation.getParam('phundres')}</Text>
        <Text
        style={styles.item}>{navigation.getParam('pcatches')}</Text>
        <Text
        style={styles.item}>{navigation.getParam('pstrikerate')}</Text>
      </View> 
      <View style={styles.buttonStyle}>  
            <Button  
        title="Update Player Info" 
        onPress ={() =>navigation.navigate("Update", a)}  
        /> 
        </View> 

        <View style={styles.buttonStyle}>  
            <Button  
        title="Delete Player"  
         onPress ={() =>navigation.navigate("Player")}  
        /> 
        </View> 
            
        </View>  
        </ScrollView>
    ) 
    }
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#fff',  
        alignItems: 'center',  
        padding: 16,  
    },  
    textInput: {  
        height: 40,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20,  marginTop: 30,
    }, 
    textInput1: {  
        height: 45,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20,  marginTop: 20,
    },  
    buttonStyle:{  
        width: "93%",  
        marginTop: 20,  
        backgroundColor: "#ffffff",  
    },
     item: {
      alignItems:'center',
      width:200,
    backgroundColor: '#ccccff',
    padding: 10,
    marginVertical: 8,
  },
  header: {
      flex: 3,
      width: "95%",
      justifyContent: 'center',
      alignItems: 'center'
  },
});  