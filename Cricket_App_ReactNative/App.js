import React from 'react';  
import { SafeAreaView,View } from 'react-native';  
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"; 
import SplashScreen from './Screen/SplashScreen';
import HomeScreen from './Screen/HomeScreen';  
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';  
import PlayerList from './Screen/PlayerList';
import ViewInfo from './Screen/ViewInfo';
import UpdateInfo from './Screen/UpdateInfo';
import NewPlayer from './Screen/NewPlayer';


const AppNavigator = createStackNavigator( 

    {  
    	Splash: SplashScreen,
    	Profile:LoginScreen,
        Home: HomeScreen,  
        Register: RegisterScreen,
        Player: PlayerList,
        Infor: ViewInfo,
        Update: UpdateInfo,
        NPlayer: NewPlayer,

    },  
    {  
        initialRouteName: "Splash"  
    }  
);  
export default createAppContainer(AppNavigator);  