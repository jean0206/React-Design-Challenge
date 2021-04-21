import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';
import IphoneImage from '../../../assets/images/iphone.png';
import {useNavigation} from '@react-navigation/native';

const ProductCard = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.card, {backgroundColor: props.color}]}>
        <View style={styles.imageCard}>
          <Image source={props.image}></Image>
        </View>
        <View style={styles.action}>
          <TouchableOpacity
            onPress={props.addFunction}
            style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.price}>${props.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    top: 20,
    right: 10,
    marginLeft: 20,
    borderRadius: 35,
  },
  card: {
    width: 147,
    height: 172,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#333333',
    fontFamily: 'Metropolis',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  content: {
    alignItems: 'center',
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Metropolis',
    color: '#808080',
  },
  addButton: {
    color: '#000000',
    width: 35,
    height: 35,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 2,
    left: 10,
  },
  action: {
    flex: 1,
    width: 147,
    height: 172,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  addText: {
    color: '#333333',
    fontSize: 30,
    marginTop: -3,
  },
  imageCard: {
    width: 145,
    height: 145,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCard;
