import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {products} from '../Screens/Products';
import MyProductItem from '../Screens/common/MyProductItem';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addToWishlist} from '../Redux/actions/Actions';
const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shoesList, setShoesLits] = useState([]);
  const [jacketList, setJacketLits] = useState([]);
  const [slippersList, setSlippersLits] = useState([]);
  const [trousersList, setTrousersLits] = useState([]);
  useEffect(() => {
    console.log(products);
    let tempCategory = [];
    products.category.map(item => {
      tempCategory.push(item);
    });
    setCategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setShoesLits(products.category[2].data);
    setJacketLits(products.category[3].data);
    console.log(JSON.stringify(products.category[0]));
  }, []);
   const items = useSelector(state => state);
   console.log(items);
  return (
    <ScrollView style={{flex: 1, marginBottom: 65}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../Images/shirts.png')}
          style={{width: '40%', height: 140, alignSelf: 'center'}}></Image>
        <View style={{marginTop: 20}}>
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index,x}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    marginLeft: 20,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: '#000'}}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 15,
            fontWeight: '600',
          }}>
          T Shirts
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={tshirtList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishlist={addToWishlist(x=>
                     dispatch(addToWishlist(x))
                  )

                  }
                 
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 15,
            fontWeight: '600',
          }}>
          Jeans List
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={jeansList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishlist={addToWishlist(x=>
                    dispatch(addToWishlist(x))
                 )

                 }
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 15,
            fontWeight: '600',
          }}>
          Jeans List
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={jeansList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishlist={addToWishlist(x=>
                    dispatch(addToWishlist(x))
                 )

                 }
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
