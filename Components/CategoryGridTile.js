import React from 'react';
import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';

const CategoryGridTile = ({ props: { title, color, onPress } }) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable android_ripple={{ color: '#cccccc' }} style={({ pressed }) => [styles.buttonStyle, pressed && styles.buttonPressed]} onPress={onPress}>
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 120,
    elevation: 4,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    //backgroundColor must be set for ios
    backgroundColor: '#ffffff',
  },
  buttonStyle: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
    transform: [{ scale: 0.99 }],
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default CategoryGridTile;
