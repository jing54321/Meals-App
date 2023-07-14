import React from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const MealItem = ({ meal }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [styles.itemContainer, pressed && styles.buttonPressed]}
      android_ripple={{ color: '#fff' }}
      onPress={() =>
        navigation.navigate('Meals Detail', {
          meal: meal,
        })
      }
    >
      <Image src={meal.imageUrl} style={styles.image} />
      <View>
        <Text style={styles.text}>{meal.title}</Text>
        <View style={styles.summaryContainer}>
          {meal.isVegan ? <AntDesign name="checksquareo" size={16} color="black" /> : <MaterialCommunityIcons name="checkbox-blank-outline" size={16} color="black" />}
          <Text>Vegan</Text>
        </View>
        <View style={styles.summaryContainer}>
          <MaterialIcons name="timer" size={16} color="black" />
          <Text>{meal.duration} mins</Text>
        </View>
        <View style={styles.summaryContainer}>
          {meal.complexity === 'simple' ? (
            <AntDesign name="star" size={16} color="#f2c20c" />
          ) : meal.complexity === 'hard' ? (
            <>
              <AntDesign name="star" size={16} color="#f2c20c" />
              <AntDesign name="star" size={16} color="#f2c20c" />
            </>
          ) : (
            <>
              <AntDesign name="star" size={16} color="#f2c20c" />
              <AntDesign name="star" size={16} color="#f2c20c" />
              <AntDesign name="star" size={16} color="#f2c20c" />
            </>
          )}
          <Text>{meal.complexity}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 12,
    paddingRight: 8,
    elevation: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: '#f5deb3',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: 120,
  },
  text: {
    width: 180,
    textAlign: 'left',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  summaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 4,
  },
  buttonPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.999 }],
  },
});
export default MealItem;
