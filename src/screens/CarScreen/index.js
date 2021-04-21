import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import ScooterImage from '../../../assets/images/scooterGuy.png';
import ProductItem from '../../components/ProductItem';
import {useNavigation} from '@react-navigation/native';
import Arrow from '../../../assets/images/arrow.png';

const CarScreen = ({products}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Image source={Arrow} />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Image source={ScooterImage}></Image>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Your Order has arrived!</Text>
        </View>
      </View>
      <View style={styles.productContainer}>
        <FlatList
          style={{flex: 0, top: 10}}
          data={products}
          renderItem={({item}) => (
            <ProductItem
              color={item.color}
              image={item.image}
              name={item.name}
            />
          )}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Metropolis',
    fontWeight: 'bold',
    fontSize: 33,
    textAlign: 'center',
    color: '#333333',
  },
  container: {},
  contentCard: {
    borderTopRightRadius: 80,
    backgroundColor: '#000000',
  },
  backButton: {
    backgroundColor: '#ffffff',
    width: 43,
    height: 43,
    position: 'absolute',
    top: 5,
    left: 5,
    borderRadius: 14,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: 271,
    height: 78,
  },
  productContainer: {
    elevation: 2,
    height: '50%',
    borderRadius: 30,
    zIndex: 4,
    backgroundColor: '#ffffff',
    top: -25,
  },
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '55%',
    backgroundColor: '#ffcaa3',
  },
});

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CarScreen);
