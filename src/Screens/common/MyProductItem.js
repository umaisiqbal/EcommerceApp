import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const MyProductItem = ({item, onAddToCart, onAddWishlist}) => {
  return (
    <View
      style={{
        width: 200,
        height: 200,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginBottom: 10,
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: '60%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: '#fff',
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 18,
          fontWeight: '600',
          color: 'black',
        }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
          Rs {item.price}{' '}
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
            paddingTop: 5,
          }}
          onPress={() => {
            onAddToCart(item);
          }}>
          <Text style={{color: 'black'}}>add to cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#fff',
          borderRadius: 20,
          elevation: 5,
          position: 'absolute',
          top: 10,
          right: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          onAddWishlist(item);
        }}>
        <Image
          source={require('../../Images/love.png')}
          style={{width: 24, height: 24}}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default MyProductItem;
