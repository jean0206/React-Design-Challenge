import React, {useState} from 'react';
import Avatar from '../../components/avatar';
import ProductCard from '../../components/productCard';
import IphoneImage from '../../../assets/images/iphone.png';
import Products from '../../utils/products';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Home = ({addToCar}) => {
  const categories = [
    {id: 0, name: 'Popular'},
    {id: 1, name: 'New'},
    {id: 2, name: 'Hot Deals'},
    {id: 3, name: 'Grocery'},
    {id: 4, name: 'Access'},
  ];

  const allProducts = Products;

  const [categorieSelect, setCategorieSelect] = useState(0);
  const [products, setProducts] = useState(allProducts);

  const filterData = categorie => {
    setCategorieSelect(categorie.id);
    if (categorie.name !== 'Popular') {
      const data = allProducts.filter(
        item => item.categories === categorie.name,
      );
      setProducts(data);
    } else {
      setProducts(allProducts);
    }
  };

  const renderCategories = ({item}) => (
    <TouchableOpacity style={styles.button} onPress={() => filterData(item)}>
      <Text
        style={
          categorieSelect === item.id
            ? styles.categorieSelected
            : styles.categorie
        }>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.homeScreen}>
      <View style={styles.header}>
        <View style={styles.titleHeader}>
          <Text style={styles.texto}>Hey! What do you want?</Text>
        </View>
        <View style={styles.avatarHeader}>
          <Avatar></Avatar>
        </View>
      </View>
      <View style={styles.categories}>
        <FlatList
          data={categories}
          horizontal={true}
          renderItem={renderCategories}></FlatList>
      </View>
      <ScrollView contentContainerStyle={styles.products}>
        {console.log(products)}
        {products.map(item => (
          <ProductCard
            name={item.name}
            price={item.price}
            image={item.image}
            color={item.color}
            addFunction={() => addToCar(item)}></ProductCard>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'Metropolis-Bold',
    fontSize: 28,
    color: '#333333',
    fontWeight: '800',
    fontStyle: 'normal',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 60,
  },
  homeScreen: {
    backgroundColor: 'rgba(255, 255, 255, 0.71)',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleHeader: {
    flex: 3,
    width: 230,
    height: 74,
    top: 38,
    left: 28,
  },
  avatarHeader: {
    flex: 1,
    top: 38,
    left: 28,
  },
  categories: {
    marginLeft: 28,
    height: 40,
  },
  categorie: {
    marginHorizontal: 30,
    fontFamily: 'Metropolis',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#BDBDBD',
  },
  categorieSelected: {
    marginHorizontal: 30,
    fontFamily: 'Metropolis',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
  },
  products: {
    top: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  addToCar(item) {
    dispatch({
      type: 'ADD_TO_CAR',
      item,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
