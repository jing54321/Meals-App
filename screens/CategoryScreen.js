import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../Components/CategoryGridTile';

const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate('Meals Overview', {
        categoryId: itemData.item.id,
      });
    };
    const { title, color } = itemData.item;
    return <CategoryGridTile props={{ title, color, onPress: pressHandler }} />;
  };
  return <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={renderCategoryItem} numColumns={2} />;
};

const styles = StyleSheet.create({});

export default CategoryScreen;
