import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Computer from '../../../assets/images/computer.png';

const ProductItem = props => {
  return (
    <View style={styles.allContainer}>
      <View style={styles.container}>
        <View style={[styles.productImage, {backgroundColor: props.color}]}>
          <Image style={styles.imageProduct} source={props.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameProduct}>{props.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 5,
  },
  container: {
    width: 327,
    height: 74,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProduct: {
    width: 60,
    height: 60,
  },
  productImage: {
    width: 74,
    height: 74,
    opacity: 49,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: 231,
    height: 53,

    left: 22,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  nameProduct: {
    color: '#4f4f4f',
    fontFamily: 'Metropolis-Bold',
    fontSize: 20,
    fontWeight: '700',
    flexWrap: 'wrap',
    lineHeight: 25,
  },
});

export default ProductItem;
