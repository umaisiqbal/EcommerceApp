import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Search from '../Bottom/Search';
import Profile from '../Bottom/Profile';
import Main from '../Bottom/Main';
import Love from '../Bottom/Love';
import Cart from '../Bottom/Cart';
import { useSelector } from 'react-redux';
import reducers from '../Redux/reducers/Reducers';
import reducers2 from '../Redux/reducers/Reducers2';

const Home = () => {
  
  const [selectedTab, setSelectedTab] = useState(0);

  const data=useSelector(state=>state);
  return (
    <View style={{flex: 1}}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Love />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../Images/home.png')}
            style={{width: 24, height: 24}}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../Images/search.png')}
            style={{width: 33, height: 33}}></Image>
        </TouchableOpacity>
        <View
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 44,
              height: 44,
              backgroundColor: '#000',
              borderRadius: 22,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: selectedTab == 2 ? 'green' : '#000',
            }}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              source={require('../Images/cart.png')}
              style={{width: 24, height: 24, tintColor: '#fff'}}></Image>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'red',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 5,
                right: 5,
              }}>
              <Text style={{color: '#fff', fontWeight: 600}}>{data.reducers.length}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(3);
          }}
          >
          <Image
            source={require('../Images/heart.png')}
            style={{width: 24, height: 24}}></Image>
             <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'red',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 5,
                right: 5,
              }}>
              <Text style={{color: '#fff', fontWeight: 600}}>{data.reducers2.length}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('../Images/user.png')}
            style={{width: 24, height: 24}}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
