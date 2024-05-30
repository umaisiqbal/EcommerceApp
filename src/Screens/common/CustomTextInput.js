import {View, Text, Image} from 'react-native';
import React, { useState } from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CustomTextInput = ({value, onChangeText, placeholder, icon, type}) => {
 const [text, setText]=useState(value);
  return (
    <View
      style={{
        width: '85%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image source={icon} style={{width: 20, height: 20, marginLeft: 10}} />
      <TextInput
      value={value}
      onChangeText={txt=>{
        onChangeText(txt);
      }}
        placeholder={placeholder}
        placeholderTextColor="black"
        secureTextEntry={type ? true : false}
        style={{marginLeft: 5, color: 'black'}}
        keyboardType={type ? type : 'default'}></TextInput>
    </View>
  );
};

export default CustomTextInput;
