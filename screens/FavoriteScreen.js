import { useContext } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { FavoriteContext } from '../Store/context/favoriteContext';
import { MEALS } from '../data/dummy-data';
import MealItem from '../Components/MealItem';
import { useSelector } from 'react-redux';

const FavoriteScreen = () => {
  const { ids } = useSelector(state => state.favoriteMeals);
  //const favoriteContext = useContext(FavoriteContext);
  //const { ids } = favoriteContext;

  const favoriteMeals = MEALS.filter(meal => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>You have no favorite meals</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={favoriteMeals} keyExtractor={item => item.id} renderItem={data => <MealItem meal={data.item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default FavoriteScreen;
