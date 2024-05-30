import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import CustomTextInput from './common/CustomTextInput';
import CommonButton from './common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const validate = () => {
    if (email == '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (password == '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
      getData();
    }
  };
  const getData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    if(email===mEmail && password===mPass){
      navigation.navigate("Home")
    }
    else {
      alert('wrong information')
    }
    console.log(mEmail, mPass);
  };
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../Images/Playstore.png')}
        style={{width: 150, height: 150, alignSelf: 'center', marginTop: 30}}
      />

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 24,
          fontWeight: '500',
          color: '#000',
        }}>
        Login
      </Text>
      <CustomTextInput
        placeholder={'Enter Email Id'}
        icon={require('../Images/mail.png')}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}></CustomTextInput>
      {badEmail === true && (
        <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
          {' '}
          Please Enter Email Id
        </Text>
      )}
      <CustomTextInput
        type={'password'}
        placeholder={'Enter Password'}
        icon={require('../Images/pswrd.png')}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}></CustomTextInput>
      {badPassword === true && (
        <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
          {' '}
          Please Enter Password
        </Text>
      )}
      <CommonButton
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          validate();
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          alignSelf: 'center',
          marginTop: 20,
          color: 'black',
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        Create New Account?
      </Text>
    </View>
  );
};

export default Login;
