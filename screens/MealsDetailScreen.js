import { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const MealsDetailScreen = ({ route, navigation }) => {
  const { meal } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
    });
  }, [navigation, meal]);

  return (
    <View style={styles.container}>
      <Image src={meal.imageUrl} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.ingredients}>
          <Text style={[styles.title, { fontStyle: 'italic' }]}>{meal.title}</Text>
          <View style={styles.infoContainer}>
            <MaterialIcons name="access-time" size={16} color="black" />
            <Text>{meal.duration} minutes</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text>GlutenFree?</Text>
            {meal.isGlutenFree ? <AntDesign name="check" size={16} color="green" /> : <FontAwesome5 name="ban" size={16} color="red" />}
          </View>
          <View style={styles.infoContainer}>
            <Text>LactoseFree?</Text>
            {meal.isLactoseFree ? <AntDesign name="check" size={16} color="green" /> : <FontAwesome5 name="ban" size={16} color="red" />}
          </View>
          <View style={styles.infoContainer}>
            <Text>Vegetarian?</Text>
            {meal.isVegetarian ? <AntDesign name="check" size={16} color="green" /> : <FontAwesome5 name="ban" size={16} color="red" />}
          </View>
          <Text style={[styles.title, { marginVertical: 16 }]}>INGREDIENTS</Text>
          <FlatList data={meal.ingredients} renderItem={data => <Text style={{ marginBottom: 8 }}>{data.item}</Text>} />
        </View>
        <View style={styles.directions}>
          <Text style={[styles.title, { textDecorationLine: 'underline' }]}>Directions</Text>
          <FlatList
            data={meal.steps}
            renderItem={data => (
              <View style={{ flexDirection: 'row', gap: 3, marginBottom: 8 }}>
                <Text>{data.index + 1}.</Text>
                <Text style={{ width: '90%' }}>{data.item}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 220,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  ingredients: {
    flex: 0.45,
    backgroundColor: '#f7c469',
    padding: 16,
  },
  directions: {
    flex: 0.55,
    backgroundColor: '#f1f4c6',
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
});
export default MealsDetailScreen;
