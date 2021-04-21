import React from 'react';
import ImageAvatar from '../../../assets/images/avatar.png';

import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Avatar = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Car')}
      style={styles.circle}>
      <Image source={ImageAvatar}></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 49,
    height: 49,
    backgroundColor: '#BFD3F9',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Avatar;
