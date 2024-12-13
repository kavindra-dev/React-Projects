import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

export default class PlayerList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount(){
    fetch("http://192.168.43.203:3000/loadplayer")
    .then((response) => response.json())
    .then((responseJson) =>{
      this.setState({
        isLoading: false,
        dataSource: responseJson
      })
    })
  }

  _renderItem = ({item,index}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}
         onPress={() =>this.props.navigation.navigate('Infor',item)}>{item.pname}</Text>
        </View>
      )
  }

getListViewItem = (item) => {  
      this.props.navigation.navigate('Infor')  
    }  
  render() {
    let {container} = styles
    let {dataSource,isLoading} = this.state
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        keyExtractor={(item,index) => index.toString()}
        renderItem={this._renderItem}
        
      />
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ccccff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    alignContent:'center'
  },
});