import { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../Components/MealItem';

const MealsOverViewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const title = CATEGORIES.find(c => c.id === categoryId).title;
    navigation.setOptions({
      title: title,
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={data => <MealItem meal={data.item} />} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default MealsOverViewScreen;
