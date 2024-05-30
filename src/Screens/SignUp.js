import {View, Text, Image} from 'react-native';
import {React, useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import CustomTextInput from './common/CustomTextInput';
import CommonButton from './common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [badPhone, setBadPhone] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const validate = () => {
    setButtonDisabled(true)
    if (name == '') {
      setBadName(true);
      setButtonDisabled(false)
    } else {
      setBadName(false);
      if (email == '') {
        setBadEmail(true);
        setButtonDisabled(false)
      } else {
        setBadEmail(false);
        if (phone == '') {
          setBadPhone(true);
          setButtonDisabled(false)
        } else {
          setBadPhone(false);
          if (password == '') {
            setBadPassword(true);
            setButtonDisabled(false)
          } else {
            setBadPassword(false);
            saveData();
          }
        }
      }
    }
   
  };
  const saveData = async () => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('MOBILE', phone);
    await AsyncStorage.setItem('PASSWORD', password);
    console.log(':yes');
    navigation.goBack();
  };
  return (
    <ScrollView>
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
          SignUp
        </Text>
        <CustomTextInput
          placeholder={'Enter Name'}
          icon={require('../Images/user.png')}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}></CustomTextInput>
        {badName === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            {' '}
            Please Enter Name
          </Text>
        )}
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
          placeholder={'Enter Phone Number'}
          icon={require('../Images/phone.png')}
          value={phone}
          onChangeText={txt => {
            setPhone(txt);
          }}></CustomTextInput>
        {badPhone === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            {' '}
            Please Enter Phone Number
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
          title={'SignUp'}
          bgColor={'#000'}
          textColor={'#fff'}
          onPress={() => {
            validate();
          }}
          disabled={buttonDisabled}
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
            navigation.navigate('Login');
          }}>
          Already have an Account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
