import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
    
  }, []);
  const getData =async () => { 
    const email = await AsyncStorage.getItem( 'EMAIL');
     if  (email !=='' || email!== null || email !== undefined) 
    navigation.navigate('Home'); 
   else { 
    navigation.navigate('Login');}}
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../Images/Playstore.png')}
        style={{width: 200, height: 200, resizeMode: 'center'}}
      />
    </View>
  );
};

export default Splash;
